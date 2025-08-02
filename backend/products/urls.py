from django.urls import path

from .views import ProductsAPIView


app_name = "products"


urlpatterns = [
    path("api/v1/products/", ProductsAPIView.as_view()),
    path("api/v1/products/<int:pk>/", ProductsAPIView.as_view()),
]
