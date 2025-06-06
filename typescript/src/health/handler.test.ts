import {describe, expect, it} from "vitest";
import {Response, Request} from "express";

const request = require('supertest');
const response = require('supertest');
const express = require('express');

const app = express();

// app.get('/health', function(req, res) {
//   res.status(200);
// });

describe('GET /health', function() {
  it('responds with HTTP 200', function(done) {
    request(app)
      .get('/health')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
