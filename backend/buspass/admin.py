
from django.contrib import admin

from .models import BusPassApplication


@admin.register(BusPassApplication)
class BusPassApplicationAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "student_name",
        "mobile",
        "college_name",
        "pass_type",
        "created_at",
    )

    search_fields = (
        "student_name",
        "mobile",
        "college_name",
    )

    list_filter = (
        "gender",
        "course",
        "pass_type",
    )

    readonly_fields = ("created_at",)
