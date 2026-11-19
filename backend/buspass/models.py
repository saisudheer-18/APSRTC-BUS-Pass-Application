
from django.db import models


class BusPassApplication(models.Model):
    GENDER_CHOICES = [
        ("Male", "Male"),
        ("Female", "Female"),
        ("Other", "Other"),
    ]

    COURSE_CHOICES = [
        ("Intermediate", "Intermediate"),
        ("Diploma", "Diploma"),
        ("Degree", "Degree"),
        ("B.Tech", "B.Tech"),
        ("Other", "Other"),
    ]

    PASS_TYPE_CHOICES = [
        ("Monthly", "Monthly"),
        ("Quarterly", "Quarterly"),
    ]

    student_name = models.CharField(max_length=150)
    dob = models.DateField()
    mobile = models.CharField(max_length=10)

    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES,
    )

    course = models.CharField(
        max_length=20,
        choices=COURSE_CHOICES,
    )

    college_name = models.CharField(max_length=200)
    address = models.TextField()

    pass_type = models.CharField(
        max_length=20,
        choices=PASS_TYPE_CHOICES,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.student_name} - {self.pass_type}"
