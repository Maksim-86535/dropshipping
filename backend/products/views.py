from django.shortcuts import render, get_object_or_404
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


class ProductsAPIView(APIView):
    def get(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if pk:
            try:
                instance = Product.objects.get(pk=pk)
            except Product.DoesNotExist:
                return Response({"error": "object not found"}, status=404)

            return Response({"data": ProductSerializer(instance).data})
        else:
            products = Product.objects.all()
            return Response({"data": ProductSerializer(products, many=True).data})

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=201)

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk: return Response({"error": "method PUT not allowed"}, status=405)

        try:
            instance = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response({"error": "object not found"}, status=404)

        return Response({"ok": True})

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get("pk", None)
        if not pk: return Response({"error": "method Delete not allowed"}, status=405)
        
        try:
            instance = Product.objects.get(pk=pk)
            instance.delete()
        finally:
            return Response({"massage": f"delete product {pk}"}) 

