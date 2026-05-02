## Skill: `openapi-client-generator`

## 🧠 Overview

The **openapi-client-generator** skill transforms an **OpenAPI Specification (OAS 3.x)** into a **production-ready API client** in a target programming language and framework.

It performs:

* Spec validation & normalization
* API design corrections (if needed)
* Client SDK generation
* Test generation (unit + functional)
* Documentation generation

---

## 🎯 Goals

* Generate **clean, idiomatic, production-grade client code**
* Ensure **API spec compliance with OpenAPI standards**
* Provide **fully testable SDK**
* Enable **easy integration into real-world applications**

---

## 📥 Inputs

```yaml
openapi_spec: string | file_path | URL
target_language: python | typescript | java | go
http_library: optional (e.g., requests, axios, httpx)
auth_strategy: optional (apiKey, oauth2, bearer)
generate_tests: true | false
generate_docs: true | false
```

---

## 📤 Outputs

```
/client
  /src
    api_client.*
    endpoints/*
    models/*
    exceptions/*
  /tests
    unit/*
    functional/*
  /docs
    usage.md
    api_reference.md
  config.*
  README.md
```

---

## 🧩 Architecture (Multi-Agent Flow)

### 1. 📘 Spec Ingestion Agent

* Accepts OpenAPI spec (JSON/YAML/URL)
* Resolves `$ref`
* Converts to canonical format

---

### 2. ✅ Validation & Linting Agent

Ensures:

* OpenAPI 3.x compliance
* Valid schema definitions
* Proper request/response structures

Fixes:

* Missing types
* Invalid formats
* Inconsistent naming

---

### 3. 🔧 Normalization Agent

Standardizes:

* Naming conventions (snake_case / camelCase)
* Endpoint grouping (tags → modules)
* Error response consistency

---

### 4. 🏗️ Client Generator Agent

Generates:

#### Core Client

* Base API client
* Request builder
* Response parser
* Retry & timeout handling

#### Endpoint Wrappers

* One method per API operation
* Typed inputs/outputs
* Path/query/body handling

#### Models

* Strongly typed models from schemas
* Serialization/deserialization

#### Auth Handling

* API Key / OAuth2 / Bearer support

---

### 5. 🧪 Test Generator Agent

#### Unit Tests

* Mock HTTP responses
* Validate request construction
* Validate response parsing

#### Functional Tests

* Use test server / mock server
* Validate end-to-end flows

Supports:

* pytest / unittest / jest / junit

---

### 6. 📚 Documentation Agent

Generates:

* Usage guide
* Authentication instructions
* Endpoint examples
* Error handling guide

---

### 7. 🔍 Quality & Compliance Agent

Checks:

* Code linting (PEP8 / ESLint / etc.)
* Type safety
* Test coverage
* Security best practices

---

## ⚙️ Features

### ✔ Smart Enhancements

* Auto-retry with exponential backoff
* Pagination helpers
* Rate-limit handling
* Logging hooks

---

### ✔ Error Handling

* Typed exceptions
* API error mapping
* Graceful fallbacks

---

### ✔ Extensibility

* Middleware support
* Interceptors/hooks
* Custom headers injection

---

## 🧪 Example Execution

### Input

```yaml
openapi_spec: ./petstore.yaml
target_language: python
http_library: httpx
generate_tests: true
generate_docs: true
```

---

### Output Highlights

#### Example Client Method

```python
def get_pet_by_id(self, pet_id: int) -> Pet:
    response = self._client.get(f"/pet/{pet_id}")
    return Pet.from_dict(response.json())
```

---

#### Example Test

```python
def test_get_pet_by_id(mock_client):
    mock_client.get.return_value.json.return_value = {"id": 1, "name": "dog"}
    pet = api.get_pet_by_id(1)
    assert pet.name == "dog"
```

---

## 🧠 Memory & State (BEADS Compatible)

Tracks:

* Spec parsing state
* Validation issues
* Generated artifacts
* Task progress

---

## 🔌 MCP Integration (Optional)

Supports:

* Fetching specs from remote registries
* Using external validators
* Code formatting services
* Test execution services

---

## 🚀 CI/CD Integration (Optional Extension)

Can generate:

* GitHub Actions workflow
* Test automation pipeline
* Linting & formatting checks

---

## 🔐 Security Considerations

* Avoid hardcoding secrets
* Support env-based config
* Secure auth handling
* Input validation

---

## 📈 Future Enhancements

* GraphQL client generation
* Async streaming APIs
* SDK versioning support
* Multi-language parallel generation

---

## 🧭 Usage Pattern

```text
User → Provide OpenAPI Spec
   ↓
Skill → Validate + Normalize
   ↓
Skill → Generate Client + Tests + Docs
   ↓
User → Ready-to-use SDK
```

---

## 🏁 Summary

The **openapi-client-generator** skill provides a **fully automated pipeline** to convert OpenAPI specs into **production-ready API clients**, ensuring:

* ✅ Standards compliance
* ✅ Clean architecture
* ✅ Test coverage
* ✅ Developer usability