import pytest

from unittest.mock import MagicMock
from app import create_app
from service.health_checker import HealthChecker


@pytest.fixture
def mock_health():
    """Fixture to provide a mocked Health Service."""
    mock_health_service = MagicMock(spec=HealthChecker)  # Create a mock of Health Service
    return mock_health_service


def test_health_check_endpoint(mock_health):
    """
    GIVEN a Flask application configured for testing
    WHEN the '/health' endpoint is hit with a HTTP GET request
    THEN the response status is 200
    """
    expected_value = True
    mock_health.is_healthy.return_value = expected_value

    flask_app = create_app().test_client()
    response = flask_app.get('/health')

    assert response.status_code == 200
    assert response.text == "server is healthy"