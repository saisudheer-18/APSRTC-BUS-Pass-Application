
from django.urls import path

from .views import BusPassApplicationListCreateView

urlpatterns = [
    path(
        "bus-pass-applications/",
        BusPassApplicationListCreateView.as_view(),
        name="bus-pass-applications",
    ),
]
