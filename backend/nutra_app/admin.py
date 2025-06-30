from django.contrib import admin
from . import models

admin.site.register(models.Gender)
admin.site.register(models.BodyType)
admin.site.register(models.ActivityLevel)
admin.site.register(models.MealPlan)
admin.site.register(models.Dish)
admin.site.register(models.User)