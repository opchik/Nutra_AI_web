from django.db import models
from django.contrib.auth.models import AbstractUser

from datetime import date
from dateutil.relativedelta import relativedelta


class Gender(models.Model):
    name = models.CharField()


class BodyType(models.Model):
    name = models.CharField()


class ActivityLevel(models.Model):
    name = models.CharField()


class MealPlan(models.Model):
    name = models.CharField()


class Dish(models.Model):
    name = models.CharField(max_length=180)
    calories = models.IntegerField(blank=True, null=True)
    proteins = models.IntegerField(blank=True, null=True)
    fats = models.IntegerField(blank=True, null=True)
    carbohydrates = models.IntegerField(blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)


class User(AbstractUser):
    weight = models.IntegerField(blank=True, null=True)
    height = models.IntegerField(blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True)
    gender = models.ForeignKey(Gender, blank=True, null=True, on_delete=models.SET_NULL)
    body_type = models.ForeignKey(BodyType, blank=True, null=True, on_delete=models.SET_NULL)
    meal_plan = models.ForeignKey(MealPlan, blank=True, null=True, on_delete=models.SET_NULL)
    activity_level = models.ForeignKey(ActivityLevel, blank=True, null=True, on_delete=models.SET_NULL)
    subcription = models.BooleanField(blank=True, null=True)

    def age(self):
        return relativedelta(date.today(), self.birth_date)
