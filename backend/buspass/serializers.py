
import re
from datetime import date

from rest_framework import serializers

from .models import BusPassApplication


class BusPassApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusPassApplication
        fields = [
            "id",
            "student_name",
            "dob",
            "mobile",
            "gender",
            "course",
            "college_name",
            "address",
            "pass_type",
            "created_at",
        ]
        read_only_fields = ["id", "created_at"]

    def validate_student_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError(
                "Student name is required."
            )
        return value

    def validate_mobile(self, value):
        if not re.fullmatch(r"[0-9]{10}", value):
            raise serializers.ValidationError(
                "Mobile number must contain exactly 10 digits."
            )
        return value

    def validate_dob(self, value):
        if value > date.today():
            raise serializers.ValidationError(
                "Date of birth cannot be in the future."
            )
        return value

    def validate_college_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError(
                "College name is required."
            )
        return value

    def validate_address(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError(
                "Address is required."
            )
        return value
