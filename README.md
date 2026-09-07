# 🛠️ Claude Developer Toolkit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Go Version](https://img.shields.io/badge/Go-1.20%2B-00ADD8?logo=go)](https://golang.org)
[![Python Version](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python)](https://python.org)
[![AI Partner](https://img.shields.io/badge/AI-Anthropic%20Claude%203.5-D97706?logo=anthropic)](https://anthropic.com)

A curated collection of developer workflows, system prompt architectures, algorithmic optimizations, and CLI patterns developed using **Anthropic's Claude**. Created by **Daniel Oche Okoh** ([@Symplythatguy](https://github.com/Symplythatguy)) as part of the **Claude Ambassador Program** candidate submission.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Repository Structure](#-repository-structure)
- [Featured Workflows & Case Studies](#-featured-workflows--case-studies)
  - [1. Go Memory & Buffer Optimization](#1-go-memory--buffer-optimization)
  - [2. Multi-Base Numerical Conversion Engine](#2-multi-base-numerical-conversion-engine)
  - [3. Structured System Prompting for Systems Engineering](#3-structured-system-prompting-for-systems-engineering)
- [Prompt Engineering Frameworks](#-prompt-engineering-frameworks)
- [How to Run & Reproduce](#-how-to-run--reproduce)
- [Campus & Community Vision (UNILAG)](#-campus--community-vision-unilag)
- [License](#-license)

---

## 🚀 Overview

The **Claude Developer Toolkit** demonstrates how modern software engineers in training can leverage Claude (Anthropic models) as an interactive pair-programmer, system architect, and optimization advisor. 

Rather than using LLMs merely for quick code generation, this toolkit illustrates an iterative engineering process:
- **Architectural Brainstorming & Trade-off Analysis**
- **Buffer & Heap Allocation Optimization in Systems Languages (Go)**
- **Edge-Case Diagnostics & Unit Test Generation**
- **Automated Shell & CLI Pipeline Development**

---

## 📂 Repository Structure

```text
claude-developer-toolkit/
├── go-optimizations/
│   ├── string_builder/       # Memory-efficient string manipulation benchmarks
│   ├── base_converter/       # CLI base conversion utility architecture
│   └── ascii_renderer/       # Terminal ASCII banner rendering pipeline
├── python-automation/
│   ├── api_parsers/          # Headless API ingestion & JSON parsing scripts
│   └── environment_setup/    # Automated virtual environment deployment
├── prompts/
│   ├── go_code_refactoring.md   # Prompt template for Go complexity analysis
│   ├── system_architect.md      # System prompt template for CLI tool design
│   └── algorithm_explainer.md   # Educational breakdown prompt structure
├── docs/
│   └── claude_ambassador_vision.md # UNILAG workshop roadmaps and guides
└── README.md
```

---

## 💡 Featured Workflows & Case Studies

### 1. Go Memory & Buffer Optimization

* **Problem Statement:** Sequential string concatenation inside heavy loops in Go creates excessive heap allocations due to immutable string properties.
* **Claude-Assisted Solution:** Utilizing Claude 3.5 Sonnet to refactor naive `+` string operations into pre-allocated `strings.Builder` buffers.
* **Result:** Achieved significantly reduced dynamic memory allocation and improved execution time in CLI batch file processing.

```go
// Refactored with Claude: Efficient Buffer Pre-allocation
func ProcessLines(lines []string) string {
    var builder strings.Builder
    // Estimate capacity to minimize reallocation overhead
    totalLen := 0
    for _, line := range lines {
        totalLen += len(line) + 1
    }
    builder.Grow(totalLen)

    for _, line := range lines {
        builder.WriteString(line)
        builder.WriteByte('\n')
    }
    return builder.String()
}
```

### 2. Multi-Base Numerical Conversion Engine

* **Overview:** A modular command-line tool built in Go capable of parsing, validating, and converting numeric inputs dynamically across Binary, Decimal, and Hexadecimal representations.
* **Claude's Role:** 
  - Formulated edge-case validation rules for mixed signed/unsigned inputs.
  - Guided the design of clean error-wrapping logic using Go standard library patterns.

### 3. Structured System Prompting for Systems Engineering

This repository encapsulates specialized prompt engineering templates designed to turn Claude into an ideal code reviewer for low-level or systems programming tasks.

```markdown
### Target Prompt Architecture
- **Role:** Senior Go Systems Architect & Performance Specialist
- **Context:** Low-latency command-line utility operating under constraint environments
- **Task:** Analyze the provided function for unnecessary memory allocations, boundary condition bugs, and idiom alignment with standard Go practices.
- **Constraints:** Avoid third-party dependencies; utilize standard library packages exclusively (`os`, `io`, `fmt`, `bufio`).
```

---

## 🛠️ Prompt Engineering Frameworks

This toolkit introduces the **C.A.R.E.** framework tailored for developer workflows:

1. **Context:** Provide concrete background on the environment (e.g., Go 1.20+, OS context, performance target).
2. **Action:** State the explicit engineering objective (e.g., refactor, optimize, generate tests).
3. **Restriction:** Enforce strict guardrails (e.g., zero external dependencies, standard memory limits).
4. **Evaluation:** Request time/space complexity analysis ($O(n)$ notation) alongside the output code.

---

## 💻 How to Run & Reproduce

### Prerequisites
* [Go 1.20+](https://golang.org/dl/)
* [Python 3.10+](https://www.python.org/)
* Git & standard Bash terminal environment

### Clone & Run

```bash
# Clone the repository
git clone https://github.com/Symplythatguy/claude-developer-toolkit.git

# Navigate into the project directory
cd claude-developer-toolkit

# Run Go String Builder Benchmark
cd go-optimizations/string_builder
go test -bench=. -benchmem

# Test Python API Utility
cd ../../python-automation/api_parsers
python3 -m venv venv
source venv/bin/activate
python3 parse_data.py
```

---

## 🎓 Campus & Community Vision (UNILAG)

As an undergraduate at the **University of Lagos (UNILAG)** and an aspiring **Claude Ambassador**, I plan to utilize this repository as an active open-source curriculum for student developers:

* **Campus Workshops:** Hosting interactive sessions on *"Leveraging Claude for Systems Programming & Algorithmic Design."*
* **Student Peer Mentorship:** Assisting peer developers in adopting prompt engineering techniques to understand compiler errors, debug code logically, and accelerate self-paced learning.
* **Open Source Contributions:** Encouraging UNILAG computer science students to submit prompt templates and Go/Python utilities directly to this repository.

---

## 📄 License

This repository is distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

<p center>
  Developed with ❤️ by <strong>Daniel Oche Okoh</strong> • 
  <a href="https://linkedin.com/in/daniel-briar-0ab85a338">LinkedIn</a> • 
  <a href="mailto:danielbriar369@gmail.com">Email</a>
</p>
