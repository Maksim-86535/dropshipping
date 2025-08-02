from rest_framework import serializers
from django.core.validators import MinValueValidator

from .models import Product


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=63)
    price = serializers.IntegerField(validators=[MinValueValidator])
    description = serializers.CharField(max_length=511, allow_blank=True)

    def create(self, validated_data):
        return Product.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.price = validated_data.get("price", instance.price)
        instance.description = validated_data.get("description", instance.description)
        instance.save()
