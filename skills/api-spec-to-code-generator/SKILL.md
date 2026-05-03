## 1. Skill Metadata

- **name**: apispec-to-code-generator
- **description**: Generates production-grade Python APIs from OpenAPI specifications with validation, standardization, testing (unit + BDD functional), and full deployment using Docker and Infrastructure as Code.
- **version**: 1.0.0
- **author**: SKILL Generator
- **tags**: openapi, fastapi, multi-agent, MCP, BEADS, observability, ci-cd, terraform, docker, bdd, testing

---

## 2. Purpose

### Problem it solves
Transforms OpenAPI specifications into fully functional, production-ready Python APIs while ensuring compliance with API standards and best practices.

### When to use
- When you have an OpenAPI spec and need a working API
- When enforcing API governance and standards
- When automating backend scaffolding and deployment

### Expected outcomes
- Validated and standardized OpenAPI spec
- Fully implemented FastAPI service
- Unit + BDD functional tests
- Dockerized service
- Infrastructure deployed via Terraform
- CI/CD pipeline
- Full observability stack

---

## 3. Capabilities

- Multi-agent decomposition of API generation lifecycle
- OpenAPI validation and normalization
- FastAPI code generation (production-ready)
- Unit test generation (pytest)
- Functional BDD tests (Behave)
- Docker image generation
- Infrastructure provisioning via Terraform
- CI/CD automation via GitHub Actions
- Observability:
  - Logs (structured JSON)
  - Metrics (Prometheus)
  - Traces (OpenTelemetry)
  - Alerts & dashboards

---

## 4. Architecture Overview

### Multi-Agent Workflow

```

User Input (OpenAPI Spec)
↓
Planner Agent
↓
Validator Agent → BEADS (store validated spec)
↓
Code Generator Agent
↓
Test Agent (Unit + BDD)
↓
Infra Agent (Docker + Terraform)
↓
CI/CD Agent
↓
Observability Agent
↓
Final Output

```

### MCP Usage

- Shared context across agents
- Tool invocation for:
  - OpenAPI parsing
  - Code scaffolding
  - Test generation
  - Deployment

### BEADS Integration

- Stores:
  - OpenAPI spec versions
  - Task states
  - Generated artifacts
  - Execution logs

### Observability Architecture

- OpenTelemetry SDK in all agents
- Exporters:
  - OTLP → Jaeger (tracing)
  - Prometheus (metrics)
  - ELK (logs)

### Data + Telemetry Flow

```

Agents → OpenTelemetry SDK → Collector →
→ Jaeger (traces)
→ Prometheus (metrics)
→ ELK (logs)

````

---

## 5. Agent Design

### 5.1 Planner Agent

- **Role**: Decompose tasks
- **Input**: OpenAPI spec
- **Output**: Execution plan
- **Tools**: MCP planner tools
- **BEADS**: Creates task entries
- **Telemetry**: Task planning duration

---

### 5.2 Validator Agent

- **Role**: Validate & standardize OpenAPI
- **Input**: Raw spec
- **Output**: Clean spec
- **Tools**: Spectral, OpenAPI validators
- **BEADS**: Stores validated spec
- **Telemetry**: Validation errors, compliance score

---

### 5.3 Code Generator Agent

- **Role**: Generate FastAPI code
- **Input**: Validated spec
- **Output**: API code
- **Tools**: Jinja templates, MCP codegen
- **BEADS**: Stores code artifacts
- **Telemetry**: Code generation time

---

### 5.4 Test Agent

- **Role**: Generate tests
- **Input**: API code
- **Output**:
  - Unit tests (pytest)
  - Functional tests (Behave)
- **Tools**: pytest, behave
- **BEADS**: Stores test cases
- **Telemetry**: Test coverage %

---

### 5.5 Infra Agent

- **Role**: Docker + Terraform
- **Input**: Codebase
- **Output**: Infra configs
- **Tools**: Docker, Terraform
- **BEADS**: Stores infra state
- **Telemetry**: Deployment readiness

---

### 5.6 CI/CD Agent

- **Role**: Generate pipelines
- **Input**: Repo structure
- **Output**: GitHub Actions YAML
- **Telemetry**: Pipeline success rate

---

### 5.7 Observability Agent

- **Role**: Inject observability
- **Input**: Codebase
- **Output**: Instrumented system
- **Tools**: OpenTelemetry SDK
- **Telemetry**: Meta-observability metrics

---

## 6. Execution Workflow

1. Input OpenAPI spec
2. Planner decomposes tasks
3. Validator cleans spec
4. BEADS stores validated version
5. Code generator builds API
6. Test agent creates tests
7. Infra agent prepares Docker + Terraform
8. CI/CD agent sets pipeline
9. Observability agent instruments system
10. Final output generated

---

## 7. MCP Integration

### Usage

- Shared context across agents
- Tool-based execution

### Example MCP Call

```json
{
  "tool": "openapi_parser",
  "input": {
    "spec": "openapi.yaml"
  }
}
````

