import datetime
from django.http import JsonResponse

class CustomAPIMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        # ✅ ALLOW CORS PREFLIGHT REQUESTS
        if request.method == "OPTIONS":
            return self.get_response(request)

        # -------- BEFORE VIEW --------
        method = request.method
        path = request.path
        timestamp = datetime.datetime.now()

        print(f"[{timestamp}] {method} request to {path}")

        # Validate custom header
        client_type = request.headers.get('X-CLIENT-TYPE')

        if not client_type:
            return JsonResponse(
                {"error": "X-CLIENT-TYPE header missing"},
                status=400
            )

        # -------- VIEW EXECUTES --------
        response = self.get_response(request)

        # -------- AFTER VIEW --------
        response['X-SERVER-NAME'] = 'Django-API-Server'

        return response
