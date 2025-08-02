from unicodedata import category
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)


class SubCategory(models.Model):
    name = models.CharField(max_length=100)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)


class Products(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
    description = models.TextField(max_length=100)
    category_id = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    