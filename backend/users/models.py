from django.db import models
from django.core.validators import MinValueValidator


class User(models.Model):
    name: models.CharField(max_length=63)
    money: models.IntegerField(validators=[MinValueValidator(0)])
