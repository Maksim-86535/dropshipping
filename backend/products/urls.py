from django.urls import path

from .views import ProductsAPIView


app_name = "products"


urlpatterns = [
    path("products/", ProductsAPIView.as_view()),
    path("products/<int:pk>/", ProductsAPIView.as_view()),
]
