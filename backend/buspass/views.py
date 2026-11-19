
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import BusPassApplication
from .serializers import BusPassApplicationSerializer


class BusPassApplicationListCreateView(
    generics.ListCreateAPIView
):
    queryset = BusPassApplication.objects.all()
    serializer_class = BusPassApplicationSerializer
    permission_classes = [AllowAny]
