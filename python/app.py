from flask import Flask

from service.health_checker import HealthChecker

def create_app():
    app = Flask(__name__)

    @app.route("/health")
    def health():
        if HealthChecker.is_healthy:
            return "server is healthy"

    return app


if __name__ == '__main__':
    create_app().run(host="0.0.0.0", port=8000, debug=True)