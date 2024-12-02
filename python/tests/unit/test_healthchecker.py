from service.health_checker import HealthChecker

def test_health_checker():
    healthy_response = HealthChecker.is_healthy()
    assert healthy_response == True
