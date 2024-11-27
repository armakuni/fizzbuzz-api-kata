from app import app


def test_health_check_endpoint():
    """
    GIVEN a Flask application configured for testing
    WHEN the '/health' endpoint is hit with a HTTP GET request
    THEN the response status is 200
    """
    flask_app = app.test_client()
    response = flask_app.get('/health')
    assert response.status_code == 200