from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'

    def validate_age(self, value):
        if value < 18 or value > 60:
            raise serializers.ValidationError("Age must be between 18 and 60")
        return value
