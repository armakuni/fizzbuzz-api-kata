import sys
from unittest.mock import patch

import mock
from app import create_app

from service.health_checker import HealthChecker

@patch.object(sys.modules['app.create_app'], 'HealthChecker')
# @mock.patch('app.create_app')
def test_health_check_endpoint(self, health_checker):
    """
    GIVEN a Flask application configured for testing
    WHEN the '/health' endpoint is hit with a HTTP GET request
    THEN the response status is 200
    """
    # with mock.patch.object(health_checker.HealthChecker, 'is_healthy', new_init):
    #     thirdpartymodule_b.dosomething()  # -> print 43
    # thirdpartymodule_b.dosomething()  # -> print 42

    # with patch.object(HealthChecker, 'is_healthy', return_value=True) as mock_method:
    #     thing = HealthChecker()
    #     thing.is_healthy()

    # mock_method.return_value = True
    health_checker.is_healthy().return_value = True

    flask_app = create_app.test_client()
    response = flask_app.get('/health')

    # mock_method.assert_called_once_with()

    assert response.status_code == 200
    assert response.text == "server is healthy"