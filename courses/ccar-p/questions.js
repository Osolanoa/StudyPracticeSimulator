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
    "explanation": "Constraining responses to source-supported content, requiring citations, and adding a verification step directly addresses ungrounded claims, which are hallucinations relative to the retrieved documents. Requiring each claim to cite a specific passage makes unsupported statements visible. The verification step then checks that every claim actually traces back to the source and rejects or revises those that do not. Scoring new model versions against an adversarial evaluation set can detect regressions, but it does not prevent unsupported content in production responses. OAuth tokens and ingestion-time input classifiers deal with access control and prompt injection rather than grounding fidelity.\n\nStudy takeaway: constraining responses to source-supported content combined with required citations and a verification step. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. OAuth tokens and ingestion-time input classifiers deal with access control and prompt injection rather than grounding fidelity. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. OAuth tokens and ingestion-time input classifiers deal with access control and prompt injection rather than grounding fidelity. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Constraining responses to source-supported content, requiring citations, and adding a verification step directly addresses ungrounded claims, which are hallucinations relative to the retrieved documents. Requiring each claim to cite a specific passage makes unsupported statements visible. The wording of option C matches the intended solution.",
      "D": "Not selected. OAuth tokens and ingestion-time input classifiers deal with access control and prompt injection rather than grounding fidelity. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Claude Enterprise supports a HIPAA-eligible deployment when it is covered by a signed Business Associate Agreement and configured with appropriate privacy and accountability controls. Zero Data Retention helps limit retention of sensitive healthcare data, while audit logging provides the traceability needed for compliance monitoring and investigations. Consumer or personal accounts without a BAA are not appropriate for PHI processing, and disabling logs removes an important compliance control rather than satisfying HIPAA requirements.\n\nStudy takeaway: Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Consumer or personal accounts without a BAA are not appropriate for PHI processing, and disabling logs removes an important compliance control rather than satisfying HIPAA requirements. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Claude Enterprise supports a HIPAA-eligible deployment when it is covered by a signed Business Associate Agreement and configured with appropriate privacy and accountability controls. Zero Data Retention helps limit retention of sensitive healthcare data, while audit logging provides the traceability needed for compliance monitoring and investigations. The wording of option B matches the intended solution.",
      "C": "Not selected. Consumer or personal accounts without a BAA are not appropriate for PHI processing, and disabling logs removes an important compliance control rather than satisfying HIPAA requirements. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Consumer or personal accounts without a BAA are not appropriate for PHI processing, and disabling logs removes an important compliance control rather than satisfying HIPAA requirements. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "The agent needs read-only catalog and policy data plus a narrowly scoped ability to create drafts in the review queue. Sending emails directly would bypass human review, and administering an unrelated production database exceeds its assignment. Tool permissions, not model discretion alone, must enforce these boundaries.\n\nStudy takeaway: Read-only catalog lookup for vendor and SKU information.; Draft-write tool to create purchase-request drafts in the review queue.; Read-only retrieval of relevant procurement policies.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. The agent needs read-only catalog and policy data plus a narrowly scoped ability to create drafts in the review queue. Sending emails directly would bypass human review, and administering an unrelated production database exceeds its assignment. Tool permissions, not model discretion alone, must enforce these boundaries. The wording of option A matches the intended solution.",
      "B": "Not selected. Tool permissions, not model discretion alone, must enforce these boundaries. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. The agent needs read-only catalog and policy data plus a narrowly scoped ability to create drafts in the review queue. Sending emails directly would bypass human review, and administering an unrelated production database exceeds its assignment. Tool permissions, not model discretion alone, must enforce these boundaries. The wording of option C matches the intended solution.",
      "D": "Not selected. Tool permissions, not model discretion alone, must enforce these boundaries. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. The agent needs read-only catalog and policy data plus a narrowly scoped ability to create drafts in the review queue. Sending emails directly would bypass human review, and administering an unrelated production database exceeds its assignment. Tool permissions, not model discretion alone, must enforce these boundaries. The wording of option E matches the intended solution."
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
    "explanation": "An enterprise-tier deployment with a signed Data Processing Addendum establishes contractual safeguards for processing personal data. Defined retention settings, redaction of unnecessary personal data, and purpose-limited prompts support data minimization and storage limitation principles. A documented process for data-subject rights enables the organization to respond appropriately to access, deletion, and related GDPR requests. Together, these controls provide governance and operational evidence of responsible EU personal-data handling.\n\nStudy takeaway: enterprise-tier deployment with a signed Data Processing Addendum, defined data- retention configuration, redaction of personal data not needed for the task, and documented data-subject- rights handling. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. An enterprise-tier deployment with a signed Data Processing Addendum establishes contractual safeguards for processing personal data. Defined retention settings, redaction of unnecessary personal data, and purpose-limited prompts support data minimization and storage limitation principles. The wording of option A matches the intended solution.",
      "B": "Not selected. Together, these controls provide governance and operational evidence of responsible EU personal-data handling. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Together, these controls provide governance and operational evidence of responsible EU personal-data handling. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Together, these controls provide governance and operational evidence of responsible EU personal-data handling. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A per-role allow-list grants the assistant only the two capabilities required for its defined responsibilities: reading the knowledge base and writing to the draft queue. Enforcement at the orchestration layer prevents access to unapproved tools regardless of model behavior or prompt content. Global read access exposes unnecessary systems, while relying on the model to decline tools is not an enforceable permission boundary.\n\nStudy takeaway: Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Global read access exposes unnecessary systems, while relying on the model to decline tools is not an enforceable permission boundary. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. A per-role allow-list grants the assistant only the two capabilities required for its defined responsibilities: reading the knowledge base and writing to the draft queue. Enforcement at the orchestration layer prevents access to unapproved tools regardless of model behavior or prompt content. The wording of option B matches the intended solution.",
      "C": "Not selected. Global read access exposes unnecessary systems, while relying on the model to decline tools is not an enforceable permission boundary. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Global read access exposes unnecessary systems, while relying on the model to decline tools is not an enforceable permission boundary. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "An output classifier can identify recommendation language in generated responses and block it before it reaches the customer. Explicit system-prompt boundaries also instruct the assistant to treat regulated investment advice as out of scope and return a consistent refusal instead. Together, these controls prevent both intentional and inadvertent recommendation generation. Higher temperature is not a safety control, while session limits and SIEM logging do not stop prohibited content in real time.\n\nStudy takeaway: Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.; Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advice requests.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Higher temperature is not a safety control, while session limits and SIEM logging do not stop prohibited content in real time. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. An output classifier can identify recommendation language in generated responses and block it before it reaches the customer. Explicit system-prompt boundaries also instruct the assistant to treat regulated investment advice as out of scope and return a consistent refusal instead. The wording of option B matches the intended solution.",
      "C": "Not selected. Higher temperature is not a safety control, while session limits and SIEM logging do not stop prohibited content in real time. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Higher temperature is not a safety control, while session limits and SIEM logging do not stop prohibited content in real time. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. An output classifier can identify recommendation language in generated responses and block it before it reaches the customer. Explicit system-prompt boundaries also instruct the assistant to treat regulated investment advice as out of scope and return a consistent refusal instead. The wording of option E matches the intended solution."
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
    "explanation": "Threat models, control mappings, residual-risk acceptance criteria, and audit traceability address the evidence a security and compliance reviewer needs to evaluate an architectural decision. They show how threats are identified, which controls mitigate them, what risk remains, who can accept that risk, and how compliance can be demonstrated during an audit. Delivery schedules and implementation details serve product or engineering audiences, while executives typically need a more concise business and risk summary. \n\nStudy takeaway: Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Threat models, control mappings, residual-risk acceptance criteria, and audit traceability address the evidence a security and compliance reviewer needs to evaluate an architectural decision. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Threat models, control mappings, residual-risk acceptance criteria, and audit traceability address the evidence a security and compliance reviewer needs to evaluate an architectural decision. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Threat models, control mappings, residual-risk acceptance criteria, and audit traceability address the evidence a security and compliance reviewer needs to evaluate an architectural decision. They show how threats are identified, which controls mitigate them, what risk remains, who can accept that risk, and how compliance can be demonstrated during an audit. The wording of option C matches the intended solution.",
      "D": "Not selected. Threat models, control mappings, residual-risk acceptance criteria, and audit traceability address the evidence a security and compliance reviewer needs to evaluate an architectural decision. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Treating retrieved documents as untrusted input directly mitigates indirect prompt injection, where malicious text in retrieved content attempts to override instructions or alter model behavior. Input classifiers can detect suspicious or policy-violating retrieved material before it reaches the model context, while output validation helps prevent manipulated responses from being returned. Citations improve grounding but do not stop malicious instructions embedded in sources. Tool allow-lists and adversarial evaluations address related risks but not the immediate threat posed by retrieved content.\n\nStudy takeaway: Treat all retrieved content as untrusted input and apply input classifiers with output validation.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Treating retrieved documents as untrusted input directly mitigates indirect prompt injection, where malicious text in retrieved content attempts to override instructions or alter model behavior. Input classifiers can detect suspicious or policy-violating retrieved material before it reaches the model context, while output validation helps prevent manipulated responses from being returned. The wording of option A matches the intended solution.",
      "B": "Not selected. Tool allow-lists and adversarial evaluations address related risks but not the immediate threat posed by retrieved content. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Tool allow-lists and adversarial evaluations address related risks but not the immediate threat posed by retrieved content. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Tool allow-lists and adversarial evaluations address related risks but not the immediate threat posed by retrieved content. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Validating output against a structured schema prevents malformed, incomplete, or unsafe responses from triggering downstream actions. Layering prompt-level instructions with runtime content checks provides defense in depth, because prompt guidance alone can be bypassed or misinterpreted during generation. Lower temperature may make responses more consistent but does not enforce policy. Override phrases and a single system prompt create avoidable paths around safety controls.\n\nStudy takeaway: Validate the model output against a structured schema before downstream actions are taken.; Layer prompt-level guardrails with runtime content checks rather than relying on either alone.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Override phrases and a single system prompt create avoidable paths around safety controls. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Override phrases and a single system prompt create avoidable paths around safety controls. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Validating output against a structured schema prevents malformed, incomplete, or unsafe responses from triggering downstream actions. Layering prompt-level instructions with runtime content checks provides defense in depth, because prompt guidance alone can be bypassed or misinterpreted during generation. The wording of option C matches the intended solution.",
      "D": "Correct. Validating output against a structured schema prevents malformed, incomplete, or unsafe responses from triggering downstream actions. Layering prompt-level instructions with runtime content checks provides defense in depth, because prompt guidance alone can be bypassed or misinterpreted during generation. The wording of option D matches the intended solution.",
      "E": "Not selected. Override phrases and a single system prompt create avoidable paths around safety controls. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Logging generated summaries to the compliance audit trail and verifying that the requester is authorized are application-layer responsibilities. The application controls identity, permissions, access context, and integration with enterprise retention systems, which a Skill cannot reliably enforce on its own. The Skill should encapsulate reusable content and behavior, such as standardized disclaimers, prohibited-language rules, and output guidance, while the application enforces who may invoke it and records the resulting activity.\n\nStudy takeaway: Log every generated summary to the firm’s compliance audit trail for retention.; Verify the requesting user is authorized to generate investment summaries at all.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Logging generated summaries to the compliance audit trail and verifying that the requester is authorized are application-layer responsibilities. The application controls identity, permissions, access context, and integration with enterprise retention systems, which a Skill cannot reliably enforce on its own. The wording of option A matches the intended solution.",
      "B": "Correct. Logging generated summaries to the compliance audit trail and verifying that the requester is authorized are application-layer responsibilities. The application controls identity, permissions, access context, and integration with enterprise retention systems, which a Skill cannot reliably enforce on its own. The wording of option B matches the intended solution.",
      "C": "Not selected. Logging generated summaries to the compliance audit trail and verifying that the requester is authorized are application-layer responsibilities. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Logging generated summaries to the compliance audit trail and verifying that the requester is authorized are application-layer responsibilities. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. Logging generated summaries to the compliance audit trail and verifying that the requester is authorized are application-layer responsibilities. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Actor attribution in tool-call logs records the initiating user for every action, providing the audit trail and accountability missing from untracked tool execution. Per-user OAuth tokens replace the shared API key with individual, scope-limited credentials, allowing access to be identified and revoked per user. Schema validation and retrieval RBAC improve other security controls but do not solve shared authentication or missing caller attribution. \n\nStudy takeaway: Add actor attribution to tool-call logs so each call records the initiating user identity.; Replace the shared API key with per-user OAuth tokens carrying scope-restricted permissions.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Schema validation and retrieval RBAC improve other security controls but do not solve shared authentication or missing caller attribution. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Schema validation and retrieval RBAC improve other security controls but do not solve shared authentication or missing caller attribution. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Schema validation and retrieval RBAC improve other security controls but do not solve shared authentication or missing caller attribution. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Actor attribution in tool-call logs records the initiating user for every action, providing the audit trail and accountability missing from untracked tool execution. Per-user OAuth tokens replace the shared API key with individual, scope-limited credentials, allowing access to be identified and revoked per user. The wording of option D matches the intended solution.",
      "E": "Correct. Actor attribution in tool-call logs records the initiating user for every action, providing the audit trail and accountability missing from untracked tool execution. Per-user OAuth tokens replace the shared API key with individual, scope-limited credentials, allowing access to be identified and revoked per user. The wording of option E matches the intended solution."
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
    "explanation": "Role-based access controls restrict access to protected health information to authorized personnel, supporting HIPAA’s minimum necessary and access-control safeguards. Patient data must also be kept out of provider training or feedback workflows unless an appropriate Business Associate Agreement is in place, protecting PHI from unauthorized use or disclosure. Token limits, model capability, and streaming behavior may affect cost, quality, or latency, but they do not directly establish HIPAA compliance.\n\nStudy takeaway: Enforcing role-based access controls so that PHI is retrievable only by authorized personnel.; Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Token limits, model capability, and streaming behavior may affect cost, quality, or latency, but they do not directly establish HIPAA compliance. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Token limits, model capability, and streaming behavior may affect cost, quality, or latency, but they do not directly establish HIPAA compliance. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Role-based access controls restrict access to protected health information to authorized personnel, supporting HIPAA’s minimum necessary and access-control safeguards. Patient data must also be kept out of provider training or feedback workflows unless an appropriate Business Associate Agreement is in place, protecting PHI from unauthorized use or disclosure. The wording of option C matches the intended solution.",
      "D": "Correct. Role-based access controls restrict access to protected health information to authorized personnel, supporting HIPAA’s minimum necessary and access-control safeguards. Patient data must also be kept out of provider training or feedback workflows unless an appropriate Business Associate Agreement is in place, protecting PHI from unauthorized use or disclosure. The wording of option D matches the intended solution.",
      "E": "Not selected. Token limits, model capability, and streaming behavior may affect cost, quality, or latency, but they do not directly establish HIPAA compliance. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Identifying decision points by their impact and reversibility establishes where human oversight is needed and where automated handling is acceptable. Defining the sampling strategy and escalation criteria then determines which cases reach reviewers and how higher-risk or uncertain cases are handled. Together, these steps create the control structure required to test a representative pilot safely. Workflow iteration is driven by pilot observations, so it occurs after the pilot rather than before it.\n\nStudy takeaway: Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.; Identify the decision points in the pipeline that require human oversight by impact and reversibility.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Identifying decision points by their impact and reversibility establishes where human oversight is needed and where automated handling is acceptable. Defining the sampling strategy and escalation criteria then determines which cases reach reviewers and how higher-risk or uncertain cases are handled. The wording of option A matches the intended solution.",
      "B": "Not selected. Workflow iteration is driven by pilot observations, so it occurs after the pilot rather than before it. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Workflow iteration is driven by pilot observations, so it occurs after the pilot rather than before it. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Workflow iteration is driven by pilot observations, so it occurs after the pilot rather than before it. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. Identifying decision points by their impact and reversibility establishes where human oversight is needed and where automated handling is acceptable. Defining the sampling strategy and escalation criteria then determines which cases reach reviewers and how higher-risk or uncertain cases are handled. The wording of option E matches the intended solution."
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
    "explanation": "Treating user-provided text as untrusted data prevents asserted admin authority from changing the assistant’s governing instructions or permissions. Runtime classifiers add detection for jailbreak and override language, while scoped tool permissions ensure that text alone cannot escalate access. Audit logging records attempted attacks for monitoring and improvement. Relying only on intrinsic model behavior leaves gaps, and self-declared authority must never substitute for verified authorization.\n\nStudy takeaway: Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Relying only on intrinsic model behavior leaves gaps, and self-declared authority must never substitute for verified authorization. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Treating user-provided text as untrusted data prevents asserted admin authority from changing the assistant’s governing instructions or permissions. Runtime classifiers add detection for jailbreak and override language, while scoped tool permissions ensure that text alone cannot escalate access. The wording of option B matches the intended solution.",
      "C": "Not selected. Relying only on intrinsic model behavior leaves gaps, and self-declared authority must never substitute for verified authorization. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Relying only on intrinsic model behavior leaves gaps, and self-declared authority must never substitute for verified authorization. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Per-role tool allow-lists enforce least-privilege access before an agent can invoke external systems, limiting the impact of prompt injection, misuse, or compromised workflows. Adversarial-input evaluation with regression tracking verifies that guardrails withstand known attack patterns and that changes do not weaken protections over time. Logging and feedback are useful operational practices, but they do not directly prevent unsafe tool execution or demonstrate guardrail resilience.\n\nStudy takeaway: Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.; Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Logging and feedback are useful operational practices, but they do not directly prevent unsafe tool execution or demonstrate guardrail resilience. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Per-role tool allow-lists enforce least-privilege access before an agent can invoke external systems, limiting the impact of prompt injection, misuse, or compromised workflows. Adversarial-input evaluation with regression tracking verifies that guardrails withstand known attack patterns and that changes do not weaken protections over time. The wording of option B matches the intended solution.",
      "C": "Not selected. Logging and feedback are useful operational practices, but they do not directly prevent unsafe tool execution or demonstrate guardrail resilience. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Logging and feedback are useful operational practices, but they do not directly prevent unsafe tool execution or demonstrate guardrail resilience. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. Per-role tool allow-lists enforce least-privilege access before an agent can invoke external systems, limiting the impact of prompt injection, misuse, or compromised workflows. Adversarial-input evaluation with regression tracking verifies that guardrails withstand known attack patterns and that changes do not weaken protections over time. The wording of option E matches the intended solution."
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
    "explanation": "Approval rate parity alone does not show whether the assistant makes false approvals or false denials at similar rates for each protected group. Fairness assessment should examine relevant error measures, not only the overall outcome rate. Likewise, a 94 percent match with human underwriters only demonstrates agreement with historical decisions; it can reproduce or amplify bias already present in those decisions. High accuracy against a biased reference process is therefore not proof of fairness.\n\nStudy takeaway: Approval rate parity does not by itself assess error rate parity across protected groups.; Match with human underwriters does not establish freedom from underwriter-introduced bias.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Approval rate parity alone does not show whether the assistant makes false approvals or false denials at similar rates for each protected group. Fairness assessment should examine relevant error measures, not only the overall outcome rate. The wording of option A matches the intended solution.",
      "B": "Correct. Approval rate parity alone does not show whether the assistant makes false approvals or false denials at similar rates for each protected group. Fairness assessment should examine relevant error measures, not only the overall outcome rate. The wording of option B matches the intended solution.",
      "C": "Not selected. High accuracy against a biased reference process is therefore not proof of fairness. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. High accuracy against a biased reference process is therefore not proof of fairness. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. High accuracy against a biased reference process is therefore not proof of fairness. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A threat model, residual-risk register, and control-mapping table are intended for security and compliance reviewers because they document identified risks, remaining exposure, and the controls used to meet governance requirements. These artifacts support risk acceptance, auditability, and regulatory assessment rather than feature planning. A capability list and feature-level roadmap dependencies are appropriate for the product manager who owns the roadmap, since they show delivered value and sequencing constraints. Executive sponsors may need a summary, but they do not typically require detailed roadmap dependency management.\n\nStudy takeaway: Package 1 # security and compliance reviewer; Package 2 # product manager owning the roadmap. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Executive sponsors may need a summary, but they do not typically require detailed roadmap dependency management. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Executive sponsors may need a summary, but they do not typically require detailed roadmap dependency management. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. A threat model, residual-risk register, and control-mapping table are intended for security and compliance reviewers because they document identified risks, remaining exposure, and the controls used to meet governance requirements. These artifacts support risk acceptance, auditability, and regulatory assessment rather than feature planning. The wording of option C matches the intended solution.",
      "D": "Correct. A threat model, residual-risk register, and control-mapping table are intended for security and compliance reviewers because they document identified risks, remaining exposure, and the controls used to meet governance requirements. These artifacts support risk acceptance, auditability, and regulatory assessment rather than feature planning. The wording of option D matches the intended solution.",
      "E": "Not selected. Executive sponsors may need a summary, but they do not typically require detailed roadmap dependency management. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "The ADR should document the alternatives considered and the trade-offs accepted alongside the decision. This context explains why the chosen approach was selected, enables future maintainers to reassess it when conditions change, and supports effective reviews and audits. Recording only the technical decision loses the rationale needed to understand its consequences or evaluate other viable options.\n\nStudy takeaway: Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Recording only the technical decision loses the rationale needed to understand its consequences or evaluate other viable options. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. The ADR should document the alternatives considered and the trade-offs accepted alongside the decision. This context explains why the chosen approach was selected, enables future maintainers to reassess it when conditions change, and supports effective reviews and audits. The wording of option B matches the intended solution.",
      "C": "Not selected. Recording only the technical decision loses the rationale needed to understand its consequences or evaluate other viable options. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Recording only the technical decision loses the rationale needed to understand its consequences or evaluate other viable options. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "An executive sponsor needs a summary framed around business outcomes achieved, trade-offs accepted, and high-level risks acknowledged. Sponsors own funding and strategic direction, so they need to know what value the retrieval architecture delivers, what was given up to get it, and what exposure the organization is carrying. Detail on technical alternatives and component-level consequences suits engineering reviewers and would obscure the decision for a non-technical decision-maker. Feature-level roadmap dependencies fit product managers, and threat models with control mappings fit security and audit stakeholders. Tailoring the framing to the audience's decision rights is a core architectural communication skill.\n\nStudy takeaway: business outcomes achieved, trade-offs accepted, and high-level risks acknowledge. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Tailoring the framing to the audience's decision rights is a core architectural communication skill. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. An executive sponsor needs a summary framed around business outcomes achieved, trade-offs accepted, and high-level risks acknowledged. Sponsors own funding and strategic direction, so they need to know what value the retrieval architecture delivers, what was given up to get it, and what exposure the organization is carrying. The wording of option B matches the intended solution.",
      "C": "Not selected. Tailoring the framing to the audience's decision rights is a core architectural communication skill. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Tailoring the framing to the audience's decision rights is a core architectural communication skill. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Capturing business goals, success criteria, and the in-scope user population establishes what the capability must achieve and who it is intended to serve. Identifying non-functional constraints such as latency, cost, auditability, data sensitivity, and regulatory obligations defines the operating boundaries for the solution. These inputs must be gathered before stakeholder validation so stakeholders can confirm that the requirements reflect both business outcomes and critical constraints. Architecture decisions, rollout planning, and consolidated traceability follow after requirements are validated.\n\nStudy takeaway: Capture the business goals, success criteria, and the in-scope user population for the engagement.; Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Architecture decisions, rollout planning, and consolidated traceability follow after requirements are validated. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Capturing business goals, success criteria, and the in-scope user population establishes what the capability must achieve and who it is intended to serve. Identifying non-functional constraints such as latency, cost, auditability, data sensitivity, and regulatory obligations defines the operating boundaries for the solution. The wording of option B matches the intended solution.",
      "C": "Not selected. Architecture decisions, rollout planning, and consolidated traceability follow after requirements are validated. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Architecture decisions, rollout planning, and consolidated traceability follow after requirements are validated. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. Capturing business goals, success criteria, and the in-scope user population establishes what the capability must achieve and who it is intended to serve. Identifying non-functional constraints such as latency, cost, auditability, data sensitivity, and regulatory obligations defines the operating boundaries for the solution. The wording of option E matches the intended solution."
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
    "explanation": "A structured feedback session with a focused agenda, artifacts shared in advance, written capture of decisions and follow-ups, and confirmed action owners and dates gives stakeholders the best chance to contribute meaningfully to a deployment already underway. Sending artifacts ahead of time lets participants review the material and arrive with considered input, which keeps the limited meeting time on discussion instead of first reads. A focused agenda prevents drift into unrelated topics. Recording decisions in writing and assigning owners with dates turns feedback into accountable action. Open-ended meetings or relying on participants' memory tend to produce lost decisions and follow-ups that never happen.\n\nStudy takeaway: Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Open-ended meetings or relying on participants' memory tend to produce lost decisions and follow-ups that never happen. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. A structured feedback session with a focused agenda, artifacts shared in advance, written capture of decisions and follow-ups, and confirmed action owners and dates gives stakeholders the best chance to contribute meaningfully to a deployment already underway. Sending artifacts ahead of time lets participants review the material and arrive with considered input, which keeps the limited meeting time on discussion instead of first reads. The wording of option B matches the intended solution.",
      "C": "Not selected. Open-ended meetings or relying on participants' memory tend to produce lost decisions and follow-ups that never happen. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Open-ended meetings or relying on participants' memory tend to produce lost decisions and follow-ups that never happen. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "An operationally meaningful SLA defines a specific metric, a numeric threshold, an evaluation window, and a consequence for breach, as in \"p95 per-request latency under 800 ms over a 28-day window.\" Each element serves a purpose. The metric and threshold make compliance objectively measurable, and the window fixes the period over which performance is judged. The breach consequence ties a missed target to a documented response such as remediation or credits. A target that names a metric and threshold but omits the window and consequence cannot determine when a breach occurs or what follows. Qualitative or sentiment-based targets cannot be measured or enforced at all.\n\nStudy takeaway: A measurable target with a defined metric, threshold, evaluation window, and consequence for breach—for example, “p95 per-request latency under 800 ms over a 28-day window.”. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Qualitative or sentiment-based targets cannot be measured or enforced at all. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. An operationally meaningful SLA defines a specific metric, a numeric threshold, an evaluation window, and a consequence for breach, as in \"p95 per-request latency under 800 ms over a 28-day window.\" Each element serves a purpose. The metric and threshold make compliance objectively measurable, and the window fixes the period over which performance is judged. The wording of option B matches the intended solution.",
      "C": "Not selected. Qualitative or sentiment-based targets cannot be measured or enforced at all. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Qualitative or sentiment-based targets cannot be measured or enforced at all. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Effective technical writing starts by identifying the audience and the specific questions the guide must answer for them, because that determines the depth, terminology, and emphasis of every section. Outlining the sections, covering overview, components, contracts, flows, runbooks, and limitations, then gives the guide a complete structure so each part has a clear purpose and nothing essential is missed. Both steps shape what gets written, so they belong before drafting begins. Translation, version control setup, and validation with the implementation team all act on content that already exists, which places them after or alongside drafting rather than ahead of it.\n\nStudy takeaway: Identify the audience and the questions the guide must answer for that audience.; Outline the sections of the guide covering overview, components, contracts, flows, runbooks, and limitations.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Effective technical writing starts by identifying the audience and the specific questions the guide must answer for them, because that determines the depth, terminology, and emphasis of every section. Outlining the sections, covering overview, components, contracts, flows, runbooks, and limitations, then gives the guide a complete structure so each part has a clear purpose and nothing essential is missed. The wording of option A matches the intended solution.",
      "B": "Not selected. Translation, version control setup, and validation with the implementation team all act on content that already exists, which places them after or alongside drafting rather than ahead of it. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Effective technical writing starts by identifying the audience and the specific questions the guide must answer for them, because that determines the depth, terminology, and emphasis of every section. Outlining the sections, covering overview, components, contracts, flows, runbooks, and limitations, then gives the guide a complete structure so each part has a clear purpose and nothing essential is missed. The wording of option C matches the intended solution.",
      "D": "Not selected. Translation, version control setup, and validation with the implementation team all act on content that already exists, which places them after or alongside drafting rather than ahead of it. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. Translation, version control setup, and validation with the implementation team all act on content that already exists, which places them after or alongside drafting rather than ahead of it. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A complete handoff package combines an architecture overview, architecture decision records (ADRs), component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations. Together these explain what the system is, why it was built that way, how to operate it day to day, how to respond to incidents, and where its boundaries lie. Scattered code comments, a single diagram, or a verbal walkthrough each cover only a fragment of this knowledge. None of them gives operators and future maintainers a durable, integrated reference after the original team moves on.\n\nStudy takeaway: architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. A complete handoff package combines an architecture overview, architecture decision records (ADRs), component-level diagrams, runbooks for common operations, an on-call playbook, and a list of known limitations. Together these explain what the system is, why it was built that way, how to operate it day to day, how to respond to incidents, and where its boundaries lie. The wording of option A matches the intended solution.",
      "B": "Not selected. None of them gives operators and future maintainers a durable, integrated reference after the original team moves on. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. None of them gives operators and future maintainers a durable, integrated reference after the original team moves on. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. None of them gives operators and future maintainers a durable, integrated reference after the original team moves on. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Each observation maps to a distinct business value pillar. The drop in summarization time from 47 to 6 minutes is an efficiency gain, because the same task now consumes fewer resources. Productivity, however, measures whether saved time turns into more valuable output, and since associates show no change in billable work, that benefit has not yet been realized. The 22% rise in infrastructure spend from redundant retry logic is a solution cost issue, not an SLA degradation, since it affects what the system costs to run rather than how reliably it performs. The 8 minutes of attorney correction is an efficiency loss that offsets part of the time saved, leaving a real net gain of about 33 minutes per document.\n\nStudy takeaway: Observation 1 indicates an efficiency gain; Observation 2 indicates that productivity has not yet been realized; Observation 3 indicates a solution cost issue; Observation 4 indicates an efficiency loss that partially offsets the gain from Observation 1.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. The 8 minutes of attorney correction is an efficiency loss that offsets part of the time saved, leaving a real net gain of about 33 minutes per document. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Each observation maps to a distinct business value pillar. The drop in summarization time from 47 to 6 minutes is an efficiency gain, because the same task now consumes fewer resources. The wording of option B matches the intended solution.",
      "C": "Not selected. The 8 minutes of attorney correction is an efficiency loss that offsets part of the time saved, leaving a real net gain of about 33 minutes per document. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. The 8 minutes of attorney correction is an efficiency loss that offsets part of the time saved, leaving a real net gain of about 33 minutes per document. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Acknowledging the request, stating its scope and timeline implications openly, and offering concrete options such as deferral, descoping other work, or extending the timeline is the approach that best balances stakeholder needs with delivery reality. It treats the stakeholder's underlying need as legitimate while making the trade-offs explicit, so the decision rests with the person who owns the business priority. Silently absorbing the change creates hidden risk that later surfaces as missed dates and eroded trust. Refusing outright protects the plan but ignores the need behind the request. Concealing it from the team undermines coordination.\n\nStudy takeaway: Acknowledge the request, name the scope and timeline implications transparently, and propose options (defer, descope something else, or extend the timeline) for the stakeholder to choose.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Concealing it from the team undermines coordination. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Acknowledging the request, stating its scope and timeline implications openly, and offering concrete options such as deferral, descoping other work, or extending the timeline is the approach that best balances stakeholder needs with delivery reality. It treats the stakeholder's underlying need as legitimate while making the trade-offs explicit, so the decision rests with the person who owns the business priority. The wording of option B matches the intended solution.",
      "C": "Not selected. Concealing it from the team undermines coordination. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Concealing it from the team undermines coordination. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A regular cadence for revisiting expectations and assumptions keeps stakeholders aligned as project conditions, priorities, and constraints change. Explicitly reconciling divergent positions surfaces trade- offs and produces shared decisions instead of allowing unresolved conflict to reappear later. Recording sessions can improve communication, but it does not itself create alignment. Escalation or rotating facilitation may sometimes be useful, but neither replaces ongoing expectation review and direct resolution of differences.\n\nStudy takeaway: Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.; Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Escalation or rotating facilitation may sometimes be useful, but neither replaces ongoing expectation review and direct resolution of differences. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Escalation or rotating facilitation may sometimes be useful, but neither replaces ongoing expectation review and direct resolution of differences. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Escalation or rotating facilitation may sometimes be useful, but neither replaces ongoing expectation review and direct resolution of differences. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. A regular cadence for revisiting expectations and assumptions keeps stakeholders aligned as project conditions, priorities, and constraints change. Explicitly reconciling divergent positions surfaces trade- offs and produces shared decisions instead of allowing unresolved conflict to reappear later. The wording of option D matches the intended solution.",
      "E": "Correct. A regular cadence for revisiting expectations and assumptions keeps stakeholders aligned as project conditions, priorities, and constraints change. Explicitly reconciling divergent positions surfaces trade- offs and produces shared decisions instead of allowing unresolved conflict to reappear later. The wording of option E matches the intended solution."
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
    "explanation": "A useful operational runbook gives on-call engineers actionable guidance throughout an incident. It documents common alerts, how to triage them, when and how to escalate, and how to safely roll back a problematic change. Links to relevant dashboards and logs provide the evidence needed to diagnose service behavior quickly. References alone or partial procedures leave responders without enough information to manage incidents consistently.\n\nStudy takeaway: Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. References alone or partial procedures leave responders without enough information to manage incidents consistently. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. A useful operational runbook gives on-call engineers actionable guidance throughout an incident. It documents common alerts, how to triage them, when and how to escalate, and how to safely roll back a problematic change. The wording of option B matches the intended solution.",
      "C": "Not selected. References alone or partial procedures leave responders without enough information to manage incidents consistently. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. References alone or partial procedures leave responders without enough information to manage incidents consistently. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Implementation guidance for a delivery team must be detailed enough to build, configure, integrate, and operate the solution consistently. Component responsibilities and interface contracts define ownership and integration boundaries, while sequence diagrams clarify how major workflows behave across components. Configuration parameters and defaults make deployments repeatable, and operational runbooks prepare the team to support common operational tasks. Higher-level architecture descriptions alone do not provide the actionable detail needed for implementation.\n\nStudy takeaway: Component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Implementation guidance for a delivery team must be detailed enough to build, configure, integrate, and operate the solution consistently. Component responsibilities and interface contracts define ownership and integration boundaries, while sequence diagrams clarify how major workflows behave across components. The wording of option A matches the intended solution.",
      "B": "Not selected. Higher-level architecture descriptions alone do not provide the actionable detail needed for implementation. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Higher-level architecture descriptions alone do not provide the actionable detail needed for implementation. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Higher-level architecture descriptions alone do not provide the actionable detail needed for implementation. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Decomposing a vague request through targeted questioning turns \"fix our customer escalations\" into requirements a team can actually design against. Asking who escalates and what triggers escalation identifies the actors and entry points. Defining what good resolution looks like supplies measurable success criteria. Surfacing constraints such as latency, cost, audit needs, and data sensitivity shapes the architecture before any build begins. Accepting the sponsor's phrasing as final, or reusing assumptions from a past engagement in another industry, skips this validation and risks building a system that solves the wrong problem.\n\nStudy takeaway: Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Accepting the sponsor's phrasing as final, or reusing assumptions from a past engagement in another industry, skips this validation and risks building a system that solves the wrong problem. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Decomposing a vague request through targeted questioning turns \"fix our customer escalations\" into requirements a team can actually design against. Asking who escalates and what triggers escalation identifies the actors and entry points. The wording of option B matches the intended solution.",
      "C": "Not selected. Accepting the sponsor's phrasing as final, or reusing assumptions from a past engagement in another industry, skips this validation and risks building a system that solves the wrong problem. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Accepting the sponsor's phrasing as final, or reusing assumptions from a past engagement in another industry, skips this validation and risks building a system that solves the wrong problem. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A p95 latency target under 800 milliseconds at the expected request volume defines a performance constraint rather than a system capability. It specifies how quickly the system must operate for most requests under load, which is a non-functional quality attribute. The other options describe functional behaviors: extracting fields, drafting editable responses, and classifying tickets.\n\nStudy takeaway: The system must respond at p95 latency under 800 milliseconds at the expected request volume.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. The other options describe functional behaviors: extracting fields, drafting editable responses, and classifying tickets. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. The other options describe functional behaviors: extracting fields, drafting editable responses, and classifying tickets. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. The other options describe functional behaviors: extracting fields, drafting editable responses, and classifying tickets. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. A p95 latency target under 800 milliseconds at the expected request volume defines a performance constraint rather than a system capability. It specifies how quickly the system must operate for most requests under load, which is a non-functional quality attribute. The wording of option D matches the intended solution."
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
    "explanation": "Measured p50 and p95 latency baselines give stakeholders an objective view of typical and worst-case response times relative to the agreed SLA. This replaces assumptions with shared evidence and clarifies whether the system is meeting its commitments. If production constraints make the existing target unrealistic, collaboratively revising the SLA aligns expectations with feasible performance and documented trade-offs. Halting development or changing models without evaluation does not establish agreement on acceptable latency.\n\nStudy takeaway: Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.; Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Measured p50 and p95 latency baselines give stakeholders an objective view of typical and worst-case response times relative to the agreed SLA. This replaces assumptions with shared evidence and clarifies whether the system is meeting its commitments. The wording of option A matches the intended solution.",
      "B": "Not selected. Halting development or changing models without evaluation does not establish agreement on acceptable latency. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Halting development or changing models without evaluation does not establish agreement on acceptable latency. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Halting development or changing models without evaluation does not establish agreement on acceptable latency. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. Measured p50 and p95 latency baselines give stakeholders an objective view of typical and worst-case response times relative to the agreed SLA. This replaces assumptions with shared evidence and clarifies whether the system is meeting its commitments. The wording of option E matches the intended solution."
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
    "explanation": "An effective architecture presentation begins with the decision, its business value, and the trade-offs it accepts, giving the executive sponsor the context needed to approve and support it. It then provides technical rationale, considered alternatives, and implementation implications so engineering leads can validate and execute the decision. This layered structure serves different information needs without omitting essential context for either audience.\n\nStudy takeaway: Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. This layered structure serves different information needs without omitting essential context for either audience. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. An effective architecture presentation begins with the decision, its business value, and the trade-offs it accepts, giving the executive sponsor the context needed to approve and support it. It then provides technical rationale, considered alternatives, and implementation implications so engineering leads can validate and execute the decision. The wording of option B matches the intended solution.",
      "C": "Not selected. This layered structure serves different information needs without omitting essential context for either audience. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. This layered structure serves different information needs without omitting essential context for either audience. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "The recommendation leads with the architectural decision so the committee can quickly understand what approval is being requested. It then addresses the CFO’s cost, return, and financial-risk concerns, the general counsel’s legal, privacy, and compliance requirements, and the CIO’s technical integration, security, and operational considerations. This stakeholder-oriented structure makes the rationale relevant to each decision-maker while keeping all parties aligned on one recommendation. Starting with technical detail or cost projections alone can obscure the business decision and fail to address the committee’s broader concerns.\n\nStudy takeaway: Lead with the architectural decision, then address each stakeholder’s primary concerns directly.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Starting with technical detail or cost projections alone can obscure the business decision and fail to address the committee’s broader concerns. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Starting with technical detail or cost projections alone can obscure the business decision and fail to address the committee’s broader concerns. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Starting with technical detail or cost projections alone can obscure the business decision and fail to address the committee’s broader concerns. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. The recommendation leads with the architectural decision so the committee can quickly understand what approval is being requested. It then addresses the CFO’s cost, return, and financial-risk concerns, the general counsel’s legal, privacy, and compliance requirements, and the CIO’s technical integration, security, and operational considerations. The wording of option D matches the intended solution."
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
    "explanation": "An architecture overview, ADRs, and component contracts give the implementation team the intended system structure, key decisions, and integration expectations. An evaluation framework with a reference set provides a repeatable way to validate Claude behavior and quality during delivery. Runbooks, an on-call playbook, and a known-limitations register prepare operational teams to support, troubleshoot, and safely evolve the deployment. Slides, verbal handoffs, or source code alone do not provide the documented technical and operational context needed for a reliable transition.\n\nStudy takeaway: Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Slides, verbal handoffs, or source code alone do not provide the documented technical and operational context needed for a reliable transition. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Slides, verbal handoffs, or source code alone do not provide the documented technical and operational context needed for a reliable transition. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. An architecture overview, ADRs, and component contracts give the implementation team the intended system structure, key decisions, and integration expectations. An evaluation framework with a reference set provides a repeatable way to validate Claude behavior and quality during delivery. The wording of option C matches the intended solution.",
      "D": "Not selected. Slides, verbal handoffs, or source code alone do not provide the documented technical and operational context needed for a reliable transition. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Facilitating structured discovery establishes the business decision, customer journey, and measurable outcome before solution design begins. A vague goal such as improving customer experience does not provide enough information to select an appropriate AI capability, define success, or evaluate risk. Discovery aligns the sponsor and delivery team on the problem to solve and the metric that will demonstrate value. Prototyping or imposing a scope based on assumptions risks building a solution that addresses the wrong need. \n\nStudy takeaway: Facilitate a structured discovery to define the failing decision and the target metric.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Prototyping or imposing a scope based on assumptions risks building a solution that addresses the wrong need. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Prototyping or imposing a scope based on assumptions risks building a solution that addresses the wrong need. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Prototyping or imposing a scope based on assumptions risks building a solution that addresses the wrong need. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Facilitating structured discovery establishes the business decision, customer journey, and measurable outcome before solution design begins. A vague goal such as improving customer experience does not provide enough information to select an appropriate AI capability, define success, or evaluate risk. The wording of option D matches the intended solution."
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
    "explanation": "Carrying the same evaluation framework and reference set across iterations preserves consistent quality criteria, making results comparable as the system evolves. Capturing lessons learned at each phase boundary also creates a feedback loop, so later work benefits from earlier outcomes, failures, and refinements. Archiving deliverables preserves history but does not actively support continuity in subsequent phases. Locking early decisions prevents the adaptation that iterative deployment practices require. \n\nStudy takeaway: Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.; Capture lessons learned at the end of each phase and surface them as inputs to the next phase.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Locking early decisions prevents the adaptation that iterative deployment practices require. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Carrying the same evaluation framework and reference set across iterations preserves consistent quality criteria, making results comparable as the system evolves. Capturing lessons learned at each phase boundary also creates a feedback loop, so later work benefits from earlier outcomes, failures, and refinements. The wording of option B matches the intended solution.",
      "C": "Not selected. Locking early decisions prevents the adaptation that iterative deployment practices require. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Carrying the same evaluation framework and reference set across iterations preserves consistent quality criteria, making results comparable as the system evolves. Capturing lessons learned at each phase boundary also creates a feedback loop, so later work benefits from earlier outcomes, failures, and refinements. The wording of option D matches the intended solution.",
      "E": "Not selected. Locking early decisions prevents the adaptation that iterative deployment practices require. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "When new requirements cannot be met without changing component responsibilities or core contracts, the deployment has crossed beyond routine iteration into architectural change. Responsibilities, interfaces, and contracts define how system components interact, so altering them requires reconsidering the design as a whole. Documentation edits, alert tuning, and localized copy changes are bounded operational or content updates that preserve the existing architecture.\n\nStudy takeaway: The system’s current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Documentation edits, alert tuning, and localized copy changes are bounded operational or content updates that preserve the existing architecture. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Documentation edits, alert tuning, and localized copy changes are bounded operational or content updates that preserve the existing architecture. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Documentation edits, alert tuning, and localized copy changes are bounded operational or content updates that preserve the existing architecture. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. When new requirements cannot be met without changing component responsibilities or core contracts, the deployment has crossed beyond routine iteration into architectural change. Responsibilities, interfaces, and contracts define how system components interact, so altering them requires reconsidering the design as a whole. The wording of option D matches the intended solution."
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
    "explanation": "Strong architectural-decision communication records who owns the decision and when it will be revisited if assumptions, constraints, or business conditions change. It also documents the alternatives considered and the evaluation criteria, making the rationale transparent and allowing future reviewers to understand trade-offs. Omitting rejected alternatives removes important context, while mandatory forums and visual-template consistency may help process but do not by themselves establish decision quality or traceability.\n\nStudy takeaway: Ownership and review cadence for revisiting the decision when conditions or assumptions change.; Alternatives considered along with the criteria that were used to evaluate each alternative.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Strong architectural-decision communication records who owns the decision and when it will be revisited if assumptions, constraints, or business conditions change. It also documents the alternatives considered and the evaluation criteria, making the rationale transparent and allowing future reviewers to understand trade-offs. The wording of option A matches the intended solution.",
      "B": "Not selected. Omitting rejected alternatives removes important context, while mandatory forums and visual-template consistency may help process but do not by themselves establish decision quality or traceability. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Omitting rejected alternatives removes important context, while mandatory forums and visual-template consistency may help process but do not by themselves establish decision quality or traceability. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Strong architectural-decision communication records who owns the decision and when it will be revisited if assumptions, constraints, or business conditions change. It also documents the alternatives considered and the evaluation criteria, making the rationale transparent and allowing future reviewers to understand trade-offs. The wording of option D matches the intended solution.",
      "E": "Not selected. Omitting rejected alternatives removes important context, while mandatory forums and visual-template consistency may help process but do not by themselves establish decision quality or traceability. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Stakeholder workshops identify business goals, user needs, and operational constraints such as response latency, answer quality, privacy, and regulatory compliance before a solution is scoped. Explicit success criteria and failure thresholds then make those requirements measurable and provide objective gates for production release. Choosing a model before gathering requirements or deferring constraints reverses the discovery process and can produce an unsuitable design.\n\nStudy takeaway: Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.; Documenting explicit success criteria and failure thresholds that will gate production deployment.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Stakeholder workshops identify business goals, user needs, and operational constraints such as response latency, answer quality, privacy, and regulatory compliance before a solution is scoped. Explicit success criteria and failure thresholds then make those requirements measurable and provide objective gates for production release. The wording of option A matches the intended solution.",
      "B": "Not selected. Choosing a model before gathering requirements or deferring constraints reverses the discovery process and can produce an unsuitable design. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Choosing a model before gathering requirements or deferring constraints reverses the discovery process and can produce an unsuitable design. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Stakeholder workshops identify business goals, user needs, and operational constraints such as response latency, answer quality, privacy, and regulatory compliance before a solution is scoped. Explicit success criteria and failure thresholds then make those requirements measurable and provide objective gates for production release. The wording of option D matches the intended solution.",
      "E": "Not selected. Choosing a model before gathering requirements or deferring constraints reverses the discovery process and can produce an unsuitable design. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Implementation-ready documentation defines the technical interfaces each component must follow, including integration contracts, configuration schemas, and input/output shapes. This allows the implementation team to build and connect components consistently without needing design clarification. A decision log also preserves the reasoning behind important architectural choices and rejected alternatives, enabling the team to handle related implementation decisions independently. A high-level business narrative or architect contact information does not replace actionable technical detail and recorded rationale.\n\nStudy takeaway: The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.; The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Implementation-ready documentation defines the technical interfaces each component must follow, including integration contracts, configuration schemas, and input/output shapes. This allows the implementation team to build and connect components consistently without needing design clarification. The wording of option A matches the intended solution.",
      "B": "Correct. Implementation-ready documentation defines the technical interfaces each component must follow, including integration contracts, configuration schemas, and input/output shapes. This allows the implementation team to build and connect components consistently without needing design clarification. The wording of option B matches the intended solution.",
      "C": "Not selected. A high-level business narrative or architect contact information does not replace actionable technical detail and recorded rationale. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. A high-level business narrative or architect contact information does not replace actionable technical detail and recorded rationale. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. A high-level business narrative or architect contact information does not replace actionable technical detail and recorded rationale. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Architecture X fails the stated latency requirement because its 4.2-second average exceeds the 3- second SLA, regardless of its stronger quality score. Architecture Y meets the SLA and should then be assessed across multiple business value pillars rather than on cost alone. Its annual cost is $180,000 versus $360,000 for Architecture X, but the quality difference must also be evaluated for its effect on clinician productivity, documentation accuracy, and workflow outcomes.\n\nStudy takeaway: Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Its annual cost is $180,000 versus $360,000 for Architecture X, but the quality difference must also be evaluated for its effect on clinician productivity, documentation accuracy, and workflow outcomes. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Its annual cost is $180,000 versus $360,000 for Architecture X, but the quality difference must also be evaluated for its effect on clinician productivity, documentation accuracy, and workflow outcomes. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Architecture X fails the stated latency requirement because its 4.2-second average exceeds the 3- second SLA, regardless of its stronger quality score. Architecture Y meets the SLA and should then be assessed across multiple business value pillars rather than on cost alone. The wording of option C matches the intended solution.",
      "D": "Not selected. Its annual cost is $180,000 versus $360,000 for Architecture X, but the quality difference must also be evaluated for its effect on clinician productivity, documentation accuracy, and workflow outcomes. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "An Architecture Decision Record preserves the reasoning behind a significant technical choice in a durable, reviewable format. It records the context, chosen approach, alternatives, consequences, and ownership, allowing future auditors and new team members to understand both what was decided and why. Informal conversations, isolated code comments, and unsupported slide decks do not provide the complete, traceable decision history needed for governance and onboarding. \n\nStudy takeaway: An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. An Architecture Decision Record preserves the reasoning behind a significant technical choice in a durable, reviewable format. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. An Architecture Decision Record preserves the reasoning behind a significant technical choice in a durable, reviewable format. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. An Architecture Decision Record preserves the reasoning behind a significant technical choice in a durable, reviewable format. It records the context, chosen approach, alternatives, consequences, and ownership, allowing future auditors and new team members to understand both what was decided and why. The wording of option C matches the intended solution.",
      "D": "Not selected. An Architecture Decision Record preserves the reasoning behind a significant technical choice in a durable, reviewable format. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Processing three times as many purchase orders per analyst demonstrates efficiency because the same operational work is completed with less effort and time. Eliminating a manual role and redeploying staff to higher-value vendor management represents transformation, since the operating model and employee responsibilities change. API spending above the projected transaction budget is a solution cost issue. Batch response time exceeding the committed threshold is a performance SLA issue.\n\nStudy takeaway: Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Processing three times as many purchase orders per analyst demonstrates efficiency because the same operational work is completed with less effort and time. Eliminating a manual role and redeploying staff to higher-value vendor management represents transformation, since the operating model and employee responsibilities change. The wording of option A matches the intended solution.",
      "B": "Not selected. Batch response time exceeding the committed threshold is a performance SLA issue. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Batch response time exceeding the committed threshold is a performance SLA issue. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Batch response time exceeding the committed threshold is a performance SLA issue. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Embedding Claude Code in the IDE reduces context-switching by surfacing AI assistance where the code is actually written, so developers can generate and review code without leaving their working environment. A Slack-only bot does the opposite, adding friction because developers must copy code out, wait for replies, and paste results back into the editor, which undermines the productivity goal. Workflow improvement depends on the integration point, not just the model, so treating the proposals as equivalent because the model is identical misses the point. An audit log or asynchronous queue may have some value, but neither addresses developer productivity, which is the objective being evaluated.\n\nStudy takeaway: Proposal B introduces workflow friction by requiring developers to leave the IDE, which undermines the productivity objective.; Proposal A reduces context-switching by surfacing AI assistance at the point of development without requiring a separate tool.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. An audit log or asynchronous queue may have some value, but neither addresses developer productivity, which is the objective being evaluated. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Embedding Claude Code in the IDE reduces context-switching by surfacing AI assistance where the code is actually written, so developers can generate and review code without leaving their working environment. A Slack-only bot does the opposite, adding friction because developers must copy code out, wait for replies, and paste results back into the editor, which undermines the productivity goal. The wording of option B matches the intended solution.",
      "C": "Correct. Embedding Claude Code in the IDE reduces context-switching by surfacing AI assistance where the code is actually written, so developers can generate and review code without leaving their working environment. A Slack-only bot does the opposite, adding friction because developers must copy code out, wait for replies, and paste results back into the editor, which undermines the productivity goal. The wording of option C matches the intended solution.",
      "D": "Not selected. An audit log or asynchronous queue may have some value, but neither addresses developer productivity, which is the objective being evaluated. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. An audit log or asynchronous queue may have some value, but neither addresses developer productivity, which is the objective being evaluated. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Before a pilot can begin, the team must identify which workflow steps benefit from AI-assisted tooling and which must stay under human authority, because this design decision defines what Claude Code is allowed to do. That analysis then drives the technical setup: configuring the project-scope MCP servers, permissions, subagents, and persistent project context (such as CLAUDE.md) so the tool actually operates within those boundaries. Together these steps produce a working, correctly scoped configuration that a small group can test. Iterating on pilot findings necessarily comes after the pilot, and full documentation with runbooks or formal managerial sign-off are rollout activities that depend on what the pilot reveals rather than prerequisites for running it.\n\nStudy takeaway: Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain. ; Configure the project-scope Model Context Protocol (MCP) servers, permissions, subagents, and persistent project context.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Iterating on pilot findings necessarily comes after the pilot, and full documentation with runbooks or formal managerial sign-off are rollout activities that depend on what the pilot reveals rather than prerequisites for running it. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Before a pilot can begin, the team must identify which workflow steps benefit from AI-assisted tooling and which must stay under human authority, because this design decision defines what Claude Code is allowed to do. That analysis then drives the technical setup: configuring the project-scope MCP servers, permissions, subagents, and persistent project context (such as CLAUDE.md) so the tool actually operates within those boundaries. The wording of option B matches the intended solution.",
      "C": "Not selected. Iterating on pilot findings necessarily comes after the pilot, and full documentation with runbooks or formal managerial sign-off are rollout activities that depend on what the pilot reveals rather than prerequisites for running it. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Iterating on pilot findings necessarily comes after the pilot, and full documentation with runbooks or formal managerial sign-off are rollout activities that depend on what the pilot reveals rather than prerequisites for running it. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. Before a pilot can begin, the team must identify which workflow steps benefit from AI-assisted tooling and which must stay under human authority, because this design decision defines what Claude Code is allowed to do. That analysis then drives the technical setup: configuring the project-scope MCP servers, permissions, subagents, and persistent project context (such as CLAUDE.md) so the tool actually operates within those boundaries. The wording of option E matches the intended solution."
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
    "explanation": "A federated model lets each of the 14 teams author Skills for its own domain, then routes those Skills through a central review and publish gate before release. Authorship stays close to the people who own the coding standards, review checklists, and postmortem templates, so no single group becomes a bottleneck. The central gate checks quality, consistency, and security before anything reaches 280 developers, which keeps the published set trustworthy. A single platform team writing every Skill would recreate the bottleneck leadership wants to avoid. Fully decentralized or per-developer authorship with no review would scale, but nothing would ensure the Skills are accurate or consistent.\n\nStudy takeaway: federated authorship across the 14 teams with a central review and publish gate. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Fully decentralized or per-developer authorship with no review would scale, but nothing would ensure the Skills are accurate or consistent. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Fully decentralized or per-developer authorship with no review would scale, but nothing would ensure the Skills are accurate or consistent. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Fully decentralized or per-developer authorship with no review would scale, but nothing would ensure the Skills are accurate or consistent. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. A federated model lets each of the 14 teams author Skills for its own domain, then routes those Skills through a central review and publish gate before release. Authorship stays close to the people who own the coding standards, review checklists, and postmortem templates, so no single group becomes a bottleneck. The wording of option D matches the intended solution."
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
    "explanation": "Packaging procedural knowledge that needs no live external-system calls is what makes a Skill the right fit. A Skill bundles instructions, templates, and embedded examples that Claude loads on demand, so a fixed authoring procedure for regulatory filings maps directly onto that format and travels unchanged across claude.ai, the API, and Claude Code. An MCP server exists to connect Claude to external tools and data sources at runtime, which this capability does not require. Querying a live database or authenticating against a corporate identity provider would point toward MCP instead. Command-line access does not decide the question either, since Claude Code supports both Skills and MCP servers.\n\nStudy takeaway: The capability is procedural knowledge with no live external-system calls required.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Command-line access does not decide the question either, since Claude Code supports both Skills and MCP servers. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Command-line access does not decide the question either, since Claude Code supports both Skills and MCP servers. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Command-line access does not decide the question either, since Claude Code supports both Skills and MCP servers. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Packaging procedural knowledge that needs no live external-system calls is what makes a Skill the right fit. A Skill bundles instructions, templates, and embedded examples that Claude loads on demand, so a fixed authoring procedure for regulatory filings maps directly onto that format and travels unchanged across claude.ai, the API, and Claude Code. The wording of option D matches the intended solution."
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
    "explanation": "A recurring specialized task such as database schema review is what most directly justifies a dedicated project subagent in Claude Code. A subagent packages a focused system prompt, a restricted set of tool permissions, and its own model selection into a reusable definition stored with the project, so the same expert behavior is applied consistently across many sessions and team members. Narrow tool access also limits risk, since a reviewer that only reads schemas does not need write or shell permissions. One-off questions, purely general-purpose work, and a desire for a single generic prompt gain nothing from that configuration and are better handled by Claude Code's default capabilities.\n\nStudy takeaway: The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. A recurring specialized task such as database schema review is what most directly justifies a dedicated project subagent in Claude Code. A subagent packages a focused system prompt, a restricted set of tool permissions, and its own model selection into a reusable definition stored with the project, so the same expert behavior is applied consistently across many sessions and team members. The wording of option A matches the intended solution.",
      "B": "Not selected. One-off questions, purely general-purpose work, and a desire for a single generic prompt gain nothing from that configuration and are better handled by Claude Code's default capabilities. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. One-off questions, purely general-purpose work, and a desire for a single generic prompt gain nothing from that configuration and are better handled by Claude Code's default capabilities. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. One-off questions, purely general-purpose work, and a desire for a single generic prompt gain nothing from that configuration and are better handled by Claude Code's default capabilities. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Project scope keeps team-shared MCP server definitions and permission rules in the repository, allowing the team to review, version, and distribute them consistently. Managed configuration is appropriate for security-critical settings because it is centrally enforced and cannot be weakened or overridden by individual users. Local and user scopes are intended for individual machine or personal preferences, not organization-wide security controls or shared team configuration.\n\nStudy takeaway: Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.; Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Project scope keeps team-shared MCP server definitions and permission rules in the repository, allowing the team to review, version, and distribute them consistently. Managed configuration is appropriate for security-critical settings because it is centrally enforced and cannot be weakened or overridden by individual users. The wording of option A matches the intended solution.",
      "B": "Correct. Project scope keeps team-shared MCP server definitions and permission rules in the repository, allowing the team to review, version, and distribute them consistently. Managed configuration is appropriate for security-critical settings because it is centrally enforced and cannot be weakened or overridden by individual users. The wording of option B matches the intended solution.",
      "C": "Not selected. Local and user scopes are intended for individual machine or personal preferences, not organization-wide security controls or shared team configuration. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Local and user scopes are intended for individual machine or personal preferences, not organization-wide security controls or shared team configuration. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. Local and user scopes are intended for individual machine or personal preferences, not organization-wide security controls or shared team configuration. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Posting Claude Code's review as a structured comment while a human keeps the approval decision is the design that delivers AI-assisted review without removing human oversight. In this setup Claude Code acts as an advisory reviewer, surfacing potential bugs, style issues, and risks so the human reviewer can make a faster, better-informed decision. Branch-protection rules stay in place, so a pull request still cannot merge without the required human approval. The alternatives either bypass approval through automatic merging, disable branch protection, or silently delete pull requests. Each of those removes the human gate the team explicitly wants to keep and undermines transparency and accountability in the workflow.\n\nStudy takeaway: Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer retains the approval decision under the existing branch-protection rules.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Posting Claude Code's review as a structured comment while a human keeps the approval decision is the design that delivers AI-assisted review without removing human oversight. In this setup Claude Code acts as an advisory reviewer, surfacing potential bugs, style issues, and risks so the human reviewer can make a faster, better-informed decision. The wording of option A matches the intended solution.",
      "B": "Not selected. Each of those removes the human gate the team explicitly wants to keep and undermines transparency and accountability in the workflow. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Each of those removes the human gate the team explicitly wants to keep and undermines transparency and accountability in the workflow. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Each of those removes the human gate the team explicitly wants to keep and undermines transparency and accountability in the workflow. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A project-scoped CLAUDE.md stores durable instructions such as coding conventions, repository structure, architectural decisions, and preferred workflows alongside the codebase. Claude Code can load this context automatically for each session, eliminating repeated manual explanations while giving all engineers a consistent baseline. Committing the file to the repository also lets the guidance evolve through normal version control and review. Retyping the information only reduces the symptom, whereas persistent project context removes the repeated task.\n\nStudy takeaway: Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Retyping the information only reduces the symptom, whereas persistent project context removes the repeated task. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. A project-scoped CLAUDE.md stores durable instructions such as coding conventions, repository structure, architectural decisions, and preferred workflows alongside the codebase. Claude Code can load this context automatically for each session, eliminating repeated manual explanations while giving all engineers a consistent baseline. The wording of option B matches the intended solution.",
      "C": "Not selected. Retyping the information only reduces the symptom, whereas persistent project context removes the repeated task. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Retyping the information only reduces the symptom, whereas persistent project context removes the repeated task. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Packaging the disclosure procedure as a Claude Skill owned by the compliance team, and referencing that same Skill from all three workflow integrations, keeps one authoritative version of the procedure under the control of the people who author it. When regulators issue an update, compliance revises the Skill once, and customer service, sales, and onboarding all pick up the change without separate redeployments. Embedding the text in each system prompt, or letting each team rewrite it, creates copies that drift and must be updated in several places four to six times a year. A shared retrieval corpus returns fragments based on relevance, so it does not guarantee that the complete procedure is applied identically in every workflow.\n\nStudy takeaway: Reference the same Claude Skill from all three of the workflow integrations directly.; Package the procedure as a Claude Skill owned by the compliance team directly.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Packaging the disclosure procedure as a Claude Skill owned by the compliance team, and referencing that same Skill from all three workflow integrations, keeps one authoritative version of the procedure under the control of the people who author it. When regulators issue an update, compliance revises the Skill once, and customer service, sales, and onboarding all pick up the change without separate redeployments. The wording of option A matches the intended solution.",
      "B": "Not selected. Packaging the disclosure procedure as a Claude Skill owned by the compliance team, and referencing that same Skill from all three workflow integrations, keeps one authoritative version of the procedure under the control of the people who author it. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Packaging the disclosure procedure as a Claude Skill owned by the compliance team, and referencing that same Skill from all three workflow integrations, keeps one authoritative version of the procedure under the control of the people who author it. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Packaging the disclosure procedure as a Claude Skill owned by the compliance team, and referencing that same Skill from all three workflow integrations, keeps one authoritative version of the procedure under the control of the people who author it. Review the full rationale for why this is less appropriate to the question.",
      "E": "Correct. Packaging the disclosure procedure as a Claude Skill owned by the compliance team, and referencing that same Skill from all three workflow integrations, keeps one authoritative version of the procedure under the control of the people who author it. When regulators issue an update, compliance revises the Skill once, and customer service, sales, and onboarding all pick up the change without separate redeployments. The wording of option E matches the intended solution."
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
    "explanation": "Inspecting the active permission rules across every settings scope is the right first step, because Claude Code merges rules from managed policy, command-line arguments, local project settings, shared project settings, and user settings in a defined order of precedence. A deny rule in a higher-priority scope, such as an organization's managed settings, overrides an allow rule the engineer may have added at the user or project level, which is a common reason an expected action is blocked. Tracing the denial to the specific rule and its source shows whether the block is an intentional policy or a misconfiguration that can be amended narrowly. Retrying the action changes nothing, since the same rules are evaluated each time. Disabling permissions or granting unrestricted Bash access removes safeguards wholesale instead of correcting the one rule involved.\n\nStudy takeaway: Inspect the active permission rules across all scopes (managed, command-line, local, project, user) to identify which rule is denying the action and confirm whether it should be amended or whether the action should remain denied.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Disabling permissions or granting unrestricted Bash access removes safeguards wholesale instead of correcting the one rule involved. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Disabling permissions or granting unrestricted Bash access removes safeguards wholesale instead of correcting the one rule involved. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Inspecting the active permission rules across every settings scope is the right first step, because Claude Code merges rules from managed policy, command-line arguments, local project settings, shared project settings, and user settings in a defined order of precedence. A deny rule in a higher-priority scope, such as an organization's managed settings, overrides an allow rule the engineer may have added at the user or project level, which is a common reason an expected action is blocked. The wording of option C matches the intended solution.",
      "D": "Not selected. Disabling permissions or granting unrestricted Bash access removes safeguards wholesale instead of correcting the one rule involved. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Reproducing the issue with a minimal reproduction case and forming a hypothesis about the likely root cause are the diagnostic steps that must happen before a targeted fix is applied. A minimal reproduction confirms that the reported symptom is real and consistent, and stripping away unrelated variables makes the failure easier to observe and reason about. A hypothesis grounded in the symptom, the Claude Code configuration, and recent changes then gives the fix a specific target, so it addresses the cause rather than guessing at surface effects. Documenting the root cause in the runbook and notifying users that a fix is deployed are follow-up activities that only make sense after the fix is verified. Opening a permanent change request is a process formality rather than a diagnostic step and does not help identify what is actually wrong.\n\nStudy takeaway: Form a hypothesis about the most likely root cause given the symptom, configuration, and recent changes.; Reproduce the issue with a minimal reproduction case to confirm the symptom and isolate variables.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Opening a permanent change request is a process formality rather than a diagnostic step and does not help identify what is actually wrong. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Opening a permanent change request is a process formality rather than a diagnostic step and does not help identify what is actually wrong. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Reproducing the issue with a minimal reproduction case and forming a hypothesis about the likely root cause are the diagnostic steps that must happen before a targeted fix is applied. A minimal reproduction confirms that the reported symptom is real and consistent, and stripping away unrelated variables makes the failure easier to observe and reason about. The wording of option C matches the intended solution.",
      "D": "Correct. Reproducing the issue with a minimal reproduction case and forming a hypothesis about the likely root cause are the diagnostic steps that must happen before a targeted fix is applied. A minimal reproduction confirms that the reported symptom is real and consistent, and stripping away unrelated variables makes the failure easier to observe and reason about. The wording of option D matches the intended solution.",
      "E": "Not selected. Opening a permanent change request is a process formality rather than a diagnostic step and does not help identify what is actually wrong. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Managed configuration sits at the top of Claude Code's settings hierarchy, so security and compliance policies deployed this way apply to every team member and cannot be overridden by project or user settings. Project-scope configuration files, such as shared MCP server definitions and tool permissions committed alongside the repository, give every engineer the same tooling and permission boundaries through version control. Together these layers make the environment both secure and consistent. Storing a shared API key in a committed settings file exposes the credential in source control, which is a security risk rather than a safeguard. Personal model choices and editor themes are individual preferences that do nothing to establish team-wide consistency or security.\n\nStudy takeaway: applying managed configuration to enforce non-overridable security and compliance policies across all team members; committing shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Managed configuration sits at the top of Claude Code's settings hierarchy, so security and compliance policies deployed this way apply to every team member and cannot be overridden by project or user settings. Project-scope configuration files, such as shared MCP server definitions and tool permissions committed alongside the repository, give every engineer the same tooling and permission boundaries through version control. The wording of option A matches the intended solution.",
      "B": "Correct. Managed configuration sits at the top of Claude Code's settings hierarchy, so security and compliance policies deployed this way apply to every team member and cannot be overridden by project or user settings. Project-scope configuration files, such as shared MCP server definitions and tool permissions committed alongside the repository, give every engineer the same tooling and permission boundaries through version control. The wording of option B matches the intended solution.",
      "C": "Not selected. Personal model choices and editor themes are individual preferences that do nothing to establish team-wide consistency or security. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Personal model choices and editor themes are individual preferences that do nothing to establish team-wide consistency or security. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. Personal model choices and editor themes are individual preferences that do nothing to establish team-wide consistency or security. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Project scope is the Claude Code configuration level designed for team-wide consistency, because its files live inside the repository and are committed to version control. MCP servers defined in.mcp.json, permission rules in.claude/settings.json, and shared context in CLAUDE.md are picked up automatically by every engineer who clones or pulls the monorepo. Changes are reviewed and versioned like any other code, so the whole team stays aligned without extra tooling. User scope lives in each engineer's home directory and only applies to that individual, so keeping it consistent depends on manual syncing that can easily drift. Local scope is personal and uncommitted, so it cannot distribute anything to the rest of the team.\n\nStudy takeaway: project scope, with the configuration committed to the repository so every engineer working in the project picks up the same MCP servers, permissions, and context. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Local scope is personal and uncommitted, so it cannot distribute anything to the rest of the team. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Local scope is personal and uncommitted, so it cannot distribute anything to the rest of the team. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Project scope is the Claude Code configuration level designed for team-wide consistency, because its files live inside the repository and are committed to version control. MCP servers defined in.mcp.json, permission rules in.claude/settings.json, and shared context in CLAUDE.md are picked up automatically by every engineer who clones or pulls the monorepo. The wording of option C matches the intended solution.",
      "D": "Not selected. Local scope is personal and uncommitted, so it cannot distribute anything to the rest of the team. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A centrally managed, non-overridable configuration enforces the security-hardening flag across all engineers and prevents local or project-level settings from changing it. This scope is controlled by the organization rather than by individual users or repositories, providing a reliable policy boundary. User and project configuration files can be edited by engineers, while a CI/CD-only environment variable does not prevent disabling the flag during local development.\n\nStudy takeaway: Managed configuration applied centrally and marked as non-overridable. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. User and project configuration files can be edited by engineers, while a CI/CD-only environment variable does not prevent disabling the flag during local development. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. User and project configuration files can be edited by engineers, while a CI/CD-only environment variable does not prevent disabling the flag during local development. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. A centrally managed, non-overridable configuration enforces the security-hardening flag across all engineers and prevents local or project-level settings from changing it. This scope is controlled by the organization rather than by individual users or repositories, providing a reliable policy boundary. The wording of option C matches the intended solution.",
      "D": "Not selected. User and project configuration files can be edited by engineers, while a CI/CD-only environment variable does not prevent disabling the flag during local development. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A database MCP server uses least-privilege access when it defaults to read-only credentials and exposes only read-only tools to the subagent. Explicit human confirmation creates a separate approval boundary before any write, update, or delete operation can affect production data. This layered design limits accidental changes while preserving the ability to investigate and act when authorized. Fully privileged credentials, unrestricted tools, or absent confirmation gates remove these essential safeguards.\n\nStudy takeaway: Configure the database MCP server with a read-only credential by default, restrict the subagent’s tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Fully privileged credentials, unrestricted tools, or absent confirmation gates remove these essential safeguards. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Fully privileged credentials, unrestricted tools, or absent confirmation gates remove these essential safeguards. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Fully privileged credentials, unrestricted tools, or absent confirmation gates remove these essential safeguards. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. A database MCP server uses least-privilege access when it defaults to read-only credentials and exposes only read-only tools to the subagent. Explicit human confirmation creates a separate approval boundary before any write, update, or delete operation can affect production data. The wording of option D matches the intended solution."
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
    "explanation": "User-scope configuration stores personal preferences that should follow an individual engineer across projects and repositories. Editor theme settings and a preferred Claude response language are user- specific choices, so they belong in that scope rather than being tied to one project. Company-wide feature restrictions require an organization or enterprise policy scope, while shared MCP endpoints belong in repository or project configuration. API authentication keys should be managed through secure secret storage or environment-based credential mechanisms, not ordinary user configuration. \n\nStudy takeaway: Persisting personal editor theme preferences that follow an engineer across projects.; Saving a preferred Claude response language that applies to all repositories the engineer uses.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. User-scope configuration stores personal preferences that should follow an individual engineer across projects and repositories. Editor theme settings and a preferred Claude response language are user- specific choices, so they belong in that scope rather than being tied to one project. The wording of option A matches the intended solution.",
      "B": "Correct. User-scope configuration stores personal preferences that should follow an individual engineer across projects and repositories. Editor theme settings and a preferred Claude response language are user- specific choices, so they belong in that scope rather than being tied to one project. The wording of option B matches the intended solution.",
      "C": "Not selected. API authentication keys should be managed through secure secret storage or environment-based credential mechanisms, not ordinary user configuration. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. API authentication keys should be managed through secure secret storage or environment-based credential mechanisms, not ordinary user configuration. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. API authentication keys should be managed through secure secret storage or environment-based credential mechanisms, not ordinary user configuration. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Identify team workflows, security boundaries, and ownership decisions first, because these requirements determine what the standardized configuration must control centrally versus at the project level. The project-scope baseline can then define the required MCP servers, permission rules, and subagents consistently for the pilot group. Training the entire organization, iterating from pilot feedback, and expanding rollout occur after the pilot has validated the initial configuration. \n\nStudy takeaway: Define the project-scope baseline covering Model Context Protocol (MCP) servers, permission rules, and subagents.; Identify the team workflows, security boundaries, and which decisions belong to managed configuration versus project scope.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Identify team workflows, security boundaries, and ownership decisions first, because these requirements determine what the standardized configuration must control centrally versus at the project level. The project-scope baseline can then define the required MCP servers, permission rules, and subagents consistently for the pilot group. The wording of option A matches the intended solution.",
      "B": "Not selected. Training the entire organization, iterating from pilot feedback, and expanding rollout occur after the pilot has validated the initial configuration. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Training the entire organization, iterating from pilot feedback, and expanding rollout occur after the pilot has validated the initial configuration. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Identify team workflows, security boundaries, and ownership decisions first, because these requirements determine what the standardized configuration must control centrally versus at the project level. The project-scope baseline can then define the required MCP servers, permission rules, and subagents consistently for the pilot group. The wording of option D matches the intended solution.",
      "E": "Not selected. Training the entire organization, iterating from pilot feedback, and expanding rollout occur after the pilot has validated the initial configuration. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Tool Search defers MCP tool definitions until they are needed, rather than placing definitions for every available tool into the initial context. This preserves access to the full set of servers and tools while reducing the context consumed at session startup. Disabling servers removes capabilities, while adding instructions or more servers increases context pressure instead of addressing the tool-definition overhead.\n\nStudy takeaway: Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Tool Search defers MCP tool definitions until they are needed, rather than placing definitions for every available tool into the initial context. This preserves access to the full set of servers and tools while reducing the context consumed at session startup. The wording of option A matches the intended solution.",
      "B": "Not selected. Disabling servers removes capabilities, while adding instructions or more servers increases context pressure instead of addressing the tool-definition overhead. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Disabling servers removes capabilities, while adding instructions or more servers increases context pressure instead of addressing the tool-definition overhead. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Disabling servers removes capabilities, while adding instructions or more servers increases context pressure instead of addressing the tool-definition overhead. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Project-scope.claude/settings.json and.mcp.json files committed to the repository provide a version- controlled, shared source of MCP server definitions. Every engineer who clones or updates the repository receives the same configuration automatically, and changes are reviewed and synchronized through normal source-control workflows. Personal home-directory settings and workstation environment variables are local to each engineer and require separate manual maintenance.\n\nStudy takeaway: project-scope.claude/settings.json and.mcp.json files committed to the repository. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Personal home-directory settings and workstation environment variables are local to each engineer and require separate manual maintenance. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Personal home-directory settings and workstation environment variables are local to each engineer and require separate manual maintenance. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Project-scope.claude/settings.json and.mcp.json files committed to the repository provide a version- controlled, shared source of MCP server definitions. Every engineer who clones or updates the repository receives the same configuration automatically, and changes are reviewed and synchronized through normal source-control workflows. The wording of option C matches the intended solution.",
      "D": "Not selected. Personal home-directory settings and workstation environment variables are local to each engineer and require separate manual maintenance. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Many configured MCP servers can add substantial tool-definition text to a Claude Code session before the engineer sends any message. Without Tool Search, Claude loads the definitions for all available tools into the initial context, and a large collection of servers can therefore consume tens of thousands of tokens. Tool Search reduces this overhead by making tool definitions available on demand rather than placing every definition in the prompt upfront. Keyboard, display, and font settings do not affect model context usage.\n\nStudy takeaway: Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Keyboard, display, and font settings do not affect model context usage. Review the full rationale for why this is less appropriate to the question.",
      "B": "Correct. Many configured MCP servers can add substantial tool-definition text to a Claude Code session before the engineer sends any message. Without Tool Search, Claude loads the definitions for all available tools into the initial context, and a large collection of servers can therefore consume tens of thousands of tokens. The wording of option B matches the intended solution.",
      "C": "Not selected. Keyboard, display, and font settings do not affect model context usage. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Keyboard, display, and font settings do not affect model context usage. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Claude Code resolves configuration with managed settings at the top, followed by command-line arguments, then local project settings, shared project settings, and finally user settings. Managed settings come from organizational policy and cannot be overridden, so administrators can enforce security and compliance rules. Command-line arguments apply temporary overrides for a single session. Local settings in.claude/settings.local.json hold personal, uncommitted preferences for one repository and override the team-shared.claude/settings.json. User settings in ~/.claude/settings.json act as the broadest personal defaults, so they sit at the bottom. Orderings that place user or local settings above managed settings are wrong because they would let individuals bypass enforced policy. \n\nStudy takeaway: Managed → command-line arguments → local → project → user. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Orderings that place user or local settings above managed settings are wrong because they would let individuals bypass enforced policy. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Orderings that place user or local settings above managed settings are wrong because they would let individuals bypass enforced policy. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Claude Code resolves configuration with managed settings at the top, followed by command-line arguments, then local project settings, shared project settings, and finally user settings. Managed settings come from organizational policy and cannot be overridden, so administrators can enforce security and compliance rules. The wording of option C matches the intended solution.",
      "D": "Not selected. Orderings that place user or local settings above managed settings are wrong because they would let individuals bypass enforced policy. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Narrowly scoped Bash tool patterns enforce least-privilege access by permitting only the commands required for approved workflows. Explicit deny rules add protection for sensitive operations even when broader allow patterns might otherwise match. This reduces the risk of accidental destructive commands, credential exposure, or unauthorized system changes across projects. Unrestricted Bash access gives every developer a broad execution capability that is inappropriate for an enterprise-wide rollout. \n\nStudy takeaway: Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Unrestricted Bash access gives every developer a broad execution capability that is inappropriate for an enterprise-wide rollout. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Unrestricted Bash access gives every developer a broad execution capability that is inappropriate for an enterprise-wide rollout. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Narrowly scoped Bash tool patterns enforce least-privilege access by permitting only the commands required for approved workflows. Explicit deny rules add protection for sensitive operations even when broader allow patterns might otherwise match. The wording of option C matches the intended solution.",
      "D": "Not selected. Unrestricted Bash access gives every developer a broad execution capability that is inappropriate for an enterprise-wide rollout. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Subagents that can read relevant repository files and use code-search tools generate documentation from the current implementation rather than from general model knowledge. This grounds descriptions, APIs, and examples in the code the team actually maintains. Sending the resulting changes through the normal review workflow preserves human oversight and established quality controls before publication.\n\nStudy takeaway: Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team’s normal review workflow.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Sending the resulting changes through the normal review workflow preserves human oversight and established quality controls before publication. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Sending the resulting changes through the normal review workflow preserves human oversight and established quality controls before publication. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Subagents that can read relevant repository files and use code-search tools generate documentation from the current implementation rather than from general model knowledge. This grounds descriptions, APIs, and examples in the code the team actually maintains. The wording of option C matches the intended solution.",
      "D": "Not selected. Sending the resulting changes through the normal review workflow preserves human oversight and established quality controls before publication. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "The MCP server listing command confirms whether the newly added server is actually registered and available to Claude Code. If it is registered but does not appear in the current session, reconnecting or restarting the session loads the updated configuration. This targeted check distinguishes a registration problem from a session-refresh issue without disrupting other configured tools.\n\nStudy takeaway: Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. This targeted check distinguishes a registration problem from a session-refresh issue without disrupting other configured tools. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. This targeted check distinguishes a registration problem from a session-refresh issue without disrupting other configured tools. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. The MCP server listing command confirms whether the newly added server is actually registered and available to Claude Code. If it is registered but does not appear in the current session, reconnecting or restarting the session loads the updated configuration. The wording of option C matches the intended solution.",
      "D": "Not selected. This targeted check distinguishes a registration problem from a session-refresh issue without disrupting other configured tools. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Scoping a customer-support agent's tools means keeping those required for its defined tasks plus those it uses frequently to avoid unnecessary hand-offs. Required tools let the agent complete its core work, and frequently used tools that reduce hand-offs directly improve resolution rates and user experience within the agent's actual role. Tools that are only occasionally useful for unrelated work, or that are kept for speculative future needs, widen the decision space and the attack surface, which can degrade tool selection and increase the risk of misuse. A strict \"required only\" approach goes too far, because it forces avoidable escalations for routine, recurring needs. A well-scoped configuration balances least privilege against practical, regular use.\n\nStudy takeaway: Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand- offs.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. A well-scoped configuration balances least privilege against practical, regular use. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. A well-scoped configuration balances least privilege against practical, regular use. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Scoping a customer-support agent's tools means keeping those required for its defined tasks plus those it uses frequently to avoid unnecessary hand-offs. Required tools let the agent complete its core work, and frequently used tools that reduce hand-offs directly improve resolution rates and user experience within the agent's actual role. The wording of option C matches the intended solution.",
      "D": "Not selected. A well-scoped configuration balances least privilege against practical, regular use. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "A zero-shot prompt that lists each category with its description and defines the required output format is the right starting point. When categories are well-defined and clearly described, the model has everything it needs to classify directly, so the simplest technique should be tried first and only made more complex if evaluation shows errors. Prompt chaining through a coarse grouping step adds latency, cost, and extra failure points without evidence that a single step falls short. Chain-of-thought suits multi-step reasoning, not a straightforward routing decision. Omitting descriptions forces the model to guess the label set, which produces inconsistent outputs.\n\nStudy takeaway: a zero-shot prompt that specifies the categories with their descriptions and the required output format. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Omitting descriptions forces the model to guess the label set, which produces inconsistent outputs. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Omitting descriptions forces the model to guess the label set, which produces inconsistent outputs. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. A zero-shot prompt that lists each category with its description and defines the required output format is the right starting point. When categories are well-defined and clearly described, the model has everything it needs to classify directly, so the simplest technique should be tried first and only made more complex if evaluation shows errors. The wording of option C matches the intended solution.",
      "D": "Not selected. Omitting descriptions forces the model to guess the label set, which produces inconsistent outputs. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Control A, an outbound tool allow-list with destination restrictions and per-call review, addresses unauthorized data leaving the system through tool invocations, because it limits which tools can be called, where their output can be sent, and lets reviewers inspect each call before data is transmitted. Control B, scoring responses against a stable adversarial evaluation set after each model-version change, addresses undetected behavioral regression, because a fixed benchmark lets the team compare results across versions and spot degraded safety or quality behavior. Swapping the pairings fails: an evaluation set measures behavior but does not block data from leaving through tools, and an allow-list constrains actions but reveals nothing about whether a new model version behaves worse. Prompt injection from retrieved content is mainly mitigated by treating retrieved data as untrusted input and separating it from instructions, not by an outbound allow-list alone.\n\nStudy takeaway: Control B -> undetected behavioral regression following a model change; Control A -> unauthorized data leaving the system through tool invocations. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Control A, an outbound tool allow-list with destination restrictions and per-call review, addresses unauthorized data leaving the system through tool invocations, because it limits which tools can be called, where their output can be sent, and lets reviewers inspect each call before data is transmitted. Control B, scoring responses against a stable adversarial evaluation set after each model-version change, addresses undetected behavioral regression, because a fixed benchmark lets the team compare results across versions and spot degraded safety or quality behavior. The wording of option A matches the intended solution.",
      "B": "Not selected. Prompt injection from retrieved content is mainly mitigated by treating retrieved data as untrusted input and separating it from instructions, not by an outbound allow-list alone. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Control A, an outbound tool allow-list with destination restrictions and per-call review, addresses unauthorized data leaving the system through tool invocations, because it limits which tools can be called, where their output can be sent, and lets reviewers inspect each call before data is transmitted. Control B, scoring responses against a stable adversarial evaluation set after each model-version change, addresses undetected behavioral regression, because a fixed benchmark lets the team compare results across versions and spot degraded safety or quality behavior. The wording of option C matches the intended solution.",
      "D": "Not selected. Prompt injection from retrieved content is mainly mitigated by treating retrieved data as untrusted input and separating it from instructions, not by an outbound allow-list alone. Review the full rationale for why this is less appropriate to the question.",
      "E": "Not selected. Prompt injection from retrieved content is mainly mitigated by treating retrieved data as untrusted input and separating it from instructions, not by an outbound allow-list alone. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Risk-stratified sampling concentrates limited reviewer capacity where errors are most likely or most costly, so every low-confidence and high-impact output gets human review. A smaller random sample of high-confidence routine outputs is still checked, which catches calibration drift and systematic errors the model is confidently making. Universal review is ruled out because the volume makes it infeasible, and inverse sampling wastes effort on the safest outputs while letting the riskiest ones through unchecked. Relying only on user complaints is reactive, surfacing problems after harm has occurred and missing errors users never notice or report.\n\nStudy takeaway: risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Correct. Risk-stratified sampling concentrates limited reviewer capacity where errors are most likely or most costly, so every low-confidence and high-impact output gets human review. A smaller random sample of high-confidence routine outputs is still checked, which catches calibration drift and systematic errors the model is confidently making. The wording of option A matches the intended solution.",
      "B": "Not selected. Relying only on user complaints is reactive, surfacing problems after harm has occurred and missing errors users never notice or report. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Relying only on user complaints is reactive, surfacing problems after harm has occurred and missing errors users never notice or report. Review the full rationale for why this is less appropriate to the question.",
      "D": "Not selected. Relying only on user complaints is reactive, surfacing problems after harm has occurred and missing errors users never notice or report. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Configuration Y is the better recommendation because the deployment's stated priorities rank accuracy above latency, and Configuration X gives up measured accuracy to gain speed. When priorities are explicitly ordered, a tradeoff that sacrifices the top priority for the secondary one goes against the requirements, however large the secondary gain. This matters especially for a compliance assistant, where wrong answers carry real risk. The options favoring X rely on general rules about latency outweighing accuracy, or treat a measured 2 percent drop as noise. Both set aside the deployment's own stated ranking and the evidence of a regression.\n\nStudy takeaway: Configuration Y, because the deployment’s stated priority is accuracy first, and Configuration X reduces measured accuracy.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. Both set aside the deployment's own stated ranking and the evidence of a regression. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. Both set aside the deployment's own stated ranking and the evidence of a regression. Review the full rationale for why this is less appropriate to the question.",
      "C": "Not selected. Both set aside the deployment's own stated ranking and the evidence of a regression. Review the full rationale for why this is less appropriate to the question.",
      "D": "Correct. Configuration Y is the better recommendation because the deployment's stated priorities rank accuracy above latency, and Configuration X gives up measured accuracy to gain speed. When priorities are explicitly ordered, a tradeoff that sacrifices the top priority for the secondary one goes against the requirements, however large the secondary gain. The wording of option D matches the intended solution."
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
    "explanation": "Consistent escalation depends on criteria that are objective, observable, and tied to the actual risk of an automated decision: a confidence threshold below a defined level, high-impact decision categories, ambiguity flags raised by content classifiers, and the user's explicit request for review. A defined confidence threshold catches cases where the model itself is uncertain. High-impact categories make sure consequential decisions get human oversight even when confidence is high. Classifier-based ambiguity flags and explicit user requests add independent signals that the threshold alone might miss. Options built on case age, department, seniority, past complaints, or an engineer's personal preference rely on factors unrelated to decision quality or applied subjectively. That produces unpredictable and inequitable escalation outcomes.\n\nStudy takeaway: confidence threshold below a defined level, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. That produces unpredictable and inequitable escalation outcomes. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. That produces unpredictable and inequitable escalation outcomes. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Consistent escalation depends on criteria that are objective, observable, and tied to the actual risk of an automated decision: a confidence threshold below a defined level, high-impact decision categories, ambiguity flags raised by content classifiers, and the user's explicit request for review. A defined confidence threshold catches cases where the model itself is uncertain. The wording of option C matches the intended solution.",
      "D": "Not selected. That produces unpredictable and inequitable escalation outcomes. Review the full rationale for why this is less appropriate to the question."
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
    "explanation": "Disclosing AI involvement directly to end users, consistent with the organization's transparency policy, and offering a documented path to a human is the practice that best supports responsible deployment. People whose interactions are materially shaped by AI have a legitimate interest in knowing that, so they can calibrate their trust and decide how to rely on the responses. A clear escalation route to a human matters when the AI cannot resolve an issue, makes an error, or handles a sensitive situation. Limiting disclosure to internal staff or treating the AI's role as confidential leaves users uninformed. A single notice buried in the signup terms of service rarely gives meaningful awareness at the moment of interaction.\n\nStudy takeaway: Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.. The question tests the distinction between the stated architecture requirement and alternatives that are not the best fit for that requirement.",
    "optionExplanations": {
      "A": "Not selected. A single notice buried in the signup terms of service rarely gives meaningful awareness at the moment of interaction. Review the full rationale for why this is less appropriate to the question.",
      "B": "Not selected. A single notice buried in the signup terms of service rarely gives meaningful awareness at the moment of interaction. Review the full rationale for why this is less appropriate to the question.",
      "C": "Correct. Disclosing AI involvement directly to end users, consistent with the organization's transparency policy, and offering a documented path to a human is the practice that best supports responsible deployment. People whose interactions are materially shaped by AI have a legitimate interest in knowing that, so they can calibrate their trust and decide how to rely on the responses. The wording of option C matches the intended solution.",
      "D": "Not selected. A single notice buried in the signup terms of service rarely gives meaningful awareness at the moment of interaction. Review the full rationale for why this is less appropriate to the question."
    },
    "reference": "CCAR-P practice PDF, Q158 (third-party answer key)",
    "tags": [
      "architecture",
      "ccar-p",
      "pdf-question"
    ]
  }
];
