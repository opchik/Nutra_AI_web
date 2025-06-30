from django.urls import path
from . import views

urlpatterns = [
    path('api/users/', views.UserListView.as_view(), name='users-list'),
    path('api/dishes/', views.DishListView.as_view(), name='dishes-list'),
    path('api/users/add', views.UserCreateView.as_view(), name='users-add'),
    path('api/dishes/add', views.DishCreateView.as_view(), name='dishes-add'),
]