---

## 8. BEADS Integration

### Memory Schema

```json
{
  "task_id": "uuid",
  "state": "running",
  "artifacts": {},
  "logs": []
}
```

### Task Lifecycle

```
created → running → completed → failed
```

### Retry Handling

* Automatic retry on failure (max 3)
* State persisted in BEADS

---

## 9. Observability

### 9.1 Logging

* JSON structured logs
* Fields:

  * trace_id
  * span_id
  * agent_name
* Centralized via ELK

---

### 9.2 Metrics

* API request count
* Latency (p50, p95, p99)
* Error rate
* Agent execution time
* Test coverage

---

### 9.3 Distributed Tracing

* OpenTelemetry
* Trace:

  * Each agent
  * MCP calls
  * API requests

---

### 9.4 Dashboards

* Grafana dashboards:

  * API performance
  * Agent metrics
  * Errors

---

### 9.5 Alerting

* High latency
* Error spikes
* Failed deployments
* Agent failures

---

### 9.6 Implementation

```python
from opentelemetry import trace
from opentelemetry.instrumentation.fastapi import FastAPIInstrumentor

FastAPIInstrumentor.instrument_app(app)
```

---

## 10. Code Generation Requirements

* FastAPI-based
* Modular structure
* Exception handling
* Env-based config
* Logging + tracing enabled

---

## 11. CI/CD Pipeline (GitHub Actions)

```yaml
name: CI-CD

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install deps
        run: pip install -r requirements.txt

      - name: Lint
        run: flake8 .

      - name: Test
        run: pytest

      - name: BDD Tests
        run: behave

      - name: Build Docker
        run: docker build -t api .

      - name: Deploy
        run: terraform apply -auto-approve

      - name: Health Check
        run: curl http://localhost:8000/health
```

---

## 12. Infrastructure as Code (Terraform)

```hcl
provider "aws" {
  region = "us-east-1"
}

resource "aws_lambda_function" "api" {
  function_name = "openapi-api"
  package_type  = "Image"
  image_uri     = "repo/api:latest"
  role          = aws_iam_role.lambda_role.arn
}

resource "aws_cloudwatch_log_group" "api_logs" {
  name = "/aws/lambda/openapi-api"
}

resource "aws_cloudwatch_metric_alarm" "high_error" {
  alarm_name          = "high-error-rate"
  comparison_operator = "GreaterThanThreshold"
  threshold           = 5
}
```

---

## 13. Project Structure

```
src/
  main.py
  routes/
  models/
tests/
  unit/
  functional/
infra/
  terraform/
observability/
  tracing.py
.github/workflows/
config/
  settings.py
Dockerfile
```

---

## 14. Example Usage

### Input

```
openapi.yaml
```

### CLI

```bash
skill run openapi-python-api-generator --input openapi.yaml
```

### Output

* FastAPI app
* Tests
* Dockerfile
* Terraform configs
* CI/CD pipeline

---

## 15. Extensibility

### Add new agents

* Define new agent class
* Register in planner

### Extend observability

* Add custom metrics
* Add new exporters

### Swap cloud providers

* Replace Terraform modules

### Add MCP tools

* Register new tools in MCP client