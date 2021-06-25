from django.urls import path, include
from rest_framework.routers import DefaultRouter
from API import views

router = DefaultRouter()
router.register(r'institute', views.InstituteViewSet)
router.register(r'department', views.DepartmentViewSet)
router.register(r'order', views.OrderViewSet, basename='order')
router.register(r'ordervrijgifte', views.OrderVrijgifteViewSet, basename='ordervrijgifte')
router.register(r'batch', views.BatchViewSet, basename='batch')
router.register(r'batchrow', views.BatchRowViewSet)
router.register(r'pillstoadd', views.PillsToBeAddedViewSet)
router.register(r'orderbatch', views.OrderBatchViewSet, basename='orderbatch')
router.register(r'roll', views.RollViewSet)
router.register(r'bag', views.BagViewSet)
router.register(r'missingpictures', views.MissingPicturesViewSet)
router.register(r'error', views.ErrorViewSet)
router.register(r'check', views.ChecksViewSet, basename='checks')

urlpatterns = [
    path('', include(router.urls)),
]
