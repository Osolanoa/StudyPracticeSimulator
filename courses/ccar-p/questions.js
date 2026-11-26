/* CCAR-P: 126 unique questions (37 duplicates removed) adapted from 33 user-provided Examice PDF pages.
 * The source answer key is third-party and not endorsed or verified by Anthropic.
 * Visual matrix questions (9) are adapted to multi-select using the same semantic answer keys.
 * Stable question IDs are required for browser-local progress.
 */
window.COURSE_QUESTIONS = [
  {
    "id": "CCARP-001",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are evaluating potential Claude use cases. Select all scenarios where Claude is appropriate as the PRIMARY architectural solution; leave the others unselected.",
    "options": [
      {
        "id": "A",
        "text": "Drafting first-pass investigative reports from semi-structured incident logs for analyst review"
      },
      {
        "id": "B",
        "text": "Computing real-time fraud scores at sub-50-millisecond latency on a streaming pipeline"
      },
      {
        "id": "C",
        "text": "Long-context contract review with structured clause extraction and deviation flagging"
      },
      {
        "id": "D",
        "text": "Replacing a vector index for semantic retrieval over a multi-million-document corpus"
      },
      {
        "id": "E",
        "text": "Routing inbound support tickets into 30 categories with reasoning for the chosen routing"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Use Claude for language understanding and generation, not deterministic or ultra-low-latency infrastructure.",
    "optionExplanations": {
      "A": "Correct — Drafting from messy logs is a language task; analyst review controls errors.",
      "B": "Not selected — Sub-50 ms scoring needs a purpose-built deterministic or ML service.",
      "C": "Correct — Long context and structured clause extraction fit document reasoning.",
      "D": "Not selected — A vector index provides scalable retrieval; Claude can reason over its results.",
      "E": "Correct — Ticket classification and a routing rationale are bounded language tasks."
    },
    "reference": "CCAR-P practice PDF, Q1 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-002",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A managed agent deployment for claims triage has grown from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool selection latency has increased by 2.3 seconds. A junior engineer has proposed adding a tool router agent in front of the current agent to filter the tool list per request. Which two findings should you present to justify capability decomposition before adding the router? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Tool descriptions overlap across multiple claim categories within the agent’s tool set."
      },
      {
        "id": "B",
        "text": "Several tools have not been invoked across the most recent 90 days of traffic."
      },
      {
        "id": "C",
        "text": "The 34 tools serve four distinct claim-workflow domains within the triage scope."
      },
      {
        "id": "D",
        "text": "The router pattern is well documented across publicly available agent literature."
      },
      {
        "id": "E",
        "text": "The proposed router introduces an additional model call on every incoming request."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Decompose when tool-selection ambiguity corresponds to separable business capabilities.",
    "optionExplanations": {
      "A": "Correct — Overlapping descriptions make it difficult to distinguish the right tool.",
      "B": "Not selected — Unused tools suggest pruning, not necessarily splitting the remaining capabilities.",
      "C": "Correct — Four distinct workflows provide natural boundaries for specialized agents.",
      "D": "Not selected — Documentation of a pattern does not establish its suitability here.",
      "E": "Not selected — An extra call adds latency, but does not prove the current tools form distinct domains."
    },
    "reference": "CCAR-P practice PDF, Q2 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-003",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are evaluating a Claude platform design for thousands of concurrent users. Select every statement that reflects sound architectural practice.",
    "options": [
      {
        "id": "A",
        "text": "Authentication and authorization happen before retrieval so data can be filtered by identity."
      },
      {
        "id": "B",
        "text": "An asynchronous queue absorbs bursty traffic between request intake and the model invocation layer."
      },
      {
        "id": "C",
        "text": "Tax computations are encoded directly in the system prompt rather than deterministic code."
      },
      {
        "id": "D",
        "text": "Conversation logs include unredacted government identifiers to maximize signal for tuning."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Separate identity, traffic management, deterministic computation and sensitive logging.",
    "optionExplanations": {
      "A": "Correct — Enforcing identity before retrieval prevents restricted data from entering context.",
      "B": "Correct — A queue smooths bursts and protects downstream capacity.",
      "C": "Not selected — Tax calculation requires reproducible rules and deterministic computation.",
      "D": "Not selected — Unredacted identifiers create privacy and leakage risks."
    },
    "reference": "CCAR-P practice PDF, Q3 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-004",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are comparing patterns for a batch document-classification job that follows fixed steps: extract metadata, classify, summarize, and persist. Which pattern is the best fit and why?",
    "options": [
      {
        "id": "A",
        "text": "A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store."
      },
      {
        "id": "B",
        "text": "An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks."
      },
      {
        "id": "C",
        "text": "An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability."
      },
      {
        "id": "D",
        "text": "A workflow pattern, because the steps are well-defined and predictable per- request token cost is preferred over flexibility."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Fixed stages call for predictable orchestration rather than open-ended planning.",
    "optionExplanations": {
      "A": "Not selected — The workflow choice is right, but agents can invoke tools too.",
      "B": "Not selected — Flexible planning is unnecessary when all steps are already known.",
      "C": "Not selected — Agent accuracy is workload-dependent; it is not categorically superior.",
      "D": "Correct — Explicit stages control execution and make per-document cost more predictable."
    },
    "reference": "CCAR-P practice PDF, Q4 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-005",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A platform team operates a self-hosted multi-agent system on Kubernetes that orchestrates seven specialized agents for invoice processing. The team spends approximately 40 percent of engineering capacity on infrastructure maintenance, message bus reliability, and agent state recovery. The CFO has asked you to evaluate moving to managed agent infrastructure to reclaim engineering capacity. The security officer requires that all customer financial data remain within an approved network boundary. Which factor should most heavily influence your recommendation?",
    "options": [
      {
        "id": "A",
        "text": "Whether the current seven agents map cleanly to the patterns supported by managed agents."
      },
      {
        "id": "B",
        "text": "Whether managed agents reduce per-invoice token costs across the existing processing volume."
      },
      {
        "id": "C",
        "text": "Whether managed agents support the current bus topology used by the platform team."
      },
      {
        "id": "D",
        "text": "Whether managed agent data handling satisfies the network boundary required by security."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Security's approved network boundary is a non-negotiable adoption constraint.",
    "optionExplanations": {
      "A": "Not selected — Pattern compatibility matters only after mandatory data-handling requirements are satisfied.",
      "B": "Not selected — Cost savings cannot compensate for a prohibited data transfer.",
      "C": "Not selected — Existing bus compatibility is an implementation consideration, not the governing constraint.",
      "D": "Correct — The managed service must meet the required data boundary before migration is viable."
    },
    "reference": "CCAR-P practice PDF, Q5 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-006",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are selecting a pattern for a compliance Q&A assistant that must answer policy questions with citations to the authoritative internal source set. Latency, cost, and audit predictability are prioritized. Which pattern is the best fit?",
    "options": [
      {
        "id": "A",
        "text": "augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer"
      },
      {
        "id": "B",
        "text": "Multi-agent orchestration with a planner, researcher, and writer agent for every query."
      },
      {
        "id": "C",
        "text": "A pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus."
      },
      {
        "id": "D",
        "text": "A static prompt with the entire policy corpus concatenated into every request."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A single retrieval-and-generation path meets the grounding, cost and audit goals.",
    "optionExplanations": {
      "A": "Correct — Retrieving approved passages allows traceable citations with limited orchestration.",
      "B": "Not selected — Three agents add calls and variability without a need for open-ended planning.",
      "C": "Not selected — Web sources can fall outside the authoritative policy corpus.",
      "D": "Not selected — Sending the entire corpus wastes tokens and makes targeted evidence harder to isolate."
    },
    "reference": "CCAR-P practice PDF, Q6 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-007",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response. Which design pattern best addresses this issue without sacrificing capability breadth?",
    "options": [
      {
        "id": "A",
        "text": "Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task."
      },
      {
        "id": "B",
        "text": "Use a separate model call to summarize all 60 tool definitions before each user turn."
      },
      {
        "id": "C",
        "text": "Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability."
      },
      {
        "id": "D",
        "text": "Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Load definitions only when relevant, while preserving access to the full catalog.",
    "optionExplanations": {
      "A": "Correct — On-demand discovery reduces initial context without permanently removing tools.",
      "B": "Not selected — Summarization adds a model call and may lose important invocation details.",
      "C": "Not selected — A bigger context window does not remove token processing cost or latency.",
      "D": "Not selected — A fixed subset can exclude the tool actually needed for the request."
    },
    "reference": "CCAR-P practice PDF, Q7 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-008",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "For an invoice-processing pipeline, select ALL correctly assigned component-to-stage mappings. Some mappings below are intentionally wrong.",
    "options": [
      {
        "id": "A",
        "text": "Claude-based classification of invoice type → Model Stage"
      },
      {
        "id": "B",
        "text": "Persistence of validated records to the system of record → Post-Processing"
      },
      {
        "id": "C",
        "text": "Schema validation of the extracted fields → Post-Processing"
      },
      {
        "id": "D",
        "text": "Claude-based extraction of structured invoice fields → Model Stage"
      },
      {
        "id": "E",
        "text": "PII redaction on extracted text before model invocation → Pre-Processing"
      },
      {
        "id": "F",
        "text": "Optical character recognition on scanned invoice images → Pre-Processing"
      },
      {
        "id": "G",
        "text": "PII redaction on extracted text → Model Stage"
      },
      {
        "id": "H",
        "text": "Schema validation of extracted fields → Pre-Processing"
      },
      {
        "id": "I",
        "text": "Persisting validated records → Model Stage"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "explanation": "Preprocessing prepares inputs, the model interprets them, and post-processing validates and persists outputs.",
    "optionExplanations": {
      "A": "Correct — Invoice type classification is semantic inference performed by the model.",
      "B": "Correct — Writing approved records happens after generation and validation.",
      "C": "Correct — Checking extracted fields requires the model's output to exist.",
      "D": "Correct — Extraction converts document content into structured fields using the model.",
      "E": "Correct — Redaction before invocation prevents unnecessary exposure of identifiers.",
      "F": "Correct — OCR turns scanned images into usable text before inference.",
      "G": "Not selected — Relying on the model to redact exposes the sensitive input first.",
      "H": "Not selected — The extracted fields are not available until the model has run.",
      "I": "Not selected — Persistence is a downstream deterministic operation, not model reasoning."
    },
    "reference": "CCAR-P practice PDF, Q8 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-010",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Match request-lifecycle tactics to their appropriate stage. Select ALL correct tactic-to-stage mappings.",
    "options": [
      {
        "id": "A",
        "text": "Persist validated output for downstream consumption and audit → Output Handling"
      },
      {
        "id": "B",
        "text": "Put cacheable sections before per-request content → Prompt Construction"
      },
      {
        "id": "C",
        "text": "Summarize old conversation history when full history is no longer needed → Input Preparation"
      },
      {
        "id": "D",
        "text": "Validate structured model output against its schema → Output Handling"
      },
      {
        "id": "E",
        "text": "Move stable repeated content into a cacheable prefix at the start of the prompt → Prompt Construction"
      },
      {
        "id": "F",
        "text": "Trim retrieved passages to spans relevant to the user question → Input Preparation"
      },
      {
        "id": "G",
        "text": "Validate structured output against its schema → Input Preparation"
      },
      {
        "id": "H",
        "text": "Move repeated content into a cacheable prefix → Output Handling"
      },
      {
        "id": "I",
        "text": "Persist validated output for audit → Prompt Construction"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "explanation": "Place each tactic where its input is available and its effect is needed.",
    "optionExplanations": {
      "A": "Correct — Audit persistence consumes validated results after generation.",
      "B": "Correct — Stable content must precede variable content to enable prefix reuse.",
      "C": "Correct — Compressing history prepares the next request's input.",
      "D": "Correct — Schema checking operates on generated output.",
      "E": "Correct — A stable leading prefix is established when constructing the prompt.",
      "F": "Correct — Relevant passage selection reduces the context before prompt assembly.",
      "G": "Not selected — Output validation cannot occur before the output exists.",
      "H": "Not selected — Caching a prompt prefix must occur before inference, not afterward.",
      "I": "Not selected — Persisting generated results is downstream of prompt construction."
    },
    "reference": "CCAR-P practice PDF, Q10 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-011",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are reviewing a peer’s draft system prompt that contains contradictory instructions: one section says to never speculate beyond the supplied source, and another says to confidently fill in any gaps. Which response is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Add a priority-ordering instruction that tells the model to evaluate all available instructions and apply the most contextually appropriate one on each request."
      },
      {
        "id": "B",
        "text": "Increase the temperature setting so that output randomness masks the contradictions."
      },
      {
        "id": "C",
        "text": "Resolve the contradiction by removing or rewording the gap-filling instruction so the prompt consistently constrains the model to source-supported content."
      },
      {
        "id": "D",
        "text": "Keep both contradictory instructions in place and rely on the model to select which one to follow on each individual request, accepting inconsistent behavior as a result."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Resolve conflicting requirements in the prompt rather than asking the model to guess.",
    "optionExplanations": {
      "A": "Not selected — Context-dependent prioritization leaves the contradictory instruction in force.",
      "B": "Not selected — Temperature changes randomness, not logical consistency.",
      "C": "Correct — Removing the gap-filling conflict makes grounding behavior explicit and testable.",
      "D": "Not selected — Leaving contradictions permits unpredictable behavior on identical evidence."
    },
    "reference": "CCAR-P practice PDF, Q11 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-012",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query. The CFO has asked you to reduce per-query costs while preserving response quality. The security officer requires that filing contents not be stored outside Fabrikam’s tenancy. Which optimization approach should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Summarize each filing once at intake and run all subsequent queries against the summary."
      },
      {
        "id": "B",
        "text": "Cache the filing as the prompt prefix for reuse across the 14 queries per case."
      },
      {
        "id": "C",
        "text": "Index filings in a vector store and retrieve only the relevant passages per query."
      },
      {
        "id": "D",
        "text": "Move the workload to a smaller Claude model to reduce the per-token cost paid."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Repeated use of the same 80,000-token filing creates an opportunity for prefix reuse, subject to approved data-handling controls.",
    "optionExplanations": {
      "A": "Not selected — A summary may discard details needed for a later legal question.",
      "B": "Correct — Reusing an unchanged filing prefix reduces repeated processing without shortening the evidence; confirm cache handling meets the tenancy requirement.",
      "C": "Not selected — Retrieval can reduce input size, but passage selection may omit evidence needed for broad legal analysis.",
      "D": "Not selected — A smaller model changes the capability profile and may degrade analysis quality."
    },
    "reference": "CCAR-P practice PDF, Q12 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-013",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Match chunking strategies to the type of corpus they best serve. Select ALL correct strategy-to-corpus mappings.",
    "options": [
      {
        "id": "A",
        "text": "Function- or section-level chunking for code modules → Code or Hierarchical Specs"
      },
      {
        "id": "B",
        "text": "Tree-aware chunking following code/specification hierarchy → Code or Hierarchical Specs"
      },
      {
        "id": "C",
        "text": "Per-record chunks containing one short record each → Heterogeneous Short Records"
      },
      {
        "id": "D",
        "text": "Semantic chunks at clauses or paragraphs → Long Structured Documents"
      },
      {
        "id": "E",
        "text": "Fixed-size overlapping chunks for similarly sized short records → Heterogeneous Short Records"
      },
      {
        "id": "F",
        "text": "Hierarchical chunks mirroring document section structure → Long Structured Documents"
      },
      {
        "id": "G",
        "text": "Tree-aware chunks for code → Heterogeneous Short Records"
      },
      {
        "id": "H",
        "text": "Per-record chunks for short records → Long Structured Documents"
      },
      {
        "id": "I",
        "text": "Fixed-size chunks for short records → Code or Hierarchical Specs"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],
    "explanation": "Align chunk boundaries with the structure users actually need to retrieve.",
    "optionExplanations": {
      "A": "Correct — Functions and sections preserve meaningful units of code or specifications.",
      "B": "Correct — Tree-aware boundaries retain parent-child context in hierarchical material.",
      "C": "Correct — One record per chunk avoids mixing unrelated short records.",
      "D": "Correct — Clauses and paragraphs preserve semantic continuity in lengthy documents.",
      "E": "Correct — Regular short records can be grouped with predictable overlap where appropriate.",
      "F": "Correct — Section hierarchy preserves document structure and related context.",
      "G": "Not selected — Tree boundaries do not naturally describe unrelated short records.",
      "H": "Not selected — Record boundaries are not the main structural units of long documents.",
      "I": "Not selected — Arbitrary fixed-size slices can break code functions and hierarchy."
    },
    "reference": "CCAR-P practice PDF, Q13 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-015",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Select every accurate statement about information-retrieval strategies (unselected statements are False).",
    "options": [
      {
        "id": "A",
        "text": "Dense vector retrieval is well suited to paraphrased intent in unstructured text."
      },
      {
        "id": "B",
        "text": "Sparse term-matching is more reliable than dense-only retrieval for exact identifiers and rare tokens."
      },
      {
        "id": "C",
        "text": "Structured query retrieval suits filters and aggregates over an indexed relational database."
      },
      {
        "id": "D",
        "text": "Hybrid retrieval is identical to dense-only retrieval in recall characteristics."
      },
      {
        "id": "E",
        "text": "Random sampling of a datastore is a reliable retrieval strategy for production Q&A."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Select retrieval according to the representation of the query and corpus.",
    "optionExplanations": {
      "A": "Correct — Dense embeddings help match meaning when exact wording differs.",
      "B": "Correct — Term matching preserves rare names, codes and exact identifiers.",
      "C": "Correct — Relational queries can apply precise predicates and aggregations.",
      "D": "Not selected — Hybrid combines complementary sparse and dense signals, so recall can differ.",
      "E": "Not selected — Random records are not selected for relevance to the question."
    },
    "reference": "CCAR-P practice PDF, Q15 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-016",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are designing a content moderation classifier that processes high volumes of user-generated comments under a tight per-message latency budget using well-defined classification labels. Which model selection best aligns with the workload?",
    "options": [
      {
        "id": "A",
        "text": "Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity."
      },
      {
        "id": "B",
        "text": "Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth."
      },
      {
        "id": "C",
        "text": "Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict."
      },
      {
        "id": "D",
        "text": "Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A bounded, high-volume classification task favors the lightest model that meets the quality bar.",
    "optionExplanations": {
      "A": "Not selected — Maximum reasoning adds unnecessary latency and cost to routine labels.",
      "B": "Correct — Haiku fits limited reasoning and strict throughput constraints; validate on representative data.",
      "C": "Not selected — Model size alone does not justify the additional latency.",
      "D": "Not selected — Extended reasoning for every comment is disproportionate to a defined label-selection task."
    },
    "reference": "CCAR-P practice PDF, Q16 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-017",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Select every claim that reflects sound prompting practice (unselected claims are False).",
    "options": [
      {
        "id": "A",
        "text": "Zero-shot is a reasonable starting point for closed-set classification if categories are clearly described."
      },
      {
        "id": "B",
        "text": "A few-shot set using exact field names can anchor extraction formatting."
      },
      {
        "id": "C",
        "text": "Chain-of-thought should be the default for every task regardless of complexity."
      },
      {
        "id": "D",
        "text": "An even-handed comparison with stated criteria reduces bias from leading questions."
      },
      {
        "id": "E",
        "text": "Prompt behavior across model versions can be ignored once one version is validated."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Match prompting complexity to the task and verify behavior when conditions change.",
    "optionExplanations": {
      "A": "Correct — Clear category definitions can make examples unnecessary initially.",
      "B": "Correct — Examples demonstrate the required schema and reduce formatting ambiguity.",
      "C": "Not selected — Simple tasks do not need multi-step reasoning prompts by default.",
      "D": "Correct — Explicit neutral criteria reduce leading assumptions.",
      "E": "Not selected — A model upgrade can change instruction-following behavior; retesting matters."
    },
    "reference": "CCAR-P practice PDF, Q17 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-018",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Select every generally TRUE model-selection claim.",
    "options": [
      {
        "id": "A",
        "text": "Heavier-reasoning models often use more rate-limit budget and respond more slowly than lighter models."
      },
      {
        "id": "B",
        "text": "A representative-sample evaluation on the real target workload is the right basis for confirming a model choice."
      },
      {
        "id": "C",
        "text": "The most capable model is always the right choice regardless of workload."
      },
      {
        "id": "D",
        "text": "Tiered routing can use a lighter model for routine traffic and a heavier one for difficult requests."
      },
      {
        "id": "E",
        "text": "The most recently announced version is automatically the best production choice."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "Select the model empirically against the workload's quality, latency and cost requirements.",
    "optionExplanations": {
      "A": "Correct — More intensive reasoning can consume more budget and increase latency.",
      "B": "Correct — Representative samples test actual task quality rather than relying on model reputation.",
      "C": "Not selected — Excess capability can waste budget or miss latency targets.",
      "D": "Correct — Routing allocates expensive reasoning where its added value is needed.",
      "E": "Not selected — Newness is not evidence that a model meets this workload's requirements."
    },
    "reference": "CCAR-P practice PDF, Q18 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-019",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are selecting a model for a new production workload and must complete the upstream steps before testing candidate models empirically. Which two steps must be completed BEFORE running a representative sample on a candidate model? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Select the lightest model that consistently meets the quality bar across the sample."
      },
      {
        "id": "B",
        "text": "Retest the model choice when a new model version becomes available."
      },
      {
        "id": "C",
        "text": "Choose a candidate model based on the requirements profile and known capabilities."
      },
      {
        "id": "D",
        "text": "Define the quality bar, latency tolerance, and expected volume for the workload."
      },
      {
        "id": "E",
        "text": "Sign off the production rollout plan with the platform and security teams."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Define requirements and select a candidate before measuring it on representative inputs.",
    "optionExplanations": {
      "A": "Not selected — The lightest acceptable model can only be identified after evaluation.",
      "B": "Not selected — Version-upgrade retesting is a later lifecycle activity.",
      "C": "Correct — Known capabilities narrow the candidates before empirical comparison.",
      "D": "Correct — Quality, latency and volume define the criteria against which candidates are tested.",
      "E": "Not selected — Production sign-off follows evidence that the selected model meets requirements."
    },
    "reference": "CCAR-P practice PDF, Q19 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-020",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are investigating an MCP server that fails on first launch but succeeds on subsequent runs. The system permission dialogs appeared on first launch. Which response is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed."
      },
      {
        "id": "B",
        "text": "Reinstall the operating system to clear all permission state, and do not first confirm whether the one-time permission grant was the actual cause of failure."
      },
      {
        "id": "C",
        "text": "Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs."
      },
      {
        "id": "D",
        "text": "Treat the first-run failure as a permanent fault, replace the MCP server with an alternative implementation, and do not verify whether subsequent runs succeed."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A transient first-run permission prompt should be confirmed and documented before changing infrastructure.",
    "optionExplanations": {
      "A": "Correct — Subsequent successful runs support a one-time permission-grant explanation.",
      "B": "Not selected — Reinstallation is disruptive and does not isolate the actual cause.",
      "C": "Not selected — Disabling permission prompts removes a security control unnecessarily.",
      "D": "Not selected — Replacing a working server ignores evidence that the failure is transient."
    },
    "reference": "CCAR-P practice PDF, Q20 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-021",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are compiling factors that should drive the choice between Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff. Which two factors belong on the list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Whether the vendor publishes detailed reference documentation for each candidate protocol."
      },
      {
        "id": "B",
        "text": "Whether the team has prior implementation experience with any of the candidate protocols."
      },
      {
        "id": "C",
        "text": "Whether the underlying transport supports encryption in transit between the integrated services."
      },
      {
        "id": "D",
        "text": "Whether the integration must be portable across multiple AI clients in the ecosystem."
      },
      {
        "id": "E",
        "text": "Whether the interaction is stateless and latency-sensitive or stateful and longer- running."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Choose the integration pattern by interoperability and the nature of the interaction.",
    "optionExplanations": {
      "A": "Not selected — Documentation quality helps implementation but does not determine the architecture.",
      "B": "Not selected — Existing expertise affects effort, not the underlying fit of the protocol.",
      "C": "Not selected — Encryption is a security requirement across all candidate mechanisms.",
      "D": "Correct — Portability across clients is a core advantage of a standard integration protocol.",
      "E": "Correct — State, duration and latency distinguish direct calls from longer-lived integrations."
    },
    "reference": "CCAR-P practice PDF, Q21 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-022",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are selecting a protocol for a single low-latency stateless tool call from a Claude-based assistant to an internal pricing service that already exposes a stable HTTP API. Which integration mechanism is the most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "A direct API call to the existing endpoint with the appropriate scoped credentials."
      },
      {
        "id": "B",
        "text": "A long-lived stateful session protocol for a stateless single-call interaction."
      },
      {
        "id": "C",
        "text": "A bespoke streaming protocol layered over an unrelated asynchronous message bus."
      },
      {
        "id": "D",
        "text": "An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Use the existing HTTP boundary for a simple, stateless pricing lookup.",
    "optionExplanations": {
      "A": "Correct — A scoped direct request avoids extra hops and fits the existing contract.",
      "B": "Not selected — A persistent session adds state that the request does not need.",
      "C": "Not selected — Custom streaming and a message bus add complexity without a streaming requirement.",
      "D": "Not selected — Another agent adds inference and orchestration to a deterministic service call."
    },
    "reference": "CCAR-P practice PDF, Q22 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-023",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are assessing a Claude-based system whose dominant risk is silent quality drift on safety relevant outputs after a model-version upgrade. Which assessment activity most directly addresses this risk?",
    "options": [
      {
        "id": "A",
        "text": "Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production."
      },
      {
        "id": "B",
        "text": "Rotate adversarial inputs randomly so no two upgrades are scored on the same set."
      },
      {
        "id": "C",
        "text": "Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic."
      },
      {
        "id": "D",
        "text": "Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Detect model-version safety drift by comparing like-for-like adversarial evaluations before rollout.",
    "optionExplanations": {
      "A": "Not selected — Skipping testing leaves regressions undiscovered until production.",
      "B": "Not selected — Changing the dataset each time confounds model changes with test-set changes.",
      "C": "Not selected — Complaints are reactive and may miss silent failures.",
      "D": "Correct — A stable set and version-specific scores isolate behavioral changes and support promotion gates."
    },
    "reference": "CCAR-P practice PDF, Q23 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-024",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are designing a human-in-the-loop validation workflow. Which two design elements belong in the workflow? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "capture of reviewer decisions as labeled data that feeds the evaluation set over time"
      },
      {
        "id": "B",
        "text": "mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment"
      },
      {
        "id": "C",
        "text": "aggregate reviewer throughput metrics published weekly to leadership for headcount planning"
      },
      {
        "id": "D",
        "text": "uniform sampling of all model outputs to give every request an equal chance of review"
      },
      {
        "id": "E",
        "text": "risk-stratified sampling that concentrates reviewer attention on low-confidence and high- impact outputs"
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Human review should focus on risk and generate feedback that improves future evaluation.",
    "optionExplanations": {
      "A": "Correct — Reviewer judgments become labeled examples for measuring and improving the system.",
      "B": "Not selected — Requiring agreement defeats independent oversight and correction.",
      "C": "Not selected — Throughput reporting is useful operationally but does not design the validation loop.",
      "D": "Not selected — Uniform sampling can underrepresent rare but high-impact errors.",
      "E": "Correct — Risk-based sampling spends limited review capacity where failures matter most."
    },
    "reference": "CCAR-P practice PDF, Q24 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-025",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. Which two test types should be prioritized to cover both safety-under-attack and cross-component correctness? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Adversarial tests using prompt-injection and malformed-input cases."
      },
      {
        "id": "B",
        "text": "Regression tests against a stable reference set of previously known-good outputs."
      },
      {
        "id": "C",
        "text": "unit tests targeting individual prompt-template rendering logic only"
      },
      {
        "id": "D",
        "text": "Integration tests that verify end-to-end pipeline behavior across all components."
      },
      {
        "id": "E",
        "text": "smoke tests to verify core paths after each deployment"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Test hostile inputs and the complete pipeline to cover the two stated risks.",
    "optionExplanations": {
      "A": "Correct — Adversarial cases probe injection and malformed-input handling.",
      "B": "Not selected — Regression testing detects changes to established behavior but is not the direct attack or integration test.",
      "C": "Not selected — Template unit tests cannot establish cross-component correctness.",
      "D": "Correct — Integration tests verify that components and security controls work together.",
      "E": "Not selected — Smoke tests establish basic availability, not thorough adversarial or end-to-end coverage."
    },
    "reference": "CCAR-P practice PDF, Q25 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-026",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. Which two diagnostic actions most directly identify the root cause of this behavior? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Increase the context-window size to allow more retrieved chunks per query."
      },
      {
        "id": "B",
        "text": "Switch the retrieval index to a denser embedding model to improve chunk-relevance scores."
      },
      {
        "id": "C",
        "text": "Isolate whether the failure reproduces on the previous model version to test for model mismatch."
      },
      {
        "id": "D",
        "text": "Reduce the temperature setting to lower response variance across all query types."
      },
      {
        "id": "E",
        "text": "Inspect system-prompt grounding instructions to determine whether citation constraints remain intact."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Isolate changes to model behavior and grounding instructions before tuning unrelated components.",
    "optionExplanations": {
      "A": "Not selected — More context does not identify why the model contradicts evidence already retrieved.",
      "B": "Not selected — A denser index changes retrieval even though the reported failure did not originate there.",
      "C": "Correct — Comparing with the previous model isolates a possible version regression.",
      "D": "Not selected — Lower temperature may reduce variation but does not diagnose missing grounding constraints.",
      "E": "Correct — Inspecting the prompt checks whether evidence and citation requirements were lost or weakened."
    },
    "reference": "CCAR-P practice PDF, Q26 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-027",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A pilot AI assistant for procurement specialists shows 89 percent first-response acceptance, but follow- up surveys reveal that specialists frequently override the assistant’s vendor recommendations after consulting unrelated criteria the assistant did not consider. The pilot owner wants to ship the assistant as is, given the strong acceptance rate. Which two discernment-competency observations should you raise BEFORE approving the launch? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Acceptance does not measure whether recommendations are right after specialist review."
      },
      {
        "id": "B",
        "text": "The survey response rate may not be statistically representative of all the specialists."
      },
      {
        "id": "C",
        "text": "The unconsidered criteria represent a scope gap in the assistant’s input space directly."
      },
      {
        "id": "D",
        "text": "The acceptance rate alone is sufficient evidence of readiness for general production use."
      },
      {
        "id": "E",
        "text": "The pilot duration was likely too short to establish reliability across the full year."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "First-response acceptance is not validated decision quality, particularly when important criteria are omitted.",
    "optionExplanations": {
      "A": "Correct — Initial acceptance does not capture later corrections by specialists.",
      "B": "Not selected — Survey representativeness is worth assessing, but the question already identifies specific quality and scope failures.",
      "C": "Correct — Missing decision criteria mean the assistant lacks necessary inputs to make sound recommendations.",
      "D": "Not selected — Acceptance alone ignores the documented overrides.",
      "E": "Not selected — Pilot length may matter, but extending it without addressing the identified gaps will not resolve them."
    },
    "reference": "CCAR-P practice PDF, Q27 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-028",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "The platform team at Trenova Systems, Inc. needs to reduce per-query cost and p95 latency for a high- volume Claude pipeline without degrading output quality on the core use case. Which two optimizations directly target both cost and latency simultaneously? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls."
      },
      {
        "id": "B",
        "text": "Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases."
      },
      {
        "id": "C",
        "text": "Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls."
      },
      {
        "id": "D",
        "text": "Add a retrieval step that fetches the full source corpus into the context window before generation."
      },
      {
        "id": "E",
        "text": "Expand the system prompt to include additional few-shot examples for every request."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Reduce repeated input processing and reserve expensive inference for cases that need it.",
    "optionExplanations": {
      "A": "Correct — Prefix caching cuts repeated input processing and can reduce latency.",
      "B": "Correct — A faster model handles routine queries more cheaply if it maintains the required quality.",
      "C": "Not selected — A larger output allowance may help truncation but does not generally reduce cost and latency.",
      "D": "Not selected — Fetching the full corpus increases input processing and usually worsens both metrics.",
      "E": "Not selected — More examples enlarge the prompt; quality gains must justify their overhead."
    },
    "reference": "CCAR-P practice PDF, Q28 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-029",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "After a prompt template update, several previously passing test cases now produce unexpected outputs. Which test type is specifically designed to detect this category of failure?",
    "options": [
      {
        "id": "A",
        "text": "Integration tests that validate cross-component pipeline behavior."
      },
      {
        "id": "B",
        "text": "Adversarial tests that probe for prompt-injection vulnerabilities."
      },
      {
        "id": "C",
        "text": "Regression tests scored against a stable reference set of known-good behavior."
      },
      {
        "id": "D",
        "text": "Smoke tests that confirm high-level system availability after the change."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Compare the updated prompt against known-good behavior to catch regressions.",
    "optionExplanations": {
      "A": "Not selected — Integration tests establish interactions between components, not specifically changed historical behavior.",
      "B": "Not selected — Adversarial tests target attack resistance rather than ordinary previously passing cases.",
      "C": "Correct — A stable reference set reveals whether the prompt change broke an established capability.",
      "D": "Not selected — Basic availability can pass even when individual output quality has regressed."
    },
    "reference": "CCAR-P practice PDF, Q29 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-031",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are rolling out monitoring for a Claude-based deployment and must complete the specification steps before instrumenting the deployment. Which two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Define the metrics and the slices the deployment will monitor across normal and adversarial traffic."
      },
      {
        "id": "B",
        "text": "Tune the alert thresholds based on observed normal-state distributions to reduce false positives."
      },
      {
        "id": "C",
        "text": "Define the service-level objectives (SLOs) and the error budgets the deployment will be held to."
      },
      {
        "id": "D",
        "text": "Build the dashboards that surface metrics across slices at the cadence the team operates on."
      },
      {
        "id": "E",
        "text": "Document the dashboards, alerts, and runbooks for the on-call rotation that will respond."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Specify what to measure and what performance is acceptable before implementing instrumentation.",
    "optionExplanations": {
      "A": "Correct — Metrics and slices define which signals must be captured.",
      "B": "Not selected — Threshold tuning needs actual baseline distributions collected after instrumentation.",
      "C": "Correct — SLOs and error budgets determine which measurements matter and when to alert.",
      "D": "Not selected — Dashboards consume the metrics; they come after instrumentation.",
      "E": "Not selected — Operational documentation follows the definition and construction of the monitoring system."
    },
    "reference": "CCAR-P practice PDF, Q31 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-032",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are an architect supporting the iteration phase of a deployed Claude-based system. Which activity most directly fits this phase?",
    "options": [
      {
        "id": "A",
        "text": "Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed."
      },
      {
        "id": "B",
        "text": "Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle."
      },
      {
        "id": "C",
        "text": "Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes."
      },
      {
        "id": "D",
        "text": "Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Iteration is evidence-driven improvement of a live system against established evaluation criteria.",
    "optionExplanations": {
      "A": "Not selected — Full redesign is justified only when architectural changes are necessary.",
      "B": "Not selected — Go-live begins production learning; it does not end evaluation.",
      "C": "Not selected — Discarding the benchmark removes the ability to measure improvement consistently.",
      "D": "Correct — Telemetry, sampled quality and stakeholder feedback identify a targeted, measurable improvement."
    },
    "reference": "CCAR-P practice PDF, Q32 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-033",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude architect at a health services organization is defining evaluation metrics for a clinical- summary pipeline. The pipeline must remain within a per query cost ceiling and must never surface patient data to unauthorized roles. Which two metrics directly address these requirements? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "BLEU score computed against a human-annotated reference summary set"
      },
      {
        "id": "B",
        "text": "Role-based access-control enforcement rate measured on a red-team dataset"
      },
      {
        "id": "C",
        "text": "Throughput measured as successful requests processed per minute"
      },
      {
        "id": "D",
        "text": "Per-query token cost measured against the defined cost ceiling"
      },
      {
        "id": "E",
        "text": "Response latency at the 95th percentile across a one-week sample window"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Measure the stated cost limit and access-control requirement directly.",
    "optionExplanations": {
      "A": "Not selected — Summary similarity measures text quality, not spending or authorization.",
      "B": "Correct — Red-team authorization tests expose whether restricted data can reach unauthorized roles.",
      "C": "Not selected — Request throughput measures capacity rather than either stated requirement.",
      "D": "Correct — Per-query spending can be compared directly with the budget ceiling.",
      "E": "Not selected — P95 latency measures response speed, not cost or authorization."
    },
    "reference": "CCAR-P practice PDF, Q33 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-034",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship tier model (25 percent). Stakeholders require that projection accuracy remain unchanged. Which two optimizations should you sequence first to reduce cost without affecting accuracy? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Reduce the number of historical sales chunks retrieved across each query run."
      },
      {
        "id": "B",
        "text": "Truncate the policy preamble to remove non-essential clauses from the prompt."
      },
      {
        "id": "C",
        "text": "Enable prompt caching on the static policy preamble across the recurring calls."
      },
      {
        "id": "D",
        "text": "Switch the workload to a smaller, faster Claude model tier across all queries."
      },
      {
        "id": "E",
        "text": "Cache common retrieved sales chunks accessed across many of the daily queries."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Start with reuse of unchanged information to save processing without removing evidence or reducing model capability.",
    "optionExplanations": {
      "A": "Not selected — Fewer sales chunks can remove evidence needed for accurate projections.",
      "B": "Not selected — Truncating policy risks dropping governing constraints.",
      "C": "Correct — Caching the repeated policy prefix targets the largest cost contributor without rewriting it.",
      "D": "Not selected — A smaller model may change projection quality and needs evaluation first.",
      "E": "Correct — Reusing common chunks can reduce repeated retrieval work; prompt-token savings require a cacheable input prefix."
    },
    "reference": "CCAR-P practice PDF, Q34 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-035",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. Which configuration adjustment most directly improves latency without disproportionately damaging quality?",
    "options": [
      {
        "id": "A",
        "text": "Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions."
      },
      {
        "id": "B",
        "text": "Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content."
      },
      {
        "id": "C",
        "text": "Increase retrieval depth to the corpus maximum to improve recall regardless of latency."
      },
      {
        "id": "D",
        "text": "Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Reduce unnecessary context and repeated processing while retaining historically sufficient evidence.",
    "optionExplanations": {
      "A": "Not selected — Disabling caching increases the work repeated on each request.",
      "B": "Correct — A validated top-k keeps relevant evidence while caching removes redundant prefix processing.",
      "C": "Not selected — Maximum retrieval adds more context and may slow inference substantially.",
      "D": "Not selected — Heavier reasoning adds latency when routine quality is already acceptable."
    },
    "reference": "CCAR-P practice PDF, Q35 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-036",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band. Which response is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool’s full user population."
      },
      {
        "id": "B",
        "text": "Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release."
      },
      {
        "id": "C",
        "text": "Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population."
      },
      {
        "id": "D",
        "text": "Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A high score on one narrow population is not evidence of performance across the intended population.",
    "optionExplanations": {
      "A": "Not selected — Convenience-based qualitative impressions do not resolve coverage gaps.",
      "B": "Correct — Expanding across intended regions and tenure bands tests whether performance generalizes.",
      "C": "Not selected — Narrowing the dataset makes representativeness worse.",
      "D": "Not selected — High scores on the existing subset cannot establish reliability for unrepresented groups."
    },
    "reference": "CCAR-P practice PDF, Q36 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-037",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are reviewing instrumentation in a multi-agent system. Which two findings constitute valid observability gaps in the instrumentation? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Trace spans for each agent step are exported to the shared distributed-tracing backend."
      },
      {
        "id": "B",
        "text": "Latency and token usage on every span are emitted to the central metrics pipeline."
      },
      {
        "id": "C",
        "text": "Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields."
      },
      {
        "id": "D",
        "text": "Model identity and version on each turn are not recorded with the turn artifacts."
      },
      {
        "id": "E",
        "text": "Request-scoped correlation identifiers do not propagate across agent and tool calls."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "A useful trace must identify the model used and connect related agent and tool activity across the request.",
    "optionExplanations": {
      "A": "Not selected — Exported step-level spans are a useful observability capability, not a gap.",
      "B": "Not selected — Latency and token telemetry are useful measurements already being captured.",
      "C": "Not selected — Redacted payload and outcome logging supports diagnosis while limiting exposure.",
      "D": "Correct — Missing model/version attribution prevents isolating regressions after upgrades.",
      "E": "Correct — Without correlation IDs, separate spans cannot reliably be reconstructed into a single request trace."
    },
    "reference": "CCAR-P practice PDF, Q37 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-038",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are building an evaluation pipeline for a Claude-based deployment and must complete the specification steps before running the deployment against the dataset. Which two steps must be completed BEFORE running the deployment against the evaluation dataset? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Publish the aggregated metrics to a dashboard and gate releases on threshold checks."
      },
      {
        "id": "B",
        "text": "Curate and label the evaluation dataset to match the defined slices."
      },
      {
        "id": "C",
        "text": "Review failure cases with subject matter experts to refine the scoring rubric."
      },
      {
        "id": "D",
        "text": "Define the metrics and slices the framework will report across representative, edge, and adversarial cases."
      },
      {
        "id": "E",
        "text": "Score the deployment outputs against the reference labels and aggregate the metrics."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Define measurement and build the labeled dataset before running the system against it.",
    "optionExplanations": {
      "A": "Not selected — Publishing metrics and release gating require evaluation results.",
      "B": "Correct — A labeled, representative dataset is needed to compare actual outputs with expectations.",
      "C": "Not selected — Reviewing failures is an analysis step after initial runs.",
      "D": "Correct — Metrics and slices specify what the dataset and scoring must cover.",
      "E": "Not selected — Scoring and aggregation consume outputs generated during execution."
    },
    "reference": "CCAR-P practice PDF, Q38 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-039",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request. Which optimization most directly targets the dominant cost driver?",
    "options": [
      {
        "id": "A",
        "text": "Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them."
      },
      {
        "id": "B",
        "text": "Add additional repeated content to the system prompt to give the model more guidance."
      },
      {
        "id": "C",
        "text": "Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query."
      },
      {
        "id": "D",
        "text": "Switch every request to the heaviest available model to maximize output quality, accepting that higher per-request inference cost compounds rather than addresses the dominant cost driver."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Target repeated system-prefix tokens and excessive retrieved input rather than increasing context or model cost.",
    "optionExplanations": {
      "A": "Not selected — Greater retrieval depth adds input tokens to the dominant cost source.",
      "B": "Not selected — More prompt text increases the repeated input cost.",
      "C": "Correct — Caching the stable prefix and retaining only relevant spans directly reduce redundant processing.",
      "D": "Not selected — A heavier model increases inference expense without addressing the input-token problem."
    },
    "reference": "CCAR-P practice PDF, Q39 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-040",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "An operations engineer reports that a Claude-based pipeline began returning malformed JSON responses after a scheduled maintenance window, causing downstream processing failures. Which two investigative steps most directly isolate the root cause? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes."
      },
      {
        "id": "B",
        "text": "Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window."
      },
      {
        "id": "C",
        "text": "Switch to a different Claude model tier to rule out provider-side changes as a contributing factor."
      },
      {
        "id": "D",
        "text": "Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures."
      },
      {
        "id": "E",
        "text": "Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Compare configuration changes and replay known-good inputs to locate where malformed output first appears.",
    "optionExplanations": {
      "A": "Not selected — Clearing a cache is a possible remedy but does not identify the changed configuration.",
      "B": "Correct — Diffing prompts and schema settings reveals changes coinciding with maintenance.",
      "C": "Not selected — Changing models introduces another variable before isolating the existing failure.",
      "D": "Not selected — A larger output limit helps only if truncation is established; it is not the strongest initial diagnostic.",
      "E": "Correct — Raw replay distinguishes malformed model output from a downstream parser or integration failure."
    },
    "reference": "CCAR-P practice PDF, Q40 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-041",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment. Which two steps must be completed BEFORE running the experiment with random assignment? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Determine the minimum detectable effect size and the sample size needed for power."
      },
      {
        "id": "B",
        "text": "Decide whether to promote, reject, or iterate the candidate based on the analysis."
      },
      {
        "id": "C",
        "text": "Define the hypothesis and the primary success metric for the comparison."
      },
      {
        "id": "D",
        "text": "Analyze the results against the predefined success metric and significance threshold."
      },
      {
        "id": "E",
        "text": "Document the recommendation, the trade-offs accepted, and the alternatives considered."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Pre-register the experiment's hypothesis, metric and statistical design before observing results.",
    "optionExplanations": {
      "A": "Correct — Power and effect-size planning establish how many samples are needed.",
      "B": "Not selected — Promotion decisions follow analysis of the experimental evidence.",
      "C": "Correct — A predefined hypothesis and success metric prevent post-hoc selection of favorable outcomes.",
      "D": "Not selected — Result analysis occurs only after data has been collected.",
      "E": "Not selected — The recommendation and accepted trade-offs are documented after the comparison."
    },
    "reference": "CCAR-P practice PDF, Q41 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-042",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "An architect is reviewing a Claude-based candidate-screening tool prior to deployment. A stakeholder asserts that because the model was not trained on company data, no bias evaluation is necessary. Which two responses most accurately challenge this assertion? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation."
      },
      {
        "id": "B",
        "text": "Fairness testing is required only when the training dataset is known to contain protected-class labels."
      },
      {
        "id": "C",
        "text": "The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning."
      },
      {
        "id": "D",
        "text": "The system should be evaluated on outcome-disparity metrics across protected groups before deployment."
      },
      {
        "id": "E",
        "text": "Bias evaluation is unnecessary when the model provider has published a responsible-use policy."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Bias can arise from model pretraining and system use even without company-specific training data.",
    "optionExplanations": {
      "A": "Not selected — Disclosure supports transparency but cannot measure unequal outcomes.",
      "B": "Not selected — Bias can occur without explicit protected-class labels in training data.",
      "C": "Correct — Pretraining can encode stereotypes or patterns that affect screening decisions.",
      "D": "Correct — Disparity testing measures whether outcomes differ materially across relevant groups.",
      "E": "Not selected — A vendor policy does not establish fairness of this particular deployment."
    },
    "reference": "CCAR-P practice PDF, Q42 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-043",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are building an ethics review checklist for deployments supported by artificial intelligence (AI). Which two checks belong on the list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Confirm that vendor licensing terms permit the planned production use of the model."
      },
      {
        "id": "B",
        "text": "Verify that outputs do not rely on generalizations about people that the underlying data does not support."
      },
      {
        "id": "C",
        "text": "Confirm that high-impact decisions retain human accountability rather than being attributed to the model."
      },
      {
        "id": "D",
        "text": "Confirm that latency and throughput targets are met across the supported user populations."
      },
      {
        "id": "E",
        "text": "Restrict the ethics review to outputs that exceed a defined model-confidence threshold."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Ethics review focuses on supported judgments about people and accountability for consequential actions.",
    "optionExplanations": {
      "A": "Not selected — Licensing is a legal/procurement check, not the specific ethical safeguards being tested.",
      "B": "Correct — Checking unsupported generalizations helps prevent stereotyping and unfair decisions.",
      "C": "Correct — A responsible human or organization must remain accountable for high-impact outcomes.",
      "D": "Not selected — Performance SLOs matter, but do not directly test ethical treatment or accountability.",
      "E": "Not selected — Confidence alone cannot determine ethical risk; confident outputs can still be harmful."
    },
    "reference": "CCAR-P practice PDF, Q43 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-044",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are defining where human review must remain in a planned automated pipeline. Which placement reflects sound human-in-the-loop design?",
    "options": [
      {
        "id": "A",
        "text": "Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate."
      },
      {
        "id": "B",
        "text": "Place a human reviewer between the model's output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval."
      },
      {
        "id": "C",
        "text": "Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review."
      },
      {
        "id": "D",
        "text": "Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Human approval must occur before consequential irreversible actions and use clear review criteria.",
    "optionExplanations": {
      "A": "Not selected — A post-action audit cannot prevent an irreversible harmful outcome.",
      "B": "Correct — A pre-action gate lets a reviewer stop or correct a high-impact decision.",
      "C": "Not selected — Random samples help measure quality but do not guarantee review of critical actions.",
      "D": "Not selected — Removing review sacrifices control over consequential outcomes for throughput."
    },
    "reference": "CCAR-P practice PDF, Q44 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-045",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An engineer inadvertently commits an API key to the repository by placing it in.claude/settings.json. Which configuration design principle was violated?",
    "options": [
      {
        "id": "A",
        "text": "Project-scope configuration should always override user-scope configuration."
      },
      {
        "id": "B",
        "text": "Managed configuration must be applied before project-scope configuration is read."
      },
      {
        "id": "C",
        "text": "Credentials must be resolved at runtime from a secret store and never stored in version- controlled files."
      },
      {
        "id": "D",
        "text": "MCP server definitions must reside in environment variables to prevent scope conflicts."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A committed API key is a credential-management failure, not a configuration precedence problem.",
    "optionExplanations": {
      "A": "Not selected — Scope precedence does not make a repository safe for secrets.",
      "B": "Not selected — Ordering of managed and project settings is unrelated to credential exposure.",
      "C": "Correct — Resolving credentials at runtime avoids distributing plaintext secrets through version control.",
      "D": "Not selected — MCP definitions do not universally need environment variables; secret handling is the relevant issue."
    },
    "reference": "CCAR-P practice PDF, Q45 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-046",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "An engineering organization is adopting Claude Code across 200 developers. A team lead has proposed that AI-generated pull requests bypass the standard code review process for changes under 50 lines, on the grounds that small changes are low-risk and review capacity is constrained. Which two Diligence-competency objections should you raise? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "The 50-line threshold should be raised to 200 lines instead to capture more changes overall."
      },
      {
        "id": "B",
        "text": "Code-review capacity should be expanded to handle every code change submitted across the team."
      },
      {
        "id": "C",
        "text": "Line count is a poor proxy for the actual risk a code change introduces into the system."
      },
      {
        "id": "D",
        "text": "Removing review removes the verification mechanism that AI-generated output requires across the workflow."
      },
      {
        "id": "E",
        "text": "AI-generated pull requests should be rejected as a default policy across the engineering organization."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Review requirements should follow change risk and preserve independent verification of generated code.",
    "optionExplanations": {
      "A": "Not selected — Raising the line threshold increases exposure and still uses a poor risk proxy.",
      "B": "Not selected — Expanding review capacity is a possible operational response, not the underlying diligence objection.",
      "C": "Correct — A one-line authorization or deletion change can be high-impact; line count is not risk.",
      "D": "Correct — Bypassing review removes the independent check needed to catch AI-generated mistakes.",
      "E": "Not selected — Blanket rejection discards potentially valuable AI assistance instead of validating it."
    },
    "reference": "CCAR-P practice PDF, Q46 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-047",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A technical team is cataloging risks specific to Claude’s use in a document-grounded Q&A system. Which two items represent failure modes that are intrinsic to LLM-based systems rather than generic software defects? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "the model generating a plausible-sounding answer that is unsupported by any retrieved document"
      },
      {
        "id": "B",
        "text": "the model refusing a legitimate query because surface features triggered an overly broad safety pattern"
      },
      {
        "id": "C",
        "text": "an expired TLS certificate blocking outbound API calls to the Claude endpoint"
      },
      {
        "id": "D",
        "text": "a database connection timeout causing a retrieval call to return an empty result set"
      },
      {
        "id": "E",
        "text": "a misconfigured load balancer routing requests to a deprecated API version"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Distinguish failures intrinsic to probabilistic language-model behavior from infrastructure defects.",
    "optionExplanations": {
      "A": "Correct — Plausible unsupported output is a grounding/hallucination failure.",
      "B": "Correct — An overly broad safety trigger can produce false refusals of legitimate requests.",
      "C": "Not selected — TLS expiry is a transport/infrastructure issue independent of LLM reasoning.",
      "D": "Not selected — Database timeouts are conventional retrieval-infrastructure failures.",
      "E": "Not selected — Incorrect load-balancer routing is a conventional deployment/configuration defect."
    },
    "reference": "CCAR-P practice PDF, Q47 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-048",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are evaluating a Claude-based deployment for adherence to a specific regulation. Which two steps must be completed BEFORE mapping deployment data flows to specific regulatory clauses? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Compare the in-place controls against the regulatory requirements to identify any compliance gaps."
      },
      {
        "id": "B",
        "text": "Identify the applicability of the regulation based on data types, jurisdiction, and audience."
      },
      {
        "id": "C",
        "text": "Schedule the remediation work with the engineering team based on the prioritized gap findings."
      },
      {
        "id": "D",
        "text": "Document the identified gaps along with recommended remediations and residual risk for sign- off."
      },
      {
        "id": "E",
        "text": "Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Establish which regulation applies and what compliance capabilities exist before mapping requirements to data flows.",
    "optionExplanations": {
      "A": "Not selected — Comparing controls with clauses requires the earlier applicability and mapping work.",
      "B": "Correct — Data, jurisdiction and users establish the scope of the applicable regulation.",
      "C": "Not selected — Scheduling remediation comes after gaps are identified and prioritized.",
      "D": "Not selected — Documenting gaps and residual risk follows the control assessment.",
      "E": "Correct — Inventorying available compliance controls establishes what can support the mapping."
    },
    "reference": "CCAR-P practice PDF, Q48 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-049",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are reviewing an integration specification for security gaps. Which two findings constitute valid security gaps in the specification? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Tool calls execute server-side under a least-privilege service principal scoped to the requested action."
      },
      {
        "id": "B",
        "text": "Service credentials are placed in the prompt context, where they can leak into logs and traces."
      },
      {
        "id": "C",
        "text": "Role-based access control (RBAC) is enforced only at the response-rendering layer after the model accesses restricted data."
      },
      {
        "id": "D",
        "text": "Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session."
      },
      {
        "id": "E",
        "text": "Tool inputs and outputs are encrypted in transit using transport-layer security between services."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Keep credentials outside prompts and authorize data before retrieval or model exposure.",
    "optionExplanations": {
      "A": "Not selected — Scoped server-side tool execution is a security control already in place.",
      "B": "Correct — Secrets in model context can leak through outputs, logs or traces.",
      "C": "Correct — Response-layer authorization occurs too late: restricted data has already entered context.",
      "D": "Not selected — Per-user scoped tokens support least-privilege access.",
      "E": "Not selected — Transport encryption protects data in transit; it is not itself a gap."
    },
    "reference": "CCAR-P practice PDF, Q49 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-050",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are running a risk assessment on a planned Claude-based deployment and must complete the inventory steps before assessing threats against assets. Which two steps must be completed BEFORE assessing threats against assets to estimate likelihood and impact? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners."
      },
      {
        "id": "B",
        "text": "Recommend mitigations and residual-risk acceptance for the risks that remain after analysis."
      },
      {
        "id": "C",
        "text": "Identify the assets that the deployment touches, along with the sensitivity of each asset."
      },
      {
        "id": "D",
        "text": "Recommend mitigations and residual-risk acceptance for risks that remain."
      },
      {
        "id": "E",
        "text": "Enumerate the threat actors and attack vectors that are relevant to the deployment."
      }
    ],
    "correctAnswers": [
      "C",
      "E"
    ],
    "explanation": "Inventory sensitive assets and relevant threats before estimating likelihood and impact.",
    "optionExplanations": {
      "A": "Not selected — The final assessment document depends on completed threat analysis.",
      "B": "Not selected — Mitigation recommendations require knowing the identified risks and their severity.",
      "C": "Correct — Asset identity and sensitivity establish what could be harmed.",
      "D": "Not selected — As with B, remediation and residual-risk decisions come after assessment.",
      "E": "Correct — Threat actors and vectors identify how those assets could be compromised."
    },
    "reference": "CCAR-P practice PDF, Q50 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-051",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by their role. Where should role-based access control be enforced in the pipeline?",
    "options": [
      {
        "id": "A",
        "text": "Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents."
      },
      {
        "id": "B",
        "text": "At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model."
      },
      {
        "id": "C",
        "text": "Nowhere in the pipeline; rely on the model’s general refusal behavior to reject unauthorized document access without any enforced access control."
      },
      {
        "id": "D",
        "text": "After the response is generated, by post-filtering content that should not have been retrieved."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Authorization belongs at the retrieval boundary so restricted documents never enter the model's context.",
    "optionExplanations": {
      "A": "Not selected — A natural-language instruction is not an enforceable authorization boundary.",
      "B": "Correct — Pre-retrieval role filtering prevents unauthorized documents from reaching prompt assembly.",
      "C": "Not selected — A refusal is not a substitute for checking permissions.",
      "D": "Not selected — Post-filtering cannot reliably remove all direct or inferred disclosure from data already seen by the model."
    },
    "reference": "CCAR-P practice PDF, Q51 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-052",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for refunds under 50 USD. The team’s reasoning is that small refunds are low-risk and human review would erase the efficiency gain. Which Delegation-competency principle should guide your response?",
    "options": [
      {
        "id": "A",
        "text": "Delegation should always include human review on every decision the workflow produces."
      },
      {
        "id": "B",
        "text": "Delegation scope should reflect the type of risk involved, not the transaction size alone."
      },
      {
        "id": "C",
        "text": "Delegation scope should be set primarily by maximizing efficiency gains across the workflow."
      },
      {
        "id": "D",
        "text": "Delegation should be avoided entirely wherever financial transactions occur in the workflow."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Delegation should be based on the nature and consequences of risk, not a dollar threshold alone.",
    "optionExplanations": {
      "A": "Not selected — Universal review is disproportionate when low-risk decisions can be safely automated.",
      "B": "Correct — Small refunds can still create fraud, policy, cumulative or fairness risks; use risk-based authority limits.",
      "C": "Not selected — Efficiency is a benefit, not the sole criterion for granting decision authority.",
      "D": "Not selected — Financial workflows can be delegated selectively with suitable controls."
    },
    "reference": "CCAR-P practice PDF, Q52 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-053",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. The product team has asked whether the incident requires architectural action or whether it is an isolated case. Which two Diligence-competency actions should you take? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Sample recent summaries to estimate the fabrication frequency across the population."
      },
      {
        "id": "B",
        "text": "Disable the assistant immediately for all current users without any prior diagnostic analysis."
      },
      {
        "id": "C",
        "text": "Review whether citation-grounding controls exist anywhere in the current generation pipeline."
      },
      {
        "id": "D",
        "text": "Communicate to users that the assistant does not fabricate output as a matter of design."
      },
      {
        "id": "E",
        "text": "Treat the incident as an anecdotal isolated case and take no further investigative action."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Assess the frequency of fabricated citations and inspect the controls before deciding on the scope of architectural action.",
    "optionExplanations": {
      "A": "Correct — Sampling production summaries estimates whether the problem is systemic.",
      "B": "Not selected — Immediate shutdown may be appropriate if risk warrants it, but the question asks for diagnosis first.",
      "C": "Correct — Checking grounding controls identifies a potential design weakness in citation generation.",
      "D": "Not selected — Claiming fabrication is impossible is contradicted by the reported incident.",
      "E": "Not selected — One report is evidence requiring investigation, not grounds to assume isolation."
    },
    "reference": "CCAR-P practice PDF, Q53 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-054",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are assessing data-exfiltration risk in a Claude-based assistant that has tools for both internal- document retrieval and outbound HTTP calls. Which scenario most directly indicates a data-exfiltration risk?",
    "options": [
      {
        "id": "A",
        "text": "Adversarial content in retrieved documents instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL."
      },
      {
        "id": "B",
        "text": "The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfill a user-initiated data lookup request."
      },
      {
        "id": "C",
        "text": "The user types a routine question into the assistant and receives a routine answer."
      },
      {
        "id": "D",
        "text": "The internal-document retrieval tool returns a document that the user has authorization to view."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Exfiltration occurs when access to private data is combined with an unauthorized outbound destination.",
    "optionExplanations": {
      "A": "Correct — Injected retrieved text can persuade the model to transmit protected information through its outbound tool.",
      "B": "Not selected — A user-authorized lookup to an approved domain is normal tool use, not inherently exfiltration.",
      "C": "Not selected — A routine answer alone provides no evidence of unauthorized transfer.",
      "D": "Not selected — Retrieving a document within the user's permissions is normal authorized access."
    },
    "reference": "CCAR-P practice PDF, Q54 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-056",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. Which mitigation is most directly targeted at this failure mode?",
    "options": [
      {
        "id": "A",
        "text": "replacing the shared API key with per-user OAuth tokens to restrict data access"
      },
      {
        "id": "B",
        "text": "scoring each new model version against a stable adversarial evaluation set"
      },
      {
        "id": "C",
        "text": "constraining responses to source-supported content combined with required citations and a verification step"
      },
      {
        "id": "D",
        "text": "treating retrieved data as untrusted and applying input classifiers at ingestion time"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Grounding failures require evidence constraints and a check that claims are actually supported.",
    "optionExplanations": {
      "A": "Not selected — Per-user tokens address authorization, not whether claims follow evidence.",
      "B": "Not selected — Versioned evaluations detect regressions but do not directly prevent unsupported claims in production.",
      "C": "Correct — Citations plus verification make unsupported claims identifiable and correctable before release.",
      "D": "Not selected — Input classifiers address malicious content; they do not ensure ordinary generated claims are grounded."
    },
    "reference": "CCAR-P practice PDF, Q56 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-057",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are preparing a HIPAA-eligible deployment for a healthcare customer. Which configuration supports HIPAA compliance using Anthropic-offered tools?",
    "options": [
      {
        "id": "A",
        "text": "Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box."
      },
      {
        "id": "B",
        "text": "Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking."
      },
      {
        "id": "C",
        "text": "Disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA."
      },
      {
        "id": "D",
        "text": "An ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Among these choices, the source key favors contractual safeguards, appropriate retention and auditability; actual HIPAA eligibility depends on the specific service and agreement.",
    "optionExplanations": {
      "A": "Not selected — A consumer account without the required contractual safeguards is not sufficient.",
      "B": "Correct — A signed BAA, appropriate retention and controlled audit logging address the stated safeguards; confirm service eligibility and configuration.",
      "C": "Not selected — Avoiding logs alone does not satisfy HIPAA or replace a required BAA.",
      "D": "Not selected — Personal accounts without approved safeguards cannot establish an appropriate PHI-processing arrangement."
    },
    "reference": "CCAR-P practice PDF, Q57 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-058",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A procurement agent may DRAFT purchase requests for HUMAN REVIEW. Select every tool that should remain under least-privilege permissions.",
    "options": [
      {
        "id": "A",
        "text": "Read-only catalog lookup for vendor and SKU information."
      },
      {
        "id": "B",
        "text": "Direct inbox-send tool that emails requests to vendors."
      },
      {
        "id": "C",
        "text": "Draft-write tool to create purchase-request drafts in the review queue."
      },
      {
        "id": "D",
        "text": "Production-database administration tool unrelated to procurement."
      },
      {
        "id": "E",
        "text": "Read-only retrieval of relevant procurement policies."
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "Drafting authority requires access to supporting information and the draft queue, not authority to commit purchases.",
    "optionExplanations": {
      "A": "Correct — Catalog information supports drafting an accurate request.",
      "B": "Not selected — Sending messages to vendors exceeds the explicit draft-only authority.",
      "C": "Correct — The queue is the authorized destination for drafts awaiting review.",
      "D": "Not selected — Database administration is unrelated and unnecessarily privileged.",
      "E": "Correct — Policy retrieval helps ensure drafts follow procurement requirements."
    },
    "reference": "CCAR-P practice PDF, Q58 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "adapted-hotspot"
    ]
  },
  {
    "id": "CCARP-061",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are supporting an EU-based deployment with GDPR obligations. Which combination of measures best supports the deployment’s GDPR posture?",
    "options": [
      {
        "id": "A",
        "text": "enterprise-tier deployment with a signed Data Processing Addendum, defined data- retention configuration, redaction of personal data not needed for the task, and documented data-subject- rights handling"
      },
      {
        "id": "B",
        "text": "disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure"
      },
      {
        "id": "C",
        "text": "using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure"
      },
      {
        "id": "D",
        "text": "pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "GDPR-oriented design combines contractual, retention, minimization and data-subject-rights controls; the specific legal requirements depend on the deployment.",
    "optionExplanations": {
      "A": "Correct — The combination addresses processor obligations and limits unnecessary personal-data processing.",
      "B": "Not selected — Removing safeguards increases exposure and prevents managing retention and rights.",
      "C": "Not selected — A personal account alone does not establish the required processing arrangements or rights procedures.",
      "D": "Not selected — Sending unnecessary personal data conflicts with purpose limitation and minimization."
    },
    "reference": "CCAR-P practice PDF, Q61 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-062",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are configuring tool permissions for a Claude-based assistant. The assistant’s defined responsibilities require read access to a knowledge base and write access to a draft queue, and nothing else. Which scoping design best applies least privilege?",
    "options": [
      {
        "id": "A",
        "text": "Allow access to all tools with read permissions globally and restrict write permissions to the draft- queue tool, without scoping to only the specific tools required for defined tasks."
      },
      {
        "id": "B",
        "text": "Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer."
      },
      {
        "id": "C",
        "text": "Allow access to every tool in the catalog and rely on the model to decline tools it should not use."
      },
      {
        "id": "D",
        "text": "Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Grant exactly the tools and operations required for the defined role, and enforce permissions outside the model.",
    "optionExplanations": {
      "A": "Not selected — Global read access exposes resources unrelated to the role.",
      "B": "Correct — A scoped allow-list permits necessary reads and draft writes without broader capability.",
      "C": "Not selected — Model discretion is not a security boundary.",
      "D": "Not selected — Denying all tools prevents legitimate work; least privilege is not zero privilege."
    },
    "reference": "CCAR-P practice PDF, Q62 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-063",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations. Which two guardrail implementations most directly enforce this constraint? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Increase response temperature to introduce variability that reduces the likelihood of specific recommendations."
      },
      {
        "id": "B",
        "text": "Add an output classifier that detects and blocks responses containing regulated investment- recommendation language."
      },
      {
        "id": "C",
        "text": "Limit session length to reduce the volume of queries processed per user per day."
      },
      {
        "id": "D",
        "text": "Log all user queries to a SIEM for post-hoc compliance review."
      },
      {
        "id": "E",
        "text": "Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advice requests."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Layer an explicit refusal policy with runtime checks that prevent disallowed advice from reaching users.",
    "optionExplanations": {
      "A": "Not selected — Higher randomness does not reliably prevent regulated recommendations.",
      "B": "Correct — Output classification can intercept disallowed recommendation language before delivery.",
      "C": "Not selected — Session limits reduce usage but do not enforce content restrictions.",
      "D": "Not selected — Audit logging helps investigate violations after the fact, not stop them.",
      "E": "Correct — Clear out-of-scope instructions guide refusals before generation; runtime controls add enforcement."
    },
    "reference": "CCAR-P practice PDF, Q63 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-064",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "When communicating an architectural decision to a security and compliance reviewer, which content set is most aligned with that audience's primary concerns?",
    "options": [
      {
        "id": "A",
        "text": "Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager."
      },
      {
        "id": "B",
        "text": "Implementation timeline, component interfaces, and deployment sequence for the engineering team."
      },
      {
        "id": "C",
        "text": "Threat model, control mappings, residual-risk acceptance criteria, and audit traceability."
      },
      {
        "id": "D",
        "text": "Decision rationale, business outcomes, and high-level risk summary for executive review."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Security reviewers need evidence of threats, mitigations, remaining exposure and auditability.",
    "optionExplanations": {
      "A": "Not selected — Roadmap and scope information primarily serve product planning.",
      "B": "Not selected — Interfaces and sequence primarily support implementation teams.",
      "C": "Correct — Threat models and control mappings allow reviewers to assess residual risk and verify safeguards.",
      "D": "Not selected — Business outcomes and high-level risks are better suited to an executive sponsor."
    },
    "reference": "CCAR-P practice PDF, Q64 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-065",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "During an architectural review, the security team identifies a risk that adversarial content injected into retrieved documents could manipulate the model’s behavior. Which mitigation most directly addresses this threat?",
    "options": [
      {
        "id": "A",
        "text": "Treat all retrieved content as untrusted input and apply input classifiers with output validation."
      },
      {
        "id": "B",
        "text": "Require citations for each claim and constrain responses to source-supported content."
      },
      {
        "id": "C",
        "text": "Restrict outbound tool calls to an approved destination allow-list."
      },
      {
        "id": "D",
        "text": "Score outputs against a stable adversarial evaluation set on each model-version change."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Retrieved documents are untrusted data; protect the pipeline against embedded instructions rather than treating them as authority.",
    "optionExplanations": {
      "A": "Correct — Screening untrusted inputs and validating outputs addresses manipulation at both ends of generation.",
      "B": "Not selected — Citation grounding improves factuality but does not by itself neutralize malicious instructions in a source.",
      "C": "Not selected — An outbound allow-list limits exfiltration but not other injected behaviors.",
      "D": "Not selected — Adversarial evaluation detects vulnerabilities, but does not directly enforce protections during execution."
    },
    "reference": "CCAR-P practice PDF, Q65 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-066",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are compiling guardrail tactics for a customer-facing assistant. Which two tactics belong on the guardrail list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Embed approved override phrases that let trusted users relax guardrails on demand."
      },
      {
        "id": "B",
        "text": "Lower sampling temperature globally to reduce the chance of off-policy completions."
      },
      {
        "id": "C",
        "text": "Validate the model output against a structured schema before downstream actions are taken."
      },
      {
        "id": "D",
        "text": "Layer prompt-level guardrails with runtime content checks rather than relying on either alone."
      },
      {
        "id": "E",
        "text": "Rely on a single hardened system prompt that enumerates every disallowed behavior."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Effective guardrails use enforceable checks at multiple layers, particularly before downstream actions.",
    "optionExplanations": {
      "A": "Not selected — Override phrases create a bypass based on text rather than verified authorization.",
      "B": "Not selected — Lower temperature makes output less variable, not reliably policy-compliant.",
      "C": "Correct — Schema validation prevents invalid structured outputs from triggering downstream actions.",
      "D": "Correct — Runtime checks supplement prompt guidance when the model fails to follow policy.",
      "E": "Not selected — A single prompt is not a dependable enforcement boundary."
    },
    "reference": "CCAR-P practice PDF, Q66 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-067",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "The compliance team at a firm has approved a Claude Skill that generates client-facing investment summaries. The Skill includes the firm’s required disclaimers and prohibited-language list. A product manager has asked whether additional guardrails are needed at the application layer or whether the Skill alone is sufficient. Which two guardrail responsibilities should remain at the application layer rather than the Skill? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Log every generated summary to the firm’s compliance audit trail for retention."
      },
      {
        "id": "B",
        "text": "Verify the requesting user is authorized to generate investment summaries at all."
      },
      {
        "id": "C",
        "text": "Format output sections according to the firm’s standardized house style guidelines."
      },
      {
        "id": "D",
        "text": "Apply the disclaimer template that the compliance team has standardized firm-wide."
      },
      {
        "id": "E",
        "text": "Apply the prohibited-language list that the compliance team maintains and updates."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Reusable Skills encode task guidance, while the application owns identity, authorization and independent audit controls.",
    "optionExplanations": {
      "A": "Correct — Application logging records activity even if the Skill fails or is modified.",
      "B": "Correct — Authorization must be enforced before the user can invoke the capability.",
      "C": "Not selected — House style is reusable task-specific formatting suited to the Skill.",
      "D": "Not selected — A standardized disclaimer template belongs to the task guidance; enforcement can still be verified independently.",
      "E": "Not selected — The provided prohibited-language list is part of the Skill's task rules; critical restrictions may also need runtime enforcement."
    },
    "reference": "CCAR-P practice PDF, Q67 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-068",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A security audit uncovers two issues: (1) all end users share a single API key, and (2) tool calls are executed without logging the initiating user. Which two mitigations directly address these specific findings? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Validate structured outputs against a schema before downstream actions are executed."
      },
      {
        "id": "B",
        "text": "Enforce RBAC at the retrieval layer before content enters the model context."
      },
      {
        "id": "C",
        "text": "Move credentials out of the prompt context and resolve them from a server-side secret store."
      },
      {
        "id": "D",
        "text": "Add actor attribution to tool-call logs so each call records the initiating user identity."
      },
      {
        "id": "E",
        "text": "Replace the shared API key with per-user OAuth tokens carrying scope-restricted permissions."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Replace shared identity with scoped user identity and record who initiated each tool call.",
    "optionExplanations": {
      "A": "Not selected — Schema validation does not solve shared credentials or missing attribution.",
      "B": "Not selected — Retrieval RBAC is valuable but does not directly identify tool-call actors or replace the shared credential.",
      "C": "Not selected — Secret storage protects credentials at rest but leaves a shared identity if the key is unchanged.",
      "D": "Correct — Recording the actor creates an accountable audit trail.",
      "E": "Correct — Per-user scoped credentials provide differentiated access instead of one shared identity."
    },
    "reference": "CCAR-P practice PDF, Q68 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-069",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude architect is designing a HIPAA-compliant pipeline that processes patient records. Which two design decisions directly support HIPAA compliance requirements? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Setting max_tokens to a low value to minimize the volume of text generated per request."
      },
      {
        "id": "B",
        "text": "Selecting the highest-capability Claude model to maximize diagnostic accuracy."
      },
      {
        "id": "C",
        "text": "Enforcing role-based access controls so that PHI is retrievable only by authorized personnel."
      },
      {
        "id": "D",
        "text": "Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place."
      },
      {
        "id": "E",
        "text": "Using streaming responses to reduce perceived latency for clinical users."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Protect PHI with authorization and appropriate contractual/data-use restrictions, not merely model settings.",
    "optionExplanations": {
      "A": "Not selected — Output length does not ensure sensitive data is protected.",
      "B": "Not selected — Model capability does not establish compliant PHI handling.",
      "C": "Correct — Role enforcement prevents unauthorized access to patient data.",
      "D": "Correct — Keeping PHI out of unapproved provider feedback paths addresses unauthorized disclosure; a BAA alone is not blanket permission for training.",
      "E": "Not selected — Streaming improves perceived responsiveness, not privacy or compliance."
    },
    "reference": "CCAR-P practice PDF, Q69 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-070",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are designing a human-in-the-loop validation workflow for a new Claude-based deployment and must complete the design steps before piloting the workflow. Which two steps must be completed BEFORE piloting the workflow with a representative subset of traffic? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Define the sampling strategy and the escalation criteria at each oversight point in the pipeline."
      },
      {
        "id": "B",
        "text": "Iterate the workflow design based on observed pilot findings before broader rollout to production."
      },
      {
        "id": "C",
        "text": "Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures."
      },
      {
        "id": "D",
        "text": "Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step."
      },
      {
        "id": "E",
        "text": "Identify the decision points in the pipeline that require human oversight by impact and reversibility."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "First design where review is necessary and how cases are routed; then implement and pilot those rules.",
    "optionExplanations": {
      "A": "Correct — Sampling and escalation rules define which cases are reviewed and why.",
      "B": "Not selected — Iteration based on pilot results necessarily follows the pilot.",
      "C": "Not selected — Reviewer training is also important before real traffic, but it follows definition of the oversight design.",
      "D": "Not selected — Documentation is useful preparation, but the keyed choices prioritize defining the actual oversight points and criteria.",
      "E": "Correct — Impact and reversibility determine where human approval or validation is required."
    },
    "reference": "CCAR-P practice PDF, Q70 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-071",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are responding to an adversarial input pattern in which users include text claiming admin authority and instructing the model to bypass safety restrictions. Which combination of controls most effectively mitigates this attack pattern?",
    "options": [
      {
        "id": "A",
        "text": "Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt- level instructions, runtime classifiers, scoped permissions, or audit logging."
      },
      {
        "id": "B",
        "text": "Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts."
      },
      {
        "id": "C",
        "text": "Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs."
      },
      {
        "id": "D",
        "text": "Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Privilege must come from authenticated authorization, never from instructions inside user content.",
    "optionExplanations": {
      "A": "Not selected — Model behavior alone cannot reliably recognize every bypass attempt.",
      "B": "Correct — Prompt guidance, detection, scoped permissions and auditing provide layered protection.",
      "C": "Not selected — Removing restrictions makes the system unprotected rather than mitigating attacks.",
      "D": "Not selected — Self-declared authority is untrusted and cannot grant privileges."
    },
    "reference": "CCAR-P practice PDF, Q71 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-072",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are listing characteristics of robust guardrail design for an enterprise deployment. Which two characteristics belong on the list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Centralized log retention for guardrail violations with quarterly review by the security team."
      },
      {
        "id": "B",
        "text": "Per-role tool allow-lists enforced at the orchestration layer before any tool call executes."
      },
      {
        "id": "C",
        "text": "User feedback channels that route reported guardrail failures into the product backlog for triage."
      },
      {
        "id": "D",
        "text": "Periodic refresh of the system prompt wording to keep refusal language current and clear."
      },
      {
        "id": "E",
        "text": "Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Robust guardrails combine enforced permissions with ongoing adversarial regression evidence.",
    "optionExplanations": {
      "A": "Not selected — Centralized logs support investigation, but retrospective review alone is not enforcement or effectiveness testing.",
      "B": "Correct — Role-scoped tool checks prevent unauthorized execution regardless of model behavior.",
      "C": "Not selected — Feedback is useful for improving guardrails but does not itself prevent or measure attacks systematically.",
      "D": "Not selected — Refusal wording helps clarity but is insufficient as a guardrail architecture.",
      "E": "Correct — Adversarial regression tracking reveals whether guardrail effectiveness changes across releases."
    },
    "reference": "CCAR-P practice PDF, Q72 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-073",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair. Which two Discernment-competency findings should you report? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Approval rate parity does not by itself assess error rate parity across protected groups."
      },
      {
        "id": "B",
        "text": "Match with human underwriters does not establish freedom from underwriter-introduced bias."
      },
      {
        "id": "C",
        "text": "The 94 percent match rate is sufficient evidence of fairness for the assistant’s decisions."
      },
      {
        "id": "D",
        "text": "The fairness team’s review process likely missed at least some of the protected groups studied."
      },
      {
        "id": "E",
        "text": "A larger sample is needed before any meaningful fairness claim can be made about the model."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Fairness requires comparing errors and checking whether the reference decisions themselves contain bias.",
    "optionExplanations": {
      "A": "Correct — Equal approval rates can hide unequal false-positive or false-negative rates.",
      "B": "Correct — Agreement with humans can reproduce their existing biases.",
      "C": "Not selected — A high agreement rate measures consistency with underwriters, not fairness.",
      "D": "Not selected — No evidence establishes that the team omitted groups; the identified limitations are more concrete.",
      "E": "Not selected — More data may improve statistical precision, but does not correct inadequate fairness metrics or biased labels."
    },
    "reference": "CCAR-P practice PDF, Q73 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-074",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "An architect at Trenova Systems, Inc. is reviewing two draft communication packages for the same architectural decision. Package 1 contains a threat model, residual-risk register, and control-mapping table. Package 2 contains a list of capabilities delivered and feature-level roadmap dependencies. Which two audiences are correctly matched to these packages? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Package 1 # engineering implementation team"
      },
      {
        "id": "B",
        "text": "Package 2 # executive sponsor"
      },
      {
        "id": "C",
        "text": "Package 1 # security and compliance reviewer"
      },
      {
        "id": "D",
        "text": "Package 2 # product manager owning the roadmap"
      },
      {
        "id": "E",
        "text": "Package 2 # security and compliance reviewer"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "Match each communication package to the decision responsibilities of its audience.",
    "optionExplanations": {
      "A": "Not selected — Implementation engineers need interfaces and technical execution details rather than primarily control evidence.",
      "B": "Not selected — An executive typically needs outcomes, strategic trade-offs and major risks, not feature-level dependencies.",
      "C": "Correct — Threats, residual risk and control mappings directly support security/compliance review.",
      "D": "Correct — Capabilities and roadmap dependencies support the product manager's planning decisions.",
      "E": "Not selected — A roadmap alone does not supply the evidence needed to assess security controls."
    },
    "reference": "CCAR-P practice PDF, Q74 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-075",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are reviewing a peer’s draft ADR. The ADR states the decision and the technical detail but does not state the alternatives considered or the trade-offs accepted. Which response is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Delete the ADR entirely and rely on the engineering team's collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding."
      },
      {
        "id": "B",
        "text": "Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR."
      },
      {
        "id": "C",
        "text": "Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it."
      },
      {
        "id": "D",
        "text": "Replace the ADR with a different decision unrelated to the one drafted."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An ADR should preserve why a decision was selected, including alternatives and accepted consequences.",
    "optionExplanations": {
      "A": "Not selected — Deleting the record loses durable decision context.",
      "B": "Correct — Adding alternatives and trade-offs lets future readers evaluate and revisit the rationale.",
      "C": "Not selected — A decision without alternatives or trade-offs is incomplete for future review.",
      "D": "Not selected — Replacing the decision does not address the missing rationale for the existing decision."
    },
    "reference": "CCAR-P practice PDF, Q75 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-076",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A senior architect is preparing briefing materials on a new retrieval architecture. The executive sponsor has requested a summary of the architectural decision. Which framing is most appropriate for that audience?",
    "options": [
      {
        "id": "A",
        "text": "Technical alternatives evaluated, implementation implications, and component-level consequences."
      },
      {
        "id": "B",
        "text": "business outcomes achieved, trade-offs accepted, and high-level risks acknowledge"
      },
      {
        "id": "C",
        "text": "Capabilities delivered, scope implications, and feature-level dependencies on the roadmap."
      },
      {
        "id": "D",
        "text": "Threat model, control mappings, residual-risk acceptance, and audit traceability."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Executive sponsors need business value, strategic trade-offs and material risks rather than implementation detail.",
    "optionExplanations": {
      "A": "Not selected — Component-level consequences primarily serve engineering reviewers.",
      "B": "Correct — Business outcomes and high-level risks support sponsor-level decisions.",
      "C": "Not selected — Feature scope and dependencies primarily serve product roadmap owners.",
      "D": "Not selected — Detailed controls and risk acceptance evidence primarily serve security/compliance reviewers."
    },
    "reference": "CCAR-P practice PDF, Q76 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-077",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are running a discovery engagement for a new Claude-based capability and must complete the requirements-gathering steps before validating with stakeholders. Which two steps must be completed BEFORE validating the captured requirements with stakeholders? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Produce architecture decision records that capture the rationale for major design choices."
      },
      {
        "id": "B",
        "text": "Capture the business goals, success criteria, and the in-scope user population for the engagement."
      },
      {
        "id": "C",
        "text": "Document the consolidated requirements with traceability to the source stakeholder for each item."
      },
      {
        "id": "D",
        "text": "Schedule the rollout milestones and dependencies with engineering and product partners."
      },
      {
        "id": "E",
        "text": "Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Discovery first establishes business goals and constraints that stakeholders can validate.",
    "optionExplanations": {
      "A": "Not selected — ADRs capture design decisions after requirements are understood.",
      "B": "Correct — Goals, success criteria and users define the business problem and scope.",
      "C": "Not selected — Traceability is valuable before sign-off, but the keyed choices prioritize gathering the substantive requirements and constraints.",
      "D": "Not selected — Rollout milestones depend on agreed requirements and a delivery plan.",
      "E": "Correct — Latency, cost, data and regulatory constraints establish non-functional requirements before validation."
    },
    "reference": "CCAR-P practice PDF, Q77 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-078",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are designing a feedback session for a deployment in flight. Which structure best supports productive stakeholder feedback?",
    "options": [
      {
        "id": "A",
        "text": "Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants’ memory to carry decisions and follow-up owners forward."
      },
      {
        "id": "B",
        "text": "Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates."
      },
      {
        "id": "C",
        "text": "Distribute artifacts at session start rather than in advance, so stakeholders review materials in real time without preparation before the discussion begins."
      },
      {
        "id": "D",
        "text": "End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session’s outcomes forward."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A productive feedback session gives participants preparation time and records decisions with accountable follow-up.",
    "optionExplanations": {
      "A": "Not selected — Without an agenda or artifacts, feedback can be unfocused and commitments lost.",
      "B": "Correct — Advance artifacts support informed discussion; recorded actions and dates create accountability.",
      "C": "Not selected — Sharing artifacts only at the start reduces time for thoughtful review.",
      "D": "Not selected — Unrecorded decisions and owners make follow-through difficult to verify."
    },
    "reference": "CCAR-P practice PDF, Q78 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-079",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are defining an SLA for a Claude-based assistant. Which SLA definition is most operationally meaningful?",
    "options": [
      {
        "id": "A",
        "text": "A target tied to a stakeholder sentiment measure such as “the team feels satisfied,” which cannot be measured objectively or used to trigger a documented breach response."
      },
      {
        "id": "B",
        "text": "A measurable target with a defined metric, threshold, evaluation window, and consequence for breach—for example, “p95 per-request latency under 800 ms over a 28-day window.”"
      },
      {
        "id": "C",
        "text": "a qualitative commitment such as “the system will be fast and reliable”, which names no metric, no threshold, and no evaluation window"
      },
      {
        "id": "D",
        "text": "A target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A useful SLA defines an observable metric, threshold, measurement period and response to breach.",
    "optionExplanations": {
      "A": "Not selected — Subjective satisfaction alone lacks a reliable measurement and breach trigger.",
      "B": "Correct — The defined metric and window make compliance testable; the agreement should also specify breach consequences.",
      "C": "Not selected — A qualitative promise cannot be evaluated consistently.",
      "D": "Not selected — Without a window or breach consequence, enforcement remains ambiguous."
    },
    "reference": "CCAR-P practice PDF, Q79 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-080",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are producing an architecture guide for a new deployment and must complete the planning steps before drafting each section. Which two steps must be completed BEFORE drafting each section of the guide? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Identify the audience and the questions the guide must answer for that audience."
      },
      {
        "id": "B",
        "text": "Translate the guide into the supported regional languages for the candidate population."
      },
      {
        "id": "C",
        "text": "Outline the sections of the guide covering overview, components, contracts, flows, runbooks, and limitations."
      },
      {
        "id": "D",
        "text": "Establish the document under version control with a defined review cadence and approver list."
      },
      {
        "id": "E",
        "text": "Validate the guide with the implementation team and incorporate any corrections that arise."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Define who will use the guide and its structure before writing individual sections.",
    "optionExplanations": {
      "A": "Correct — Audience needs determine which questions and level of detail the guide should address.",
      "B": "Not selected — Translation requires draft or finalized source material.",
      "C": "Correct — An outline establishes coverage and prevents fragmented documentation.",
      "D": "Not selected — Version control is useful throughout authoring, but the question asks for the two content-planning prerequisites.",
      "E": "Not selected — Implementation-team validation follows the creation of reviewable content."
    },
    "reference": "CCAR-P practice PDF, Q80 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-081",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are selecting the documentation set that should accompany a Claude-based deployment at handoff. Which set is most complete?",
    "options": [
      {
        "id": "A",
        "text": "architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations"
      },
      {
        "id": "B",
        "text": "Code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members."
      },
      {
        "id": "C",
        "text": "A single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers."
      },
      {
        "id": "D",
        "text": "A verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Handoff documentation must let maintainers understand decisions, operate the system and recognize limitations.",
    "optionExplanations": {
      "A": "Correct — The overview, decisions, diagrams and operational playbooks cover design context and day-to-day support.",
      "B": "Not selected — Code comments are local details and cannot replace integrated architecture and operational instructions.",
      "C": "Not selected — A diagram alone omits rationale, troubleshooting and known constraints.",
      "D": "Not selected — A verbal walkthrough is useful but leaves no reliable durable reference for later operators."
    },
    "reference": "CCAR-P practice PDF, Q81 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-082",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A Claude Architect is reviewing a post-deployment performance report for an AI-assisted legal document summarization system. The report includes the following observations: (1) Average summarization time has decreased from 47 minutes to 6 minutes per document. (2) Associates report spending less time on summaries but no measurable change in overall billable output. (3) Infrastructure costs have increased 22% due to higher API call volume from a redundant retry logic implementation. (4) The system occasionally generates summaries requiring attorney correction, adding an average of 8 minutes of review time per document. Which analysis correctly attributes each observation to the appropriate business value pillar?",
    "options": [
      {
        "id": "A",
        "text": "Observation 1 indicates a transformation outcome; Observation 2 indicates an efficiency gain; Observation 3 indicates a performance SLA degradation; Observation 4 indicates a solution cost issue."
      },
      {
        "id": "B",
        "text": "Observation 1 indicates an efficiency gain; Observation 2 indicates that productivity has not yet been realized; Observation 3 indicates a solution cost issue; Observation 4 indicates an efficiency loss that partially offsets the gain from Observation 1."
      },
      {
        "id": "C",
        "text": "Observations 1 and 4 together indicate a net performance SLA improvement; Observation 2 indicates a transformation gap; Observation 3 indicates a productivity drain from over- engineering."
      },
      {
        "id": "D",
        "text": "Observations 1 and 2 both indicate efficiency gains; Observation 3 indicates a solution cost issue; Observation 4 indicates a performance SLA issue."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Distinguish reduced task time from increased business output, operating expense and rework.",
    "optionExplanations": {
      "A": "Not selected — Faster summarization measures efficiency, not necessarily transformation; retry expense is solution cost.",
      "B": "Correct — Faster work is efficiency, unchanged billable output means productivity gains are not yet demonstrated, retries increase cost, and review rework offsets time savings.",
      "C": "Not selected — The observations do not primarily measure SLA compliance; extra retries directly increase cost.",
      "D": "Not selected — Unchanged output despite saved time is not proof of productivity improvement; correction time is rework."
    },
    "reference": "CCAR-P practice PDF, Q82 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-083",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are responding to a stakeholder request that adds significant scope to a deployment already in flight. Which response best aligns expectations while respecting the stakeholder’s underlying need?",
    "options": [
      {
        "id": "A",
        "text": "Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications."
      },
      {
        "id": "B",
        "text": "Acknowledge the request, name the scope and timeline implications transparently, and propose options (defer, descope something else, or extend the timeline) for the stakeholder to choose."
      },
      {
        "id": "C",
        "text": "Decline the request outright without acknowledging the stakeholder’s underlying need or offering alternative options such as deferral, descope, or timeline extension for their consideration."
      },
      {
        "id": "D",
        "text": "Accept the additional scope into the current release without naming the timeline or descope implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Make the cost of additional scope explicit and offer choices that address the underlying need.",
    "optionExplanations": {
      "A": "Not selected — Concealment prevents the team from planning capacity and creates surprise delays.",
      "B": "Correct — Transparent trade-offs let stakeholders choose between scope, timing and deferral.",
      "C": "Not selected — An outright refusal ignores the need and available alternatives.",
      "D": "Not selected — Accepting scope without adjusting constraints hides the real delivery impact."
    },
    "reference": "CCAR-P practice PDF, Q83 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-084",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are building a feedback-and-alignment routine for a multi-stakeholder deployment. Which two practices belong in the routine? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Record each session and distribute the recording to stakeholders who could not attend live."
      },
      {
        "id": "B",
        "text": "Escalate any disagreement among stakeholders to the executive sponsor for binding resolution."
      },
      {
        "id": "C",
        "text": "Rotate facilitation among the participating stakeholder groups to share ownership of the routine."
      },
      {
        "id": "D",
        "text": "Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time."
      },
      {
        "id": "E",
        "text": "Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment."
      }
    ],
    "correctAnswers": [
      "D",
      "E"
    ],
    "explanation": "Expectation alignment is continuous and requires explicitly resolving differences.",
    "optionExplanations": {
      "A": "Not selected — Recordings help absent participants but do not establish recurring alignment or resolution.",
      "B": "Not selected — Escalation is useful when necessary, not the default for every disagreement.",
      "C": "Not selected — Rotating facilitators may encourage participation but does not itself reconcile expectations.",
      "D": "Correct — A regular cadence catches changed assumptions before they become delivery surprises.",
      "E": "Correct — Explicitly resolving differences exposes conflicting priorities and enables agreement."
    },
    "reference": "CCAR-P practice PDF, Q84 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-085",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are preparing an operational runbook for a Claude-based service. Which content is essential to include in the runbook?",
    "options": [
      {
        "id": "A",
        "text": "Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on."
      },
      {
        "id": "B",
        "text": "Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs."
      },
      {
        "id": "C",
        "text": "Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use."
      },
      {
        "id": "D",
        "text": "Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "An on-call engineer needs the complete path from detecting a problem through triage, escalation and recovery.",
    "optionExplanations": {
      "A": "Not selected — Dashboards show signals but do not tell the operator how to respond.",
      "B": "Correct — Alerts, diagnostic steps, escalation, rollback and evidence links make incident response actionable.",
      "C": "Not selected — Triage without escalation or recovery instructions leaves the operator without a resolution path.",
      "D": "Not selected — Recovery instructions alone do not explain how to identify or investigate the incident."
    },
    "reference": "CCAR-P practice PDF, Q85 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-086",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are choosing the level of detail for an implementation guide. The audience is a delivery team that will build the deployment. Which guidance composition best serves them?",
    "options": [
      {
        "id": "A",
        "text": "Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks."
      },
      {
        "id": "B",
        "text": "Component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks."
      },
      {
        "id": "C",
        "text": "An architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration-parameter tables, or operational runbooks for the delivery team to follow."
      },
      {
        "id": "D",
        "text": "An architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An implementation guide must translate architecture into specific interfaces, configuration and executable operational guidance.",
    "optionExplanations": {
      "A": "Correct — Responsibilities, contracts, flows, defaults and runbooks provide enough detail to build and operate the system.",
      "B": "Not selected — Contracts alone omit interaction sequences, configuration and operations.",
      "C": "Not selected — Overview and sequences help understanding but omit precise implementation interfaces and operational guidance.",
      "D": "Not selected — High-level descriptions and limitations do not specify how to implement the design."
    },
    "reference": "CCAR-P practice PDF, Q86 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-087",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are running a discovery session with a business sponsor who asks for “an AI system to fix our customer escalations”. Which approach best yields actionable requirements?",
    "options": [
      {
        "id": "A",
        "text": "Accept the sponsor's original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints."
      },
      {
        "id": "B",
        "text": "Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply."
      },
      {
        "id": "C",
        "text": "Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions."
      },
      {
        "id": "D",
        "text": "Assume the requirement matches the architect's previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Turn a vague solution request into a measurable problem by identifying actors, triggers, outcomes and constraints.",
    "optionExplanations": {
      "A": "Not selected — The sponsor's broad request does not specify a problem that engineers can design or evaluate.",
      "B": "Correct — Targeted discovery establishes the workflow, success criteria and non-functional requirements.",
      "C": "Not selected — Discovery is the mechanism for resolving uncertainty; it should not wait for a complete specification.",
      "D": "Not selected — A previous engagement may differ in users, risk and constraints; assumptions must be validated."
    },
    "reference": "CCAR-P practice PDF, Q87 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-088",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are distinguishing functional from non-functional requirements during discovery. Which item is a non-functional requirement?",
    "options": [
      {
        "id": "A",
        "text": "The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record."
      },
      {
        "id": "B",
        "text": "The system must produce a draft response that a human reviewer can edit before sending."
      },
      {
        "id": "C",
        "text": "The system must classify inbound tickets into a defined set of categories."
      },
      {
        "id": "D",
        "text": "The system must respond at p95 latency under 800 milliseconds at the expected request volume."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Functional requirements describe what the system does; non-functional requirements specify how well or under what constraints it operates.",
    "optionExplanations": {
      "A": "Not selected — Extracting fields and populating records defines a system capability.",
      "B": "Not selected — Producing editable drafts describes a required workflow behavior.",
      "C": "Not selected — Classifying tickets describes an operation the system performs.",
      "D": "Correct — A p95 response-time target specifies measurable performance at a stated load."
    },
    "reference": "CCAR-P practice PDF, Q88 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-089",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A senior architect is managing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have escalating concerns about response latency. Which two actions most directly address stakeholder expectation alignment in this situation? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data."
      },
      {
        "id": "B",
        "text": "Pause all development and reallocate engineering resources entirely to latency optimization."
      },
      {
        "id": "C",
        "text": "Communicate that latency concerns are a known LLM limitation and outside the architecture team’s control."
      },
      {
        "id": "D",
        "text": "Replace the current Claude model with a third-party model that may offer lower latency without evaluation."
      },
      {
        "id": "E",
        "text": "Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Use measured latency to align expectations and agree on feasible commitments before making architectural changes.",
    "optionExplanations": {
      "A": "Correct — Comparing p50 and p95 with the agreed targets makes the discussion evidence-based.",
      "B": "Not selected — Stopping all other work is premature without analyzing the gap or stakeholder priorities.",
      "C": "Not selected — Attributing everything to inherent LLM limitations avoids evaluating the architecture's actual constraints.",
      "D": "Not selected — Switching models without evaluation may introduce quality or cost regressions.",
      "E": "Correct — Collaboratively revising an infeasible SLA establishes a realistic, explicit commitment."
    },
    "reference": "CCAR-P practice PDF, Q89 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-090",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision. Which presentation strategy best serves both audiences?",
    "options": [
      {
        "id": "A",
        "text": "Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs."
      },
      {
        "id": "B",
        "text": "Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience."
      },
      {
        "id": "C",
        "text": "Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it."
      },
      {
        "id": "D",
        "text": "Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Lead with the decision and its business implications, then provide the technical depth implementers need.",
    "optionExplanations": {
      "A": "Not selected — Low-level details alone do not answer the sponsor's strategic questions.",
      "B": "Correct — A layered presentation addresses business trade-offs first and implementation rationale afterward.",
      "C": "Not selected — Announcing the result without rationale prevents informed review and implementation.",
      "D": "Not selected — An undifferentiated narrative makes both audiences search for the information relevant to them."
    },
    "reference": "CCAR-P practice PDF, Q90 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-091",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You must present an architectural recommendation to deploy a Claude-based contract review assistant to a steering committee that includes the CFO, the general counsel, and the CIO. Each stakeholder cares about different aspects of the decision. How should you structure the recommendation document?",
    "options": [
      {
        "id": "A",
        "text": "Lead with the technical architecture diagram and the full component list before any other section."
      },
      {
        "id": "B",
        "text": "Lead with detailed cost projections across the full multi-year horizon before the rationale section."
      },
      {
        "id": "C",
        "text": "Present the same dense narrative throughout with no stakeholder differentiation in any section."
      },
      {
        "id": "D",
        "text": "Lead with the architectural decision, then address each stakeholder’s primary concerns directly."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Structure the recommendation around the decision and each executive's distinct concerns.",
    "optionExplanations": {
      "A": "Not selected — A diagram may support the CIO but is not the most useful opening for the whole committee.",
      "B": "Not selected — Cost detail matters to the CFO but does not address legal or technical decision criteria by itself.",
      "C": "Not selected — Uniform depth makes the recommendation less accessible to different stakeholders.",
      "D": "Correct — Lead with the decision, then address financial value, legal risk and technical feasibility separately."
    },
    "reference": "CCAR-P practice PDF, Q91 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-092",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are transitioning a Claude-based deployment from design into implementation. Which handoff package most directly supports a clean transition?",
    "options": [
      {
        "id": "A",
        "text": "The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register."
      },
      {
        "id": "B",
        "text": "A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRs, component contracts, evaluation framework, runbooks, playbook, or known limitations."
      },
      {
        "id": "C",
        "text": "Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations."
      },
      {
        "id": "D",
        "text": "Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation framework, runbooks, on-call playbook, or known-limitations register to support the delivery team."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A clean handoff requires enough design, evaluation and operational evidence for the next team to act independently.",
    "optionExplanations": {
      "A": "Not selected — Slides may summarize design but omit actionable contracts, tests and operating instructions.",
      "B": "Not selected — A verbal walkthrough is not a durable source of implementation or operational guidance.",
      "C": "Correct — Contracts and evaluation define build and quality expectations; ADRs and runbooks preserve rationale and operational knowledge.",
      "D": "Not selected — Code alone cannot explain all design decisions, acceptance criteria or operational procedures."
    },
    "reference": "CCAR-P practice PDF, Q92 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-093",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A business sponsor has requested an AI solution to “improve customer experience”. The sponsor cannot articulate which customer journey is failing, which metric reflects the failure, or which decisions the AI should support. The sponsor is asking you to begin design work next week. Which delegation-competency action should you take first?",
    "options": [
      {
        "id": "A",
        "text": "Recommend that the sponsor revise the request and resubmit it later for evaluation."
      },
      {
        "id": "B",
        "text": "Begin prototyping a generic assistant against the broad request before the next deadline."
      },
      {
        "id": "C",
        "text": "Propose a fixed scope that you commit to by default based on your own assumptions."
      },
      {
        "id": "D",
        "text": "Facilitate a structured discovery to define the failing decision and the target metric."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Do not delegate an undefined decision to AI: establish the failing workflow and measurable outcome first.",
    "optionExplanations": {
      "A": "Not selected — Sending the request back avoids helping the sponsor turn it into usable requirements.",
      "B": "Not selected — A generic prototype can optimize a problem the sponsor does not actually have.",
      "C": "Not selected — Committing to assumptions risks solving the wrong customer journey.",
      "D": "Correct — Structured discovery defines the decision, scope and target metric before architecture work."
    },
    "reference": "CCAR-P practice PDF, Q93 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-094",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are compiling continuity practices that span the deployment lifecycle. Which two practices belong on the list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Maintain a stakeholder register and notify the listed parties at every phase transition event."
      },
      {
        "id": "B",
        "text": "Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time."
      },
      {
        "id": "C",
        "text": "Archive every phase deliverable in long-term storage to preserve a record of what was produced."
      },
      {
        "id": "D",
        "text": "Capture lessons learned at the end of each phase and surface them as inputs to the next phase."
      },
      {
        "id": "E",
        "text": "Lock decisions made in early phases to prevent revisiting them as later phases begin."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Preserve the evidence used to evaluate changes and transfer learning from one phase to the next.",
    "optionExplanations": {
      "A": "Not selected — Stakeholder notifications are useful but do not ensure technical or evaluation continuity.",
      "B": "Correct — Reusing the reference set preserves comparable evidence across iterations.",
      "C": "Not selected — Archiving artifacts preserves records but does not necessarily apply their learning to future work.",
      "D": "Correct — Lessons carried into the next phase prevent repeated mistakes and inform subsequent choices.",
      "E": "Not selected — Locking early decisions prevents adaptation when evidence or constraints change."
    },
    "reference": "CCAR-P practice PDF, Q94 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-095",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are identifying signals that a deployment should re-enter design rather than continue iterating in place. Which signal most directly indicates the need for a new design cycle?",
    "options": [
      {
        "id": "A",
        "text": "A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts."
      },
      {
        "id": "B",
        "text": "A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle."
      },
      {
        "id": "C",
        "text": "A minor copy edit is requested in a customer-facing string within the existing UI, which can be handled as a localized content change without altering component responsibilities or contracts."
      },
      {
        "id": "D",
        "text": "The system’s current architecture cannot meet the new requirements without changes to component responsibilities or core contracts."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Re-enter design when the architecture itself cannot satisfy requirements without changing core responsibilities or contracts.",
    "optionExplanations": {
      "A": "Not selected — A clarification is a documentation change within the existing design.",
      "B": "Not selected — Threshold adjustment is an operational tuning change.",
      "C": "Not selected — A minor copy change does not alter architectural responsibilities.",
      "D": "Correct — Changing core contracts or component boundaries requires renewed architectural analysis."
    },
    "reference": "CCAR-P practice PDF, Q95 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-096",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are listing characteristics of strong architectural-decision communication. Which two characteristics belong on the list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Ownership and review cadence for revisiting the decision when conditions or assumptions change."
      },
      {
        "id": "B",
        "text": "Distribution to a standing review forum with mandatory attendance from senior engineering leaders."
      },
      {
        "id": "C",
        "text": "Omission of rejected alternatives to keep the decision document focused and concise for readers."
      },
      {
        "id": "D",
        "text": "Alternatives considered along with the criteria that were used to evaluate each alternative."
      },
      {
        "id": "E",
        "text": "Use of a consistent template across the team to standardize the visual presentation of decisions."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "A strong decision record explains alternatives and criteria and establishes how the decision will be revisited.",
    "optionExplanations": {
      "A": "Correct — Ownership and review cadence prevent assumptions from becoming stale without accountability.",
      "B": "Not selected — A review forum may help governance, but attendance does not guarantee the decision is well explained.",
      "C": "Not selected — Omitting rejected alternatives removes the context needed to understand trade-offs.",
      "D": "Correct — Alternatives and evaluation criteria make the rationale transparent and reviewable.",
      "E": "Not selected — Consistent formatting helps readability but does not establish substantive decision quality."
    },
    "reference": "CCAR-P practice PDF, Q96 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-097",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude architect is leading the discovery phase for a new AI-powered customer service solution. Which two activities are characteristic of structured discovery and requirement gathering for a Claude- based deployment? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins."
      },
      {
        "id": "B",
        "text": "Selecting the Claude model tier based on the architect’s prior project experience before stakeholder input is collected."
      },
      {
        "id": "C",
        "text": "Generating an initial prototype and iterating based on user reaction rather than written requirements."
      },
      {
        "id": "D",
        "text": "Documenting explicit success criteria and failure thresholds that will gate production deployment."
      },
      {
        "id": "E",
        "text": "Deferring constraint documentation until the integration design phase to avoid scope creep."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Discovery identifies constraints and measurable success conditions before choosing a design or model.",
    "optionExplanations": {
      "A": "Correct — Workshops surface the stakeholder needs and constraints that govern scope.",
      "B": "Not selected — Prior model experience is not a substitute for the current workload's requirements.",
      "C": "Not selected — Prototypes can help later validate assumptions, but do not replace structured requirements gathering.",
      "D": "Correct — Success metrics and failure thresholds make production acceptance measurable.",
      "E": "Not selected — Deferring constraints can produce a design that violates essential requirements."
    },
    "reference": "CCAR-P practice PDF, Q97 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-098",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "An architect is reviewing a set of architecture documentation packages before handing off a Claude- based pipeline to an implementation team. Which two characteristics indicate that a documentation package is sufficient to support implementation without ongoing architect involvement? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component."
      },
      {
        "id": "B",
        "text": "The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected."
      },
      {
        "id": "C",
        "text": "The document provides a high-level narrative description of the business problem without component-level detail."
      },
      {
        "id": "D",
        "text": "The document includes the architect’s contact information for questions arising during implementation."
      },
      {
        "id": "E",
        "text": "The document lists all Claude models that were evaluated but does not specify which was selected or why."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Implementation independence requires precise component contracts and the rationale behind major choices.",
    "optionExplanations": {
      "A": "Correct — Contracts, schemas and expected shapes allow engineers to implement interoperable components.",
      "B": "Correct — Decision rationale explains why alternatives were rejected and guides future changes.",
      "C": "Not selected — A problem narrative does not specify the components needed to build the system.",
      "D": "Not selected — A contact person is useful, but reliance on the architect is exactly what a sufficient package should reduce.",
      "E": "Not selected — A model list without a selection or rationale leaves the implementation decision unresolved."
    },
    "reference": "CCAR-P practice PDF, Q98 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-099",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A healthcare organization is evaluating two Claude-powered AI architectures for a clinical documentation assistant. Architecture X produces higher output quality scores but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses under 3 seconds, and the annual volume is projected at 2 million documentation sessions. Which evaluation approach correctly applies business value pillar analysis to this decision?",
    "options": [
      {
        "id": "A",
        "text": "Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments."
      },
      {
        "id": "B",
        "text": "Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment."
      },
      {
        "id": "C",
        "text": "Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity."
      },
      {
        "id": "D",
        "text": "Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Treat the mandatory latency SLA as a constraint, then compare cost and workflow quality; the stated mean latency is not a substitute for a defined percentile if the SLA uses one.",
    "optionExplanations": {
      "A": "Not selected — Cost savings alone do not establish that quality and SLA requirements are met.",
      "B": "Not selected — The reported response time exceeds the target; relying on unvalidated later optimization risks noncompliance.",
      "C": "Correct — Under the question's reported latency comparison, Y fits the target and costs $180,000 less annually; assess whether lower quality causes consequential rework.",
      "D": "Not selected — Hybrid routing may be valuable but requires validation of latency, cost and routing quality before recommendation."
    },
    "reference": "CCAR-P practice PDF, Q99 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-100",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are documenting an architectural decision to support future audit and onboarding. Which artifact is the strongest fit?",
    "options": [
      {
        "id": "A",
        "text": "A slide deck in a presentation folder with no accompanying written rationale."
      },
      {
        "id": "B",
        "text": "A code comment in a single file that contains an opinion of one engineer."
      },
      {
        "id": "C",
        "text": "An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors."
      },
      {
        "id": "D",
        "text": "A short verbal note shared during a hallway conversation with no written record."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A durable ADR captures the decision and the reasoning that future readers will need to evaluate it.",
    "optionExplanations": {
      "A": "Not selected — Slides without rationale may omit why the choice was made.",
      "B": "Not selected — An isolated opinion lacks context, alternatives and consequences.",
      "C": "Correct — The record includes context, choice, alternatives, consequences and authorship for traceability.",
      "D": "Not selected — An undocumented verbal discussion cannot support reliable audit or onboarding."
    },
    "reference": "CCAR-P practice PDF, Q100 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-101",
    "domain": "evaluation",
    "domainName": "Evaluation & Operations",
    "topic": "Evaluation & Operations",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude- powered procurement automation deployment. The feedback includes four statements: (1) “Our procurement team is processing 3x more purchase orders per analyst per day.” (2) “We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management.” (3) “The API integration costs are running 40% over the projected per-transaction budget.” (4) “Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA.” Which of the following correctly identifies the primary business value pillar each stakeholder statement represents?",
    "options": [
      {
        "id": "A",
        "text": "Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA"
      },
      {
        "id": "B",
        "text": "Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4: Performance SLA"
      },
      {
        "id": "C",
        "text": "Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4: Efficiency"
      },
      {
        "id": "D",
        "text": "Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4: Solution Cost"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Use the source's intended pillar mapping, while noting that output per analyst can also be described as productivity in common business usage.",
    "optionExplanations": {
      "A": "Correct — The source treats greater throughput per analyst as efficiency and a changed staffing/workflow model as transformation; overspend and latency map directly to cost and SLA.",
      "B": "Not selected — Greater output per analyst is plausibly productivity, but redeploying an entire role is a structural workflow change, not merely efficiency.",
      "C": "Not selected — Higher throughput alone does not establish transformation; the 11-second latency is explicitly an SLA miss.",
      "D": "Not selected — Staff redeployment is the transformation signal, integration overspend is cost and latency is SLA performance."
    },
    "reference": "CCAR-P practice PDF, Q101 (third-party answer key)",
    "tags": [
      "evaluation",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-102",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "The engineering lead at Trenova Systems, Inc. is evaluating two proposals for improving developer workflows using Claude-assisted tooling Proposal A adds Claude Code to the IDE for inline code generation and review. Proposal B routes all code-generation requests through a shared Slack bot with no IDE integration. Which two observations most accurately evaluate these proposals against workflow-improvement objectives? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Proposal B is superior because centralizing requests in Slack creates an auditable log of all code- generation activity."
      },
      {
        "id": "B",
        "text": "Proposal B introduces workflow friction by requiring developers to leave the IDE, which undermines the productivity objective."
      },
      {
        "id": "C",
        "text": "Proposal A reduces context-switching by surfacing AI assistance at the point of development without requiring a separate tool."
      },
      {
        "id": "D",
        "text": "Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue."
      },
      {
        "id": "E",
        "text": "Both proposals are equivalent because the underlying model capabilities are identical regardless of integration point."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Integration at the point of work reduces friction; identical model capability does not imply identical workflow value.",
    "optionExplanations": {
      "A": "Not selected — Centralized audit logs are useful, but do not establish superior developer productivity.",
      "B": "Correct — Leaving the IDE adds context switching and disrupts the development workflow.",
      "C": "Correct — In-IDE assistance reduces the steps needed to generate or review code.",
      "D": "Not selected — Asynchronous notifications can help coordination but do not eliminate the extra handoff.",
      "E": "Not selected — Interface and workflow integration affect productivity independently of underlying model capability."
    },
    "reference": "CCAR-P practice PDF, Q102 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-103",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are integrating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow. Which two steps must be completed BEFORE piloting the integrated workflow with a small group? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Document the integrated workflow with handoff criteria, permission boundaries, and on-call runbooks."
      },
      {
        "id": "B",
        "text": "Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain."
      },
      {
        "id": "C",
        "text": "Negotiate the workflow change with affected teams and obtain formal sign-off from each manager."
      },
      {
        "id": "D",
        "text": "Iterate the integrated workflow based on pilot findings before broader rollout to the team."
      },
      {
        "id": "E",
        "text": "Configure the project-scope Model Context Protocol (MCP) servers, permissions, subagents, and persistent project context."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "explanation": "Before piloting, establish which tasks AI should support and configure the capabilities and authority needed for that workflow.",
    "optionExplanations": {
      "A": "Not selected — Documentation is useful, but the keyed choices are the direct design and configuration prerequisites.",
      "B": "Correct — Identifying value-adding steps and human authority defines the intended delegation boundary.",
      "C": "Not selected — Stakeholder approval may be needed organizationally, but does not itself define or configure the workflow.",
      "D": "Not selected — Changes based on pilot findings necessarily follow the pilot.",
      "E": "Correct — Project-scoped tools, permissions and context implement the selected workflow safely."
    },
    "reference": "CCAR-P practice PDF, Q103 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-104",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Engineering leadership wants to roll out Claude Skills to 280 developers across 14 teams. Skills will encode internal coding standards, code review checklists, and incident postmortem templates. Leadership has asked how to govern Skill authorship so that Skills remain trustworthy without bottlenecking on a single central team. Which governance model should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Per-developer authorship across the 280 engineers with no team-level coordination required."
      },
      {
        "id": "B",
        "text": "Centralized authorship by a single platform team responsible for every Skill produced."
      },
      {
        "id": "C",
        "text": "Fully decentralized authorship across the 14 teams with no review before publication."
      },
      {
        "id": "D",
        "text": "federated authorship across the 14 teams with a central review and publish gate"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Federated authorship distributes subject-matter work while a shared publication gate protects quality and consistency.",
    "optionExplanations": {
      "A": "Not selected — Uncoordinated individual authorship invites duplicated or conflicting standards.",
      "B": "Not selected — A single team becomes an authoring bottleneck and may lack specialized knowledge.",
      "C": "Not selected — Publishing without review sacrifices trust and policy consistency.",
      "D": "Correct — Teams author domain-specific Skills; a central gate reviews security, quality and consistency before release."
    },
    "reference": "CCAR-P practice PDF, Q104 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-105",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A technical team is debating whether to implement a new capability for generating regulatory filings from internal data as a Claude Skill or as an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to call live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code. Which factor most strongly favors implementing the capability as a Skill?",
    "options": [
      {
        "id": "A",
        "text": "The capability needs to query a live database for the most recent regulatory filings."
      },
      {
        "id": "B",
        "text": "The capability must be callable from a developer’s command-line interface as well."
      },
      {
        "id": "C",
        "text": "The capability requires authentication against the corporate identity provider directly."
      },
      {
        "id": "D",
        "text": "The capability is procedural knowledge with no live external-system calls required."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A Skill is appropriate for reusable procedural knowledge; MCP is primarily an integration boundary for external capabilities.",
    "optionExplanations": {
      "A": "Not selected — The scenario explicitly does not require live database calls; such calls would instead favor an integration tool.",
      "B": "Not selected — CLI availability does not distinguish the two approaches because both may be used in compatible clients.",
      "C": "Not selected — Direct identity-provider authentication is not required by the described authoring procedure.",
      "D": "Correct — Instructions and examples can package the authoring procedure without a live external service."
    },
    "reference": "CCAR-P practice PDF, Q105 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-106",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are defining when to introduce a project subagent versus relying on Claude Code’s general capabilities. Which scenario most directly justifies a dedicated subagent?",
    "options": [
      {
        "id": "A",
        "text": "The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions."
      },
      {
        "id": "B",
        "text": "The team has a one-time ad-hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or a dedicated model selection."
      },
      {
        "id": "C",
        "text": "The team has no recurring specialized tasks and uses Claude Code only for isolated general- purpose work that does not justify a dedicated system prompt or tool scope."
      },
      {
        "id": "D",
        "text": "The team wants every Claude Code interaction to use the same generic system prompt with no task-specific specialization, narrow tool permissions, or dedicated model selection."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Use a dedicated subagent when a recurring specialized role benefits from focused context, configuration and limited authority.",
    "optionExplanations": {
      "A": "Correct — Repeated database review warrants a reusable specialist with its own instructions and permissions.",
      "B": "Not selected — A one-time general task usually does not justify the configuration overhead.",
      "C": "Not selected — Without recurring specialization, the general agent can already handle the work.",
      "D": "Not selected — A generic shared prompt provides no role-specific benefit from a dedicated subagent."
    },
    "reference": "CCAR-P practice PDF, Q106 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-107",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are compiling team-setup practices for a Claude Code rollout across an engineering organization. Which two practices belong on the list? (Choose two.) Each correct answer presents a complete solution.",
    "options": [
      {
        "id": "A",
        "text": "Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control."
      },
      {
        "id": "B",
        "text": "Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers."
      },
      {
        "id": "C",
        "text": "Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work."
      },
      {
        "id": "D",
        "text": "Use user scope for team-shared MCP servers so every engineer on the team has consistent access."
      },
      {
        "id": "E",
        "text": "Use project scope for personal editor preferences so the preferences apply consistently within the project."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Place shared project configuration in project scope and organization-wide non-overridable controls in managed scope.",
    "optionExplanations": {
      "A": "Correct — Version-controlled project settings make team-specific tools and permissions reproducible.",
      "B": "Correct — Managed settings enforce central security requirements across users.",
      "C": "Not selected — Local settings are developer-specific and unsuitable as the only enforcement of mandatory security policy.",
      "D": "Not selected — User scope is personal to each installation, not a reliable distribution mechanism for team-wide tools.",
      "E": "Not selected — Personal preferences belong in user or local scope rather than shared project configuration."
    },
    "reference": "CCAR-P practice PDF, Q107 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-108",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are integrating Claude Code into the teams pull-request workflow. The team wants AI-assisted review without removing human approval. Which integration design best fits this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer retains the approval decision under the existing branch-protection rules."
      },
      {
        "id": "B",
        "text": "Claude Code merges every pull request automatically upon completing its analysis, bypassing the human approval step and the existing branch protection rules entirely."
      },
      {
        "id": "C",
        "text": "Claude Code disables all existing branch protection rules on the repository to streamline the merge process, removing human approval as a required gate for all pull requests."
      },
      {
        "id": "D",
        "text": "Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author, removing the author’s ability to respond or revise."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "AI review should provide evidence to human reviewers without changing who can approve or merge a pull request.",
    "optionExplanations": {
      "A": "Correct — Structured comments assist review while branch protection preserves the human approval gate.",
      "B": "Not selected — Automatic merging bypasses the expressly required approval.",
      "C": "Not selected — Disabling branch protection removes the existing enforceable approval boundary.",
      "D": "Not selected — Deleting PRs prevents review, revision and accountability rather than assisting reviewers."
    },
    "reference": "CCAR-P practice PDF, Q108 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-109",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are identifying inefficiency in a Claude Code workflow where each engineer manually re-explains the project’s conventions and architecture in every session. Which adjustment most directly removes this inefficiency?",
    "options": [
      {
        "id": "A",
        "text": "Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all AI-assisted development productivity for this codebase."
      },
      {
        "id": "B",
        "text": "Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically."
      },
      {
        "id": "C",
        "text": "Tell each engineer to retype the project conventions and architecture context more quickly at the start of each session, reducing time lost without eliminating the repeated manual effort."
      },
      {
        "id": "D",
        "text": "Remove all documented project conventions and architectural standards so engineers have nothing to re-explain at session start, accepting the loss of consistency and shared coding standards."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Persist shared repository context instead of repeatedly asking developers to supply it manually.",
    "optionExplanations": {
      "A": "Not selected — Banning the tool avoids setup cost only by eliminating its intended benefit.",
      "B": "Correct — A version-controlled CLAUDE.md gives sessions reusable project-specific instructions and conventions.",
      "C": "Not selected — Faster retyping still incurs the same repeated work and can introduce inconsistencies.",
      "D": "Not selected — Removing conventions sacrifices consistency rather than solving context reuse."
    },
    "reference": "CCAR-P practice PDF, Q109 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-110",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. The procedure changes when regulators issue updates, currently four to six times per year. You are designing how the procedure will be packaged for use by Claude across all three workflows. Which two design decisions should you include? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Reference the same Claude Skill from all three of the workflow integrations directly."
      },
      {
        "id": "B",
        "text": "Embed the procedure text into each workflow’s system prompt at integration time."
      },
      {
        "id": "C",
        "text": "Store the procedure in a shared retrieval corpus accessed by all three workflows."
      },
      {
        "id": "D",
        "text": "Have each workflow team rewrite the procedure for that team’s specific context."
      },
      {
        "id": "E",
        "text": "Package the procedure as a Claude Skill owned by the compliance team directly."
      }
    ],
    "correctAnswers": [
      "A",
      "E"
    ],
    "explanation": "Centralize a changing reusable procedure under its accountable owner and invoke the same artifact everywhere.",
    "optionExplanations": {
      "A": "Correct — A shared Skill keeps all three integrations aligned to the same maintained procedure.",
      "B": "Not selected — Duplicating the procedure in prompts creates three maintenance points and potential drift.",
      "C": "Not selected — A shared corpus centralizes information but is less direct for packaging an executable procedure with consistent task instructions.",
      "D": "Not selected — Independent rewrites risk different interpretations of regulated requirements.",
      "E": "Correct — Compliance ownership ensures regulatory updates are made to one authoritative Skill."
    },
    "reference": "CCAR-P practice PDF, Q110 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-111",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are supporting an engineer whose Claude Code session reports a permission denial when the engineer expected the action to be allowed. Which resolution step is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional."
      },
      {
        "id": "B",
        "text": "Disable the permission system entirely across all scopes to remove the denial, eliminating all tool- pattern and deny-rule controls rather than identifying and amending the specific rule."
      },
      {
        "id": "C",
        "text": "Inspect the active permission rules across all scopes (managed, command-line, local, project, user) to identify which rule is denying the action and confirm whether it should be amended or whether the action should remain denied."
      },
      {
        "id": "D",
        "text": "Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool-pattern constraints rather than amending only the rule in question."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Diagnose the effective permission rule and its scope before deciding whether access should change.",
    "optionExplanations": {
      "A": "Not selected — Retries cannot resolve a deterministic policy denial.",
      "B": "Not selected — Disabling all permissions destroys the controls instead of isolating the offending rule.",
      "C": "Correct — Inspecting all applicable scopes identifies the effective restriction and whether it is intentional.",
      "D": "Not selected — Unrestricted Bash exceeds the specific requested authority and increases exposure."
    },
    "reference": "CCAR-P practice PDF, Q111 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-112",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are resolving a Claude Code operational issue reported by the team and must complete the diagnostic steps before applying a targeted fix. Which two steps must be completed BEFORE applying the targeted fix? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Open a permanent change request in the change-management system to formalize the upcoming fix."
      },
      {
        "id": "B",
        "text": "Document the root cause and the fix in the team runbook for future occurrences."
      },
      {
        "id": "C",
        "text": "Form a hypothesis about the most likely root cause given the symptom, configuration, and recent changes."
      },
      {
        "id": "D",
        "text": "Reproduce the issue with a minimal reproduction case to confirm the symptom and isolate variables."
      },
      {
        "id": "E",
        "text": "Notify the affected users that a fix has been deployed and the operational issue is resolved."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "explanation": "A targeted fix should follow a reproducible symptom and a testable root-cause hypothesis.",
    "optionExplanations": {
      "A": "Not selected — Change management may be necessary for deployment but does not diagnose the technical problem.",
      "B": "Not selected — Documenting the root cause and fix follows confirmation and remediation.",
      "C": "Correct — A hypothesis connects the symptom to configuration or recent changes and guides testing.",
      "D": "Correct — A minimal reproduction isolates variables and checks that the hypothesized issue is real.",
      "E": "Not selected — A resolution notification should follow verified remediation, not precede it."
    },
    "reference": "CCAR-P practice PDF, Q112 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-113",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude architect is configuring a shared Claude Code environment for a twelve-person development team. Which two configuration decisions most directly establish a consistent, secure team environment? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "applying managed configuration to enforce non-overridable security and compliance policies across all team members"
      },
      {
        "id": "B",
        "text": "committing shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository"
      },
      {
        "id": "C",
        "text": "instructing each engineer to configure their preferred Claude model in personal user-scope settings"
      },
      {
        "id": "D",
        "text": "storing the team’s shared API key in the project-scope settings.json so all engineers use the same credential"
      },
      {
        "id": "E",
        "text": "setting editor theme and display preferences at the project scope so they are uniform across workstations"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "Use centrally enforced controls for mandatory policies and repository configuration for shared project behavior.",
    "optionExplanations": {
      "A": "Correct — Managed configuration provides consistent, non-overridable policy enforcement.",
      "B": "Correct — Committed project settings distribute common tool definitions and permissions.",
      "C": "Not selected — Personal model preferences do not establish a common secure baseline.",
      "D": "Not selected — A committed shared key exposes credentials and removes individual accountability.",
      "E": "Not selected — Editor appearance is personal preference, not a security or team integration requirement."
    },
    "reference": "CCAR-P practice PDF, Q113 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-114",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are configuring Claude Code for a team that needs every engineer to share the same MCP server set, permission rules, and project context across the engineering monorepo. Which configuration scope best supports this requirement?",
    "options": [
      {
        "id": "A",
        "text": "user scope with the MCP server definitions and permission rules placed in each engineer’s ~/.claude/settings.json and synchronized manually via a shared setup script outside version control"
      },
      {
        "id": "B",
        "text": "Local scope configured only on the lead architect's machine, with no configuration present on other engineers' machines and no mechanism to distribute MCP servers or permission rules."
      },
      {
        "id": "C",
        "text": "project scope, with the configuration committed to the repository so every engineer working in the project picks up the same MCP servers, permissions, and context"
      },
      {
        "id": "D",
        "text": "User scope configured individually on each engineer's machine, with no shared configuration committed to the repository and no guarantee of consistency across the team."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Repository-specific team configuration belongs in version-controlled project scope.",
    "optionExplanations": {
      "A": "Not selected — Manually synchronizing user settings creates configuration drift and is not repository-scoped.",
      "B": "Not selected — A lead's local settings are not automatically shared with teammates.",
      "C": "Correct — Project-scoped files distribute the same integration and context to repository contributors.",
      "D": "Not selected — Independent personal configuration cannot guarantee a consistent team baseline."
    },
    "reference": "CCAR-P practice PDF, Q114 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-115",
    "domain": "security",
    "domainName": "Security & Guardrails",
    "topic": "Security & Guardrails",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A Claude needs to ensure that a security-hardening flag cannot be disabled by any individual engineer after it is set. Which configuration scope correctly enforces this requirement?",
    "options": [
      {
        "id": "A",
        "text": "User scope (~/.claude/settings.json) on each engineer’s machine"
      },
      {
        "id": "B",
        "text": "Environment variable defined in the CI/CD pipeline only"
      },
      {
        "id": "C",
        "text": "Managed configuration applied centrally and marked as non-overridable"
      },
      {
        "id": "D",
        "text": "Project scope (.claude/settings.json) committed to the repository"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Enforce mandatory security settings through administrator-managed policy rather than editable personal or project settings.",
    "optionExplanations": {
      "A": "Not selected — Engineers can modify their personal settings.",
      "B": "Not selected — A CI-only variable does not govern interactive developer sessions.",
      "C": "Correct — Centrally managed policy is the intended non-overridable configuration boundary.",
      "D": "Not selected — Repository configuration can be modified and does not by itself enforce an organization-wide mandate."
    },
    "reference": "CCAR-P practice PDF, Q115 (third-party answer key)",
    "tags": [
      "security",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-116",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are integrating Claude Code into a workflow that runs against a production database. Which guardrail design most directly preserves safety on data-modifying operations?",
    "options": [
      {
        "id": "A",
        "text": "Allow Claude Code to write directly to the production database without subagent scoping, read- only credential defaults, or human confirmation gates on data-modifying operations."
      },
      {
        "id": "B",
        "text": "Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation."
      },
      {
        "id": "C",
        "text": "Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications."
      },
      {
        "id": "D",
        "text": "Configure the database MCP server with a read-only credential by default, restrict the subagent’s tool list to read-only operations, and require explicit human confirmation on any operation that would modify data."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Default to read-only credentials and narrow tool access; put an explicit authorization gate before data modification.",
    "optionExplanations": {
      "A": "Not selected — Unrestricted direct writes can cause irreversible production changes without oversight.",
      "B": "Not selected — A fully privileged credential defeats least privilege even when normal usage is benign.",
      "C": "Not selected — Removing auditability prevents investigation and accountability for modifications.",
      "D": "Correct — Scoped credentials and tools limit available actions; a human gate controls exceptional writes."
    },
    "reference": "CCAR-P practice PDF, Q116 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-117",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A Claude architect is auditing configuration scope assignments. Which two statements correctly identify an appropriate use of user-scope configuration versus other scopes? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Persisting personal editor theme preferences that follow an engineer across projects."
      },
      {
        "id": "B",
        "text": "Saving a preferred Claude response language that applies to all repositories the engineer uses."
      },
      {
        "id": "C",
        "text": "Enforcing a company-wide policy that disables a feature for all engineers."
      },
      {
        "id": "D",
        "text": "Defining MCP server endpoints shared by all contributors to a specific repository."
      },
      {
        "id": "E",
        "text": "Storing API authentication keys so they are not committed to version control."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "explanation": "User scope is for personal preferences across repositories, not centrally enforced policy or shared project resources.",
    "optionExplanations": {
      "A": "Correct — An engineer's editor preferences should follow that engineer rather than a repository.",
      "B": "Correct — Personal language preferences can apply across projects without imposing them on teammates.",
      "C": "Not selected — Company-wide mandatory settings belong in managed policy.",
      "D": "Not selected — Repository-shared endpoints belong in project scope.",
      "E": "Not selected — Keeping keys out of Git is necessary, but use approved credential storage or runtime injection rather than treating user settings as a secret store."
    },
    "reference": "CCAR-P practice PDF, Q117 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-118",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "You are rolling out a standardized Claude Code configuration to an engineering team and must complete the planning steps before piloting the configuration. Which two steps must be completed BEFORE piloting the configuration with a small group of engineers? (Choose two.) Each correct answer presents part of the solution.",
    "options": [
      {
        "id": "A",
        "text": "Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents."
      },
      {
        "id": "B",
        "text": "Onboard every engineer in the organization to the new configuration through mandatory training sessions."
      },
      {
        "id": "C",
        "text": "Roll out the stabilized configuration to additional teams with documentation and a defined support channel."
      },
      {
        "id": "D",
        "text": "Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope."
      },
      {
        "id": "E",
        "text": "Iterate the configuration based on the pilot findings and stabilize the baseline before broader rollout."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Design the shared baseline and its security boundaries before testing it with a pilot group.",
    "optionExplanations": {
      "A": "Correct — Defining project tools, permissions and subagents establishes the configuration to pilot.",
      "B": "Not selected — Organization-wide onboarding should follow pilot validation, not precede it.",
      "C": "Not selected — Broader rollout requires a stabilized baseline and pilot evidence.",
      "D": "Correct — Workflow analysis and scope decisions determine which settings are shared or centrally enforced.",
      "E": "Not selected — Iteration based on pilot findings necessarily comes after the pilot."
    },
    "reference": "CCAR-P practice PDF, Q118 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-119",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are supporting a team whose Claude Code sessions consistently load 60 or more MCP tools from many servers, exhausting context budget before the session begins. Which adjustment most directly addresses this issue without removing capability?",
    "options": [
      {
        "id": "A",
        "text": "Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront."
      },
      {
        "id": "B",
        "text": "Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session."
      },
      {
        "id": "C",
        "text": "Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue."
      },
      {
        "id": "D",
        "text": "Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Defer loading tool definitions until the task requires them so the full capability catalog remains accessible.",
    "optionExplanations": {
      "A": "Correct — Tool Search reduces initial tool-definition context while preserving on-demand discovery.",
      "B": "Not selected — Disabling servers saves context by sacrificing the required capabilities.",
      "C": "Not selected — Adding prompt text increases context usage and does not reduce tool definitions.",
      "D": "Not selected — More servers increase the potential definition overhead rather than addressing it."
    },
    "reference": "CCAR-P practice PDF, Q119 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-120",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team manager wants all engineers working on the same repository to share identical MCP server definitions without manual synchronization. Which configuration approach satisfies this requirement?",
    "options": [
      {
        "id": "A",
        "text": "managed configuration pushed to all endpoints by the administrator"
      },
      {
        "id": "B",
        "text": "environment variables set at the operating-system level on each workstation"
      },
      {
        "id": "C",
        "text": "project-scope.claude/settings.json and.mcp.json files committed to the repository"
      },
      {
        "id": "D",
        "text": "each engineer maintains a personal ~/.claude/settings.json with the shared definitions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Use repository-scoped MCP configuration for automatic distribution of repository-specific integrations.",
    "optionExplanations": {
      "A": "Not selected — Managed settings can distribute organization-wide policy but are broader than the repository-specific requirement.",
      "B": "Not selected — Workstation variables require separate distribution and do not define a shared repository catalog by themselves.",
      "C": "Correct — Committed project configuration, including the MCP definition file, keeps contributors aligned with the repository.",
      "D": "Not selected — Personal settings require manual synchronization and can drift."
    },
    "reference": "CCAR-P practice PDF, Q120 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-121",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are diagnosing a Claude Code session whose subagent uses 50,000 tokens of context before the engineer types a single message. Which root cause is most likely?",
    "options": [
      {
        "id": "A",
        "text": "The developer's keyboard layout or input-method configuration is the cause of the elevated context consumption, introducing extra tokens before the engineer types any message."
      },
      {
        "id": "B",
        "text": "Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront."
      },
      {
        "id": "C",
        "text": "The model has internal personal preferences or default behaviors that silently consume large portions of context budget before any user message is processed, independent of tool configuration."
      },
      {
        "id": "D",
        "text": "The font rendering or display-scaling settings of the IDE are converting visual output into additional context tokens, causing the high pre-session context consumption."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Investigate preloaded tool definitions and other startup context when token usage is already high before a user message.",
    "optionExplanations": {
      "A": "Not selected — Keyboard layout does not load model context before input.",
      "B": "Correct — Many eagerly loaded MCP schemas can consume substantial startup context; deferral reduces that overhead.",
      "C": "Not selected — An unobservable personal preference of the model is not a plausible diagnostic explanation.",
      "D": "Not selected — IDE display scaling affects rendering, not prompt token accounting."
    },
    "reference": "CCAR-P practice PDF, Q121 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-122",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are explaining the precedence of Claude Code configuration scopes to the team. Which precedence ordering, from highest to lowest, is correct?",
    "options": [
      {
        "id": "A",
        "text": "Local → managed → user → command-line arguments → project"
      },
      {
        "id": "B",
        "text": "Project --> user --> managed --> local --> project command-line arguments"
      },
      {
        "id": "C",
        "text": "Managed → command-line arguments → local → project → user"
      },
      {
        "id": "D",
        "text": "User → project → local → command-line arguments → managed"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "For the scope hierarchy tested here, centrally enforced policy takes precedence, followed by invocation-specific and then local, project and user settings.",
    "optionExplanations": {
      "A": "Not selected — Local settings cannot take priority over centrally managed policy.",
      "B": "Not selected — Project and user settings cannot override managed or invocation-specific settings in the stated hierarchy.",
      "C": "Correct — The ordering matches the intended highest-to-lowest precedence in the source question.",
      "D": "Not selected — This reverses the hierarchy and would incorrectly permit personal preferences to override central policy."
    },
    "reference": "CCAR-P practice PDF, Q122 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-123",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are reviewing a peer’s Claude Code permission rules for an enterprise rollout. The rules grant unrestricted Bash access to all projects across all developers. Which response is most appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency."
      },
      {
        "id": "B",
        "text": "Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add configuration complexity, accepting the full attack surface for all engineers across all projects."
      },
      {
        "id": "C",
        "text": "Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations."
      },
      {
        "id": "D",
        "text": "Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Scope command permissions to necessary operations and explicitly restrict sensitive actions.",
    "optionExplanations": {
      "A": "Not selected — Expanding other tools merely increases the attack surface.",
      "B": "Not selected — Unrestricted Bash is disproportionate to the workflows' defined needs.",
      "C": "Correct — Specific allow patterns and deny rules reduce available authority while preserving required operations.",
      "D": "Not selected — Eliminating permissions removes the enforcement boundary altogether."
    },
    "reference": "CCAR-P practice PDF, Q123 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-124",
    "domain": "delivery",
    "domainName": "Discovery & Delivery",
    "topic": "Discovery & Delivery",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are integrating AI-assisted tooling into the teams documentation workflow. The team wants generated documentation that stays grounded in the actual code. Which integration approach best fits this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Generate documentation from the model’s training-data recall without reading any of the actual repository code, accepting that the output will not reflect the current implementation."
      },
      {
        "id": "B",
        "text": "Have the subagents publish generated documentation directly to the public-facing site without passing through the team’s normal review workflow or any human approval step."
      },
      {
        "id": "C",
        "text": "Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team’s normal review workflow."
      },
      {
        "id": "D",
        "text": "Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that documentation generation will be entirely disconnected from the actual implementation."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Ground generated documentation in the current repository and submit changes through the existing review process.",
    "optionExplanations": {
      "A": "Not selected — Training-data recall cannot establish the current implementation details.",
      "B": "Not selected — Direct publication bypasses the team's correctness and approval checks.",
      "C": "Correct — Reading relevant code supplies evidence, and normal review lets maintainers verify generated documentation.",
      "D": "Not selected — Disabling code-reading tools prevents grounding in the actual implementation."
    },
    "reference": "CCAR-P practice PDF, Q124 (third-party answer key)",
    "tags": [
      "delivery",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-125",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are supporting an engineer whose newly added MCP server does not appear in their Claude Code session. Which diagnostic step should be tried first?",
    "options": [
      {
        "id": "A",
        "text": "Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered."
      },
      {
        "id": "B",
        "text": "Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue."
      },
      {
        "id": "C",
        "text": "Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect."
      },
      {
        "id": "D",
        "text": "Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Verify registration and reload the relevant session before making disruptive changes.",
    "optionExplanations": {
      "A": "Not selected — Disabling every server does not first establish whether the new server was registered.",
      "B": "Not selected — Changing product families avoids rather than diagnoses the configuration issue.",
      "C": "Correct — Listing registered servers checks the configuration; reconnecting can load changes into the active session.",
      "D": "Not selected — Reinstalling the OS is disproportionate and destroys useful diagnostic state."
    },
    "reference": "CCAR-P practice PDF, Q125 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-130",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are reviewing a customer-support agent’s configuration. Each candidate tool falls into one of four categories: (1) required to complete defined tasks, (2) frequently used and reduces hand-offs, (3) occasionally useful for unrelated work, (4) speculative future utility. Which categories should typically remain in the agent configuration?",
    "options": [
      {
        "id": "A",
        "text": "Category 1 only, because least privilege means the minimal set that completes defined tasks."
      },
      {
        "id": "B",
        "text": "Categories 1, 2, and 3, because retaining occasionally useful tools avoids reconfiguring the agent when new requests arrive."
      },
      {
        "id": "C",
        "text": "Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand- offs."
      },
      {
        "id": "D",
        "text": "All 4 categories, because broader tool access tends to help agent performance, whether or not a tool maps to a defined task."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Retain tools that support defined work and recurring authorized handoffs; remove unrelated and speculative capabilities.",
    "optionExplanations": {
      "A": "Not selected — Keeping only indispensable tools may unnecessarily preserve frequent manual handoffs; the source treats category 2 as within scope.",
      "B": "Not selected — Occasionally useful tools for unrelated work expand authority beyond the agent's purpose.",
      "C": "Correct — Categories 1 and 2 support actual recurring responsibilities, provided each tool remains appropriately scoped.",
      "D": "Not selected — Speculative access increases context cost and security exposure without a defined need."
    },
    "reference": "CCAR-P practice PDF, Q130 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-134",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are designing the prompt for a ticket-triage classifier with thirty well-defined categories and clear category descriptions in the prompt. Which technique is most appropriate as the starting point?",
    "options": [
      {
        "id": "A",
        "text": "a prompt-chaining setup that routes each ticket through a coarse grouping step before selecting the final category"
      },
      {
        "id": "B",
        "text": "a chain-of-thought prompt for a routing decision that does not require multi-step reasoning"
      },
      {
        "id": "C",
        "text": "a zero-shot prompt that specifies the categories with their descriptions and the required output format"
      },
      {
        "id": "D",
        "text": "a prompt with no category descriptions, expecting the model to infer the category set"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Start with the simplest prompt that clearly defines the closed label set and output contract; add complexity only if evaluation warrants it.",
    "optionExplanations": {
      "A": "Not selected — Chaining adds an extra classification step before evidence shows it is needed.",
      "B": "Not selected — Multi-step reasoning is unnecessary as the initial approach for a well-defined label-selection task.",
      "C": "Correct — Explicit categories and output format make zero-shot classification a suitable baseline.",
      "D": "Not selected — Without category descriptions, the model must infer a taxonomy that the system already defines."
    },
    "reference": "CCAR-P practice PDF, Q134 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-135",
    "domain": "claude-code",
    "domainName": "Claude Code & Tools",
    "topic": "Claude Code & Tools",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A security team is evaluating two proposed controls. Control A adds an outbound tool allow-list with destination restrictions and per-call review. Control B scores responses against a stable adversarial evaluation set after each model-version change. Which two risk categories are correctly matched to these controls? (Choose two.)",
    "options": [
      {
        "id": "A",
        "text": "Control B -> undetected behavioral regression following a model change"
      },
      {
        "id": "B",
        "text": "Control B -> unauthorized data leaving the system through tool invocations"
      },
      {
        "id": "C",
        "text": "Control A -> unauthorized data leaving the system through tool invocations"
      },
      {
        "id": "D",
        "text": "Control A -> prompt injection from adversarial content in retrieved data"
      },
      {
        "id": "E",
        "text": "Control A -> undetected behavioral regression following a model change"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Match each control to the failure it directly prevents or detects.",
    "optionExplanations": {
      "A": "Correct — A stable adversarial benchmark detects behavioral changes after model upgrades.",
      "B": "Not selected — Evaluation can detect unsafe behavior but does not directly restrict outbound data transfer.",
      "C": "Correct — Destination restrictions and per-call review limit unauthorized data leaving through tools.",
      "D": "Not selected — Outbound restrictions reduce some consequences of injection but do not directly prevent malicious retrieved instructions.",
      "E": "Not selected — An outbound allow-list cannot measure version-related quality regression."
    },
    "reference": "CCAR-P practice PDF, Q135 (third-party answer key)",
    "tags": [
      "claude-code",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-138",
    "domain": "model",
    "domainName": "Model & Prompt Design",
    "topic": "Model & Prompt Design",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are integrating human review into a high-volume classification pipeline where reviewing every output is not possible. Which sampling strategy best balances throughput with quality oversight?",
    "options": [
      {
        "id": "A",
        "text": "risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs"
      },
      {
        "id": "B",
        "text": "inverse sampling that reviews only high-confidence routine outputs and skips all low- confidence and high-impact outputs"
      },
      {
        "id": "C",
        "text": "universal sampling that reviews every output without regard to confidence level or throughput impact"
      },
      {
        "id": "D",
        "text": "no sampling at all, relying on user-submitted complaints to surface quality and safety issues"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Allocate scarce reviewer capacity according to risk while retaining random checks on routine outputs.",
    "optionExplanations": {
      "A": "Correct — Reviewing risky cases and sampling routine ones balances coverage with throughput.",
      "B": "Not selected — Reviewing only high-confidence cases ignores the cases most likely to need intervention.",
      "C": "Not selected — Reviewing every output violates the stated capacity constraint.",
      "D": "Not selected — Complaints detect failures after users are affected and miss many silent errors."
    },
    "reference": "CCAR-P practice PDF, Q138 (third-party answer key)",
    "tags": [
      "model",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-139",
    "domain": "retrieval",
    "domainName": "Retrieval & Context",
    "topic": "Retrieval & Context",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are comparing two configurations for an internal compliance Q&A assistant. Configuration X reduces top-k retrieval and serves with a lighter model, lowering p95 latency by 38 percent at a measured 2 percent drop on the accuracy benchmark. Configuration Y keeps top-k and the heavier model, with p95 latency unchanged and no measurable accuracy change. The deployment’s stated priorities are accuracy first and latency second. Which configuration is the better recommendation?",
    "options": [
      {
        "id": "A",
        "text": "Configuration X, because a 38 percent latency improvement outweighs a 2 percent accuracy reduction as a general rule across compliance deployments."
      },
      {
        "id": "B",
        "text": "Configuration X, because the 2 percent accuracy reduction falls within normal benchmark variance and is not a meaningful regression here."
      },
      {
        "id": "C",
        "text": "Configuration X, because lower latency generally matters more than accuracy, independent of this deployment’s stated priorities."
      },
      {
        "id": "D",
        "text": "Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X reduces measured accuracy."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Respect the deployment's explicit ordering of priorities rather than assuming latency gains justify accuracy loss.",
    "optionExplanations": {
      "A": "Not selected — A general trade-off rule cannot override the stated accuracy-first requirement.",
      "B": "Not selected — No evidence is given that the measured accuracy decline is within benchmark uncertainty.",
      "C": "Not selected — Latency is expressly the secondary priority in this deployment.",
      "D": "Correct — Y preserves measured accuracy; choose X only if stakeholders accept the measured quality trade-off."
    },
    "reference": "CCAR-P practice PDF, Q139 (third-party answer key)",
    "tags": [
      "retrieval",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-144",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are defining escalation criteria for ambiguous cases in an automated workflow. Which set of criteria best supports consistent escalation?",
    "options": [
      {
        "id": "A",
        "text": "case age and the requester’s department, applied inconsistently across teams with no confidence threshold or classifier-based ambiguity flag"
      },
      {
        "id": "B",
        "text": "prior customer complaints and the requesting user’s seniority level, with no confidence threshold or content-classifier ambiguity flag"
      },
      {
        "id": "C",
        "text": "confidence threshold below a defined level, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review"
      },
      {
        "id": "D",
        "text": "a confidence threshold below a defined level and the on-call engineer’s personal preference, with no defined impact category or ambiguity-flag criterion"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Define objective, reproducible escalation triggers based on uncertainty, impact, ambiguity and user requests.",
    "optionExplanations": {
      "A": "Not selected — Case age and department are not sufficient risk triggers; inconsistent use reduces reliability.",
      "B": "Not selected — Complaints are retrospective, and seniority is not a substitute for objective risk criteria.",
      "C": "Correct — Defined thresholds and impact categories make similar cases escalate consistently and preserve a human-review path.",
      "D": "Not selected — A confidence threshold is useful, but personal preference and missing impact criteria leave inconsistent decisions."
    },
    "reference": "CCAR-P practice PDF, Q144 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  },
  {
    "id": "CCARP-158",
    "domain": "architecture",
    "domainName": "Architecture & Agents",
    "topic": "Architecture & Agents",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "You are defining transparency practices for a customer-facing assistant whose responses are materially shaped by AI. Which transparency practice most directly supports responsible deployment?",
    "options": [
      {
        "id": "A",
        "text": "Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system."
      },
      {
        "id": "B",
        "text": "Disclose AI involvement in the terms of service at signup and rely on that single notice to cover all subsequent interactions."
      },
      {
        "id": "C",
        "text": "Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed."
      },
      {
        "id": "D",
        "text": "Refuse to answer any user question about how the responses were produced or whether AI was involved treating the AI’s role as confidential operational information."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Disclose material AI involvement at an appropriate point and provide a practical route to human assistance.",
    "optionExplanations": {
      "A": "Not selected — Internal-only disclosure does not inform the people affected by AI-generated responses.",
      "B": "Not selected — A one-time terms-of-service notice may not provide meaningful awareness during later interactions.",
      "C": "Correct — Clear disclosure plus a documented human escalation path supports informed use and accountability.",
      "D": "Not selected — Refusing to explain AI involvement undermines transparency."
    },
    "reference": "CCAR-P practice PDF, Q158 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  }
];
