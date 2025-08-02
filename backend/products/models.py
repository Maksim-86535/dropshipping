from django.db import models
from django.core.validators import MinValueValidator

from users.models import User


class Product(models.Model):
    title = models.CharField(max_length=63, verbose_name="Назва")
    price = models.IntegerField(validators=[MinValueValidator(0)], verbose_name="Ціна")
    description = models.CharField(max_length=511, blank=True, verbose_name="Опис")

    def __str__(self):
        return self.title

    
