from django.test import TestCase
from django.urls import reverse


class ChatApiTests(TestCase):
    def test_conversations(self):
        response = self.client.get(reverse('conversations'))
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(isinstance(data, list))
        self.assertGreaterEqual(len(data), 1)

    def test_messages(self):
        response = self.client.get(reverse('messages', kwargs={'username': 'test-user'}))
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertTrue(isinstance(data, list))
        self.assertGreaterEqual(len(data), 1)

