/* Original AZ-900 practice content. IDs and array order are stable for local study history.
 * Independently audited against Microsoft Learn concepts; no runtime content generators.
 */
window.COURSE_QUESTIONS = [
  {
    "id": "AZ900-CLOU-001",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud service models",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A team wants Microsoft to manage the operating system and runtime while developers deploy web application code. Which model fits?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a service (SaaS)"
      },
      {
        "id": "D",
        "text": "Private cloud"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The developers are supplying application code, but Microsoft is maintaining the OS and runtime that execute it. That division is PaaS. A web team can deploy a new release without patching the platform underneath it. With IaaS, that same team would also maintain the guest OS. With SaaS, it would use a finished application rather than deploy its own code.\n\nPlatform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS.\n\nInfrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
    "optionExplanations": {
      "A": "Incorrect. Infrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
      "B": "Correct. Platform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS.",
      "C": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.",
      "D": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack."
    },
    "keyClue": "Microsoft manages the OS and runtime; developers deploy code.",
    "mentalModel": "IaaS: maintain OS + app\nPaaS: deploy app\nSaaS: use app",
    "examTip": "Customer code on a provider-managed platform points to PaaS.",
    "learnReference": "Microsoft Learn: Cloud service models",
    "objective": "Describe Cloud service models",
    "subtopic": "Cloud service models",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-service-models"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Platform as a service (PaaS)",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-002",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud service models",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company rents virtual machines and remains responsible for the guest operating systems. Which model is this?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a service (SaaS)"
      },
      {
        "id": "D",
        "text": "Private cloud"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Renting VMs means the company is using virtualized infrastructure. The important detail is that it still maintains the operating systems inside those machines. Microsoft maintains the physical hosts, while the company applies guest OS updates and installs its applications. Moving a VM to Azure does not turn it into a fully managed application platform.\n\nInfrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.\n\nPlatform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS.",
    "optionExplanations": {
      "A": "Correct. Infrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
      "B": "Incorrect. Platform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS.",
      "C": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.",
      "D": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack."
    },
    "keyClue": "Customer maintains the guest operating systems.",
    "mentalModel": "Microsoft: physical host\nCustomer: guest OS and software",
    "examTip": "Guest OS maintenance by the customer is a strong IaaS clue.",
    "learnReference": "Microsoft Learn: Cloud service models",
    "objective": "Describe Cloud service models",
    "subtopic": "Cloud service models",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-service-models"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Infrastructure as a service (IaaS)",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-003",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud service models",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "An organization subscribes to a complete hosted email application used through a browser. Which model applies?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a service (SaaS)"
      },
      {
        "id": "D",
        "text": "Private cloud"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The organization is subscribing to a finished email application. It is not deploying email-server code or administering a VM. The provider hosts the software and handles the application platform. Users still manage account access and use of their mailbox data. Access through a browser alone does not define SaaS; the decisive feature is consuming a complete hosted application.\n\nSoftware as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.\n\nInfrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
    "optionExplanations": {
      "A": "Incorrect. Infrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
      "B": "Incorrect. Platform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS.",
      "C": "Correct. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.",
      "D": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack."
    },
    "keyClue": "Complete hosted email application.",
    "mentalModel": "SaaS = finished application as a service",
    "examTip": "Use finished software → SaaS; deploy your own code → PaaS.",
    "learnReference": "Microsoft Learn: Cloud service models",
    "objective": "Describe Cloud service models",
    "subtopic": "Cloud service models",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-service-models"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Software as a service (SaaS)",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-004",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Capital expenditure",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A startup wants to avoid a large up-front purchase of servers and pay only for resources consumed. Which spending model is most aligned?",
    "options": [
      {
        "id": "A",
        "text": "CapEx"
      },
      {
        "id": "B",
        "text": "OpEx"
      },
      {
        "id": "C",
        "text": "Total cost of ownership"
      },
      {
        "id": "D",
        "text": "Azure reservation"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The startup wants ongoing usage charges instead of an initial hardware purchase. Those recurring service costs are OpEx. CapEx would be buying servers that become company assets. This shift can make it easier to start small, but it does not guarantee that cloud spending will always be lower. A reservation is a discount commitment; total cost of ownership is an analysis of all costs.\n\nOperating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.\n\nCapital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.",
    "optionExplanations": {
      "A": "Incorrect. Capital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.",
      "B": "Correct. Operating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.",
      "C": "Incorrect. Total cost of ownership compares all costs over a system's life, including purchase, power, facilities, staffing, maintenance, and service charges. It is an analysis method, not a billing or spending model.",
      "D": "Incorrect. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free."
    },
    "keyClue": "Avoid an up-front server purchase; pay for consumption.",
    "mentalModel": "CapEx: buy an asset\nOpEx: pay for operating a service",
    "examTip": "Buying hardware is CapEx; renting cloud capacity is generally OpEx.",
    "learnReference": "Microsoft Learn: Capital expenditure",
    "objective": "Describe Capital expenditure",
    "subtopic": "Capital expenditure",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "capital-expenditure"
    ],
    "visual": {
      "type": "capital-operating-cost",
      "highlight": "OpEx",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-005",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Scalability",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A website needs more capacity by adding identical application instances behind a load balancer. What is this called?",
    "options": [
      {
        "id": "A",
        "text": "Scale out horizontally"
      },
      {
        "id": "B",
        "text": "Scale up vertically"
      },
      {
        "id": "C",
        "text": "Elasticity"
      },
      {
        "id": "D",
        "text": "High availability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The website adds instances, so the number of servers increases. That is horizontal scaling, also called scaling out. A load balancer can share incoming requests among those servers. For example, adding two web instances can increase aggregate capacity when the app supports distribution. Increasing the CPU on one instance would instead be vertical scaling. Extra machines must still be configured correctly for reliability.\n\nHorizontal scaling changes the number of instances. Adding servers lets a load balancer distribute work across them. Each instance need not become larger; the application must support distributing its workload.\n\nVertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
    "optionExplanations": {
      "A": "Correct. Horizontal scaling changes the number of instances. Adding servers lets a load balancer distribute work across them. Each instance need not become larger; the application must support distributing its workload.",
      "B": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
      "C": "Incorrect. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
      "D": "Incorrect. High availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail."
    },
    "keyClue": "Adding identical application instances.",
    "mentalModel": "1 server → several servers",
    "examTip": "Scale out = more instances; scale up = a larger instance.",
    "learnReference": "Microsoft Learn: Scalability",
    "objective": "Describe Scalability",
    "subtopic": "Scalability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "scalability"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "Scale out horizontally",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-006",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Scalability",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A database server needs additional CPU and memory without adding another server. What approach is this?",
    "options": [
      {
        "id": "A",
        "text": "Scale out horizontally"
      },
      {
        "id": "B",
        "text": "Scale up vertically"
      },
      {
        "id": "C",
        "text": "Global reach"
      },
      {
        "id": "D",
        "text": "Elasticity"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The database needs a larger existing machine, with more processor power and memory. The server count remains one, so the change is vertical scaling or scaling up. This can help a workload that cannot easily distribute its work across multiple instances. It has size limits and may require a restart depending on the resource. Adding more servers would be a different strategy.\n\nVertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.\n\nHorizontal scaling changes the number of instances. Adding servers lets a load balancer distribute work across them. Each instance need not become larger; the application must support distributing its workload.",
    "optionExplanations": {
      "A": "Incorrect. Horizontal scaling changes the number of instances. Adding servers lets a load balancer distribute work across them. Each instance need not become larger; the application must support distributing its workload.",
      "B": "Correct. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
      "C": "Incorrect. A cloud provider operates datacenters in many geographic areas. Customers can deploy near users without building their own facilities. Location selection still needs to consider service availability and data-location requirements.",
      "D": "Incorrect. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity."
    },
    "keyClue": "Additional CPU and memory without another server.",
    "mentalModel": "Small instance → larger instance",
    "examTip": "A bigger existing machine indicates vertical scaling.",
    "learnReference": "Microsoft Learn: Scalability",
    "objective": "Describe Scalability",
    "subtopic": "Scalability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "scalability"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "Scale up vertically",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-007",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud models",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company uses Azure while keeping several systems in its own datacenter. Which cloud model is this?",
    "options": [
      {
        "id": "A",
        "text": "Public cloud"
      },
      {
        "id": "B",
        "text": "Private cloud"
      },
      {
        "id": "C",
        "text": "Hybrid cloud"
      },
      {
        "id": "D",
        "text": "SaaS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The company uses Azure public cloud resources together with systems that remain in its own datacenter. Combining those environments is hybrid cloud. Neither the Azure portion nor the on-premises portion alone describes the complete deployment. Private cloud means dedicated cloud infrastructure for one organization. SaaS answers a different question: how much of an application's management the provider handles.\n\nHybrid cloud integrates public cloud services with on-premises or private infrastructure. The organization operates across both environments. IaaS, PaaS, and SaaS instead describe the division of service management responsibilities.\n\nPublic cloud services run on infrastructure operated by a third-party provider and are offered to many customers. Azure is a public cloud; public here does not mean that everyone can access a customer's private data.",
    "optionExplanations": {
      "A": "Incorrect. Public cloud resources are provided by a third-party provider such as Microsoft Azure. Azure is the public-cloud part of this scenario, but the question describes the combined environment, including systems remaining in the company's own datacenter. Public cloud alone does not capture that combination.",
      "B": "Incorrect. A private cloud is cloud infrastructure dedicated to one organization. An internal datacenter is not automatically a private cloud. Even if the on-premises environment is a private cloud, combining it with public Azure resources describes hybrid cloud.",
      "C": "Correct. Hybrid cloud combines public cloud services with on-premises or private infrastructure. The company uses Azure and keeps systems in its own datacenter, so the combined environment crosses those deployment boundaries.",
      "D": "Incorrect. Software as a service is a service model: the provider hosts and manages a complete application, such as a hosted email service. It describes what the customer consumes and who manages it, not the public-plus-on-premises deployment arrangement."
    },
    "keyClue": "Azure plus systems in the company's datacenter.",
    "mentalModel": "On-premises systems ↔ Azure\nTogether: hybrid cloud",
    "examTip": "Public cloud + on-premises/private infrastructure = hybrid cloud.",
    "learnReference": "Microsoft Learn: Cloud models",
    "objective": "Describe Cloud models",
    "subtopic": "Cloud models",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-models"
    ],
    "visual": {
      "type": "cloud-deployment-models",
      "highlight": "Hybrid cloud",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-008",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud benefits",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which cloud benefit helps an organization deploy resources in a different geographic area without building a new datacenter?",
    "options": [
      {
        "id": "A",
        "text": "Global reach"
      },
      {
        "id": "B",
        "text": "High availability"
      },
      {
        "id": "C",
        "text": "Scale up vertically"
      },
      {
        "id": "D",
        "text": "Elasticity"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Global reach allows a business to deploy near users in other geographic areas using the cloud provider's existing facilities. The organization does not need to construct a new datacenter there. This can reduce network distance and support location requirements. It still must select a suitable region and verify that the services it needs are available there. Changing machine size or protecting resources from deletion does not create geographic reach.\n\nA cloud provider operates datacenters in many geographic areas. Customers can deploy near users without building their own facilities. Location selection still needs to consider service availability and data-location requirements.\n\nHigh availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail.",
    "optionExplanations": {
      "A": "Correct. A cloud provider operates datacenters in many geographic areas. Customers can deploy near users without building their own facilities. Location selection still needs to consider service availability and data-location requirements.",
      "B": "Incorrect. High availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail.",
      "C": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
      "D": "Incorrect. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity."
    },
    "keyClue": "Different geographic area without building a datacenter.",
    "mentalModel": "Provider regions → deploy near users",
    "examTip": "Geographic deployment using provider facilities is global reach.",
    "learnReference": "Microsoft Learn: Cloud benefits",
    "objective": "Describe Cloud benefits",
    "subtopic": "Cloud benefits",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-benefits"
    ]
  },
  {
    "id": "AZ900-CLOU-009",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "High availability",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A design goal is to keep an application usable with minimal downtime during component failures. Which term names that goal?",
    "options": [
      {
        "id": "A",
        "text": "High availability"
      },
      {
        "id": "B",
        "text": "Elasticity"
      },
      {
        "id": "C",
        "text": "Global reach"
      },
      {
        "id": "D",
        "text": "Scale up vertically"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "High availability focuses on keeping a service usable and limiting downtime. Redundant components can continue serving users when one component fails. The scenario describes this service outcome, rather than an access-control or spending decision. High availability needs deliberate application design; a cloud location alone is not a guarantee. Fault tolerance is closely related and describes how a system withstands particular failures.\n\nHigh availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail.\n\nElasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
    "optionExplanations": {
      "A": "Correct. High availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail.",
      "B": "Incorrect. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
      "C": "Incorrect. A cloud provider operates datacenters in many geographic areas. Customers can deploy near users without building their own facilities. Location selection still needs to consider service availability and data-location requirements.",
      "D": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine."
    },
    "keyClue": "Continue providing service when a component fails.",
    "mentalModel": "Redundancy + failover → less downtime",
    "examTip": "Keeping a service usable with minimal downtime indicates high availability.",
    "learnReference": "Microsoft Learn: High availability",
    "objective": "Describe High availability",
    "subtopic": "High availability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "high-availability"
    ]
  },
  {
    "id": "AZ900-CLOU-010",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Consumption-based model",
    "difficulty": "easy",
    "type": "yes-no",
    "question": "True or false: Azure consumption billing can allow an organization to pay for resources as they use them.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Consumption-based services can charge by measured use, such as executed work, compute hours, or data stored. This lets organizations obtain services without buying the underlying hardware. Different Azure services have different charge units and pricing terms. It is important to distinguish pay-for-use from a promise of no charge when an application is idle: allocated disks or provisioned compute may still cost money.",
    "optionExplanations": {
      "A": "Correct. Yes. Consumption-based services can charge by measured use, such as executed work, compute hours, or data stored. This lets organizations obtain services without buying the underlying hardware. Different Azure services have different charge units and pricing terms. It is important to distinguish pay-for-use from a promise of no charge when an application is idle: allocated disks or provisioned compute may still cost money.",
      "B": "Incorrect. The statement is true. Yes. Consumption-based services can charge by measured use, such as executed work, compute hours, or data stored. This lets organizations obtain services without buying the underlying hardware. Different Azure services have different charge units and pricing terms. It is important to distinguish pay-for-use from a promise of no charge when an application is idle: allocated disks or provisioned compute may still cost money."
    },
    "keyClue": "Can pay as resources are used.",
    "mentalModel": "Usage × price per unit → charge",
    "examTip": "Consumption pricing means usage-based charges, not automatically free idle resources.",
    "learnReference": "Microsoft Learn: Consumption-based model",
    "objective": "Describe Consumption-based model",
    "subtopic": "Consumption-based model",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "consumption-based-model"
    ]
  },
  {
    "id": "AZ900-CLOU-011",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Serverless computing",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A developer wants to run short event-driven code without managing servers. Which Azure compute choice is best?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "C",
        "text": "Azure Container Instances"
      },
      {
        "id": "D",
        "text": "Azure App Service"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The developer wants short pieces of code to run when events occur. Azure Functions provides trigger-based execution, such as processing an uploaded file or responding to a queue message. The platform handles the hosting infrastructure. VMs would give more OS control but require administration. App Service is oriented toward hosted web apps and APIs; Container Instances runs packaged containers rather than being the default event-function choice.\n\nAzure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.\n\nAzure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
    "optionExplanations": {
      "A": "Correct. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "B": "Incorrect. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "C": "Incorrect. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
      "D": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration."
    },
    "keyClue": "Short event-driven code without managing servers.",
    "mentalModel": "Event → function executes → result",
    "examTip": "An event triggers a function; a web application is hosted by App Service.",
    "learnReference": "Microsoft Learn: Serverless computing",
    "objective": "Describe Serverless computing",
    "subtopic": "Serverless computing",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "serverless-computing"
    ]
  },
  {
    "id": "AZ900-CLOU-012",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud economies of scale",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Why can cloud providers often offer lower variable costs than a single organization operating a small datacenter?",
    "options": [
      {
        "id": "A",
        "text": "They aggregate demand across many customers"
      },
      {
        "id": "B",
        "text": "They eliminate all network costs"
      },
      {
        "id": "C",
        "text": "They require customers to buy hardware"
      },
      {
        "id": "D",
        "text": "They use only private clouds"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A large provider combines demand from many customers. It can purchase equipment in bulk, share datacenter operations, and make better use of capacity than a small isolated facility. These are economies of scale. They can lower unit costs, but do not remove every charge or guarantee every customer's total bill will be smaller. Cloud customers generally rent services rather than buying the provider's servers.\n\nBulk buying and shared infrastructure operations across a large customer base can reduce per-unit cost.\n\nCloud networking still has applicable charges and operating costs. Economies of scale do not eliminate them.",
    "optionExplanations": {
      "A": "Correct. Bulk buying and shared infrastructure operations across a large customer base can reduce per-unit cost.",
      "B": "Incorrect. Cloud networking still has applicable charges and operating costs. Economies of scale do not eliminate them.",
      "C": "Incorrect. Cloud customers generally rent provider-operated services rather than purchase the physical hosts used for those services.",
      "D": "Incorrect. Azure is a public cloud serving many customers; its scale advantages do not require each customer to operate a dedicated private cloud."
    },
    "keyClue": "Aggregate demand across many customers.",
    "mentalModel": "Many customers → shared fixed costs → lower possible unit cost",
    "examTip": "Shared operations and bulk purchasing explain cloud economies of scale.",
    "learnReference": "Microsoft Learn: Cloud economies of scale",
    "objective": "Describe Cloud economies of scale",
    "subtopic": "Cloud economies of scale",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-economies-of-scale"
    ]
  },
  {
    "id": "AZ900-CLOU-013",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Shared responsibility",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "For an Azure virtual machine, who is generally responsible for patching the guest operating system?",
    "options": [
      {
        "id": "A",
        "text": "The customer"
      },
      {
        "id": "B",
        "text": "Microsoft only"
      },
      {
        "id": "C",
        "text": "The internet service provider"
      },
      {
        "id": "D",
        "text": "The hardware vendor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An Azure VM is IaaS. Microsoft maintains the hardware and host platform, while the customer is accountable for the guest operating system running inside the VM. The customer therefore must arrange OS patching, whether manually or through an automation service. Azure tools can perform updates, but using such a tool does not change the underlying responsibility model. An ISP or hardware manufacturer does not administer this customer's guest OS.\n\nThe customer manages the VM guest OS, installed software, and access configuration unless a separate managed service takes over a task. Azure can supply patching tools, but that does not remove customer accountability for an IaaS VM.",
    "optionExplanations": {
      "A": "Correct. The customer manages the VM guest OS, installed software, and access configuration unless a separate managed service takes over a task. Azure can supply patching tools, but that does not remove customer accountability for an IaaS VM.",
      "B": "Incorrect. Microsoft operates Azure's physical datacenters, host infrastructure, and virtualization platform. Platform responsibility extends further for PaaS and SaaS; customers always retain responsibilities for identities and their data.",
      "C": "Incorrect. An ISP supplies connectivity. It does not administer the guest operating system in a customer's Azure VM.",
      "D": "Incorrect. The hardware supplier manufactures or supplies equipment. It does not assume responsibility for patching the customer's VM guest OS."
    },
    "keyClue": "Azure virtual machine's guest OS.",
    "mentalModel": "Provider: host\nCustomer: guest OS",
    "examTip": "Tools can automate patching; the IaaS customer still owns guest OS responsibility.",
    "learnReference": "Microsoft Learn: Shared responsibility",
    "objective": "Describe Shared responsibility",
    "subtopic": "Shared responsibility",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "shared-responsibility"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "The customer",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-014",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Elasticity",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A retailer automatically adds capacity during a sale and removes it afterward. Which cloud concept is demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Elasticity"
      },
      {
        "id": "B",
        "text": "Scale out horizontally"
      },
      {
        "id": "C",
        "text": "Scale up vertically"
      },
      {
        "id": "D",
        "text": "High availability"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The retailer increases capacity during demand and removes it afterward. Elasticity describes that adjustment in both directions. It avoids leaving peak capacity running throughout quiet periods. Scalability is the broader ability to increase or decrease capacity; elasticity emphasizes responding to changing demand. Horizontal scaling adds instances, vertical scaling enlarges an instance, and high availability keeps service running through failures. Elasticity emphasizes automatically adjusting capacity as demand changes.\n\nElasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.\n\nHorizontal scaling changes the number of instances. Adding servers lets a load balancer distribute work across them. Each instance need not become larger; the application must support distributing its workload.",
    "optionExplanations": {
      "A": "Correct. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
      "B": "Incorrect. Horizontal scaling changes the number of instances. Adding servers lets a load balancer distribute work across them. Each instance need not become larger; the application must support distributing its workload.",
      "C": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
      "D": "Incorrect. High availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail."
    },
    "keyClue": "Automatically adds capacity during a sale and removes it afterward.",
    "mentalModel": "Demand rises → add capacity\nDemand falls → remove capacity",
    "examTip": "Capacity follows demand up and down → elasticity.",
    "learnReference": "Microsoft Learn: Elasticity",
    "objective": "Describe Elasticity",
    "subtopic": "Elasticity",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "elasticity"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "Elasticity",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-015",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud models",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A government agency operates cloud resources exclusively for its own organization. Which model best describes this?",
    "options": [
      {
        "id": "A",
        "text": "Public cloud"
      },
      {
        "id": "B",
        "text": "Private cloud"
      },
      {
        "id": "C",
        "text": "Hybrid cloud"
      },
      {
        "id": "D",
        "text": "PaaS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Exclusive use by one organization describes private cloud. The hardware can be on premises or hosted by another party; the deciding factor is dedication to that organization. Hybrid cloud would require combining public and private/on-premises environments. PaaS is a service model describing provider-managed OS and runtime, not whether a cloud is shared or dedicated.\n\nA private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack.\n\nPublic cloud services run on infrastructure operated by a third-party provider and are offered to many customers. Azure is a public cloud; public here does not mean that everyone can access a customer's private data.",
    "optionExplanations": {
      "A": "Incorrect. Public cloud services run on infrastructure operated by a third-party provider and are offered to many customers. Azure is a public cloud; public here does not mean that everyone can access a customer's private data.",
      "B": "Correct. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack.",
      "C": "Incorrect. Hybrid cloud integrates public cloud services with on-premises or private infrastructure. The organization operates across both environments. IaaS, PaaS, and SaaS instead describe the division of service management responsibilities.",
      "D": "Incorrect. Platform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS."
    },
    "keyClue": "Cloud resources exclusively for one organization.",
    "mentalModel": "Public: provider serves many customers\nPrivate: dedicated to one\nHybrid: connected environments",
    "examTip": "Dedicated cloud for one organization → private cloud.",
    "learnReference": "Microsoft Learn: Cloud models",
    "objective": "Describe Cloud models",
    "subtopic": "Cloud models",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-models"
    ],
    "visual": {
      "type": "cloud-deployment-models",
      "highlight": "Private cloud",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-CLOU-016",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Fault tolerance",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "A workload remains operational after one component fails because redundant components take over. Which design quality is this?",
    "options": [
      {
        "id": "A",
        "text": "Fault tolerance"
      },
      {
        "id": "B",
        "text": "Disaster recovery"
      },
      {
        "id": "C",
        "text": "Elasticity"
      },
      {
        "id": "D",
        "text": "Scale up vertically"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Redundant components take over after a failure, allowing the workload to continue operating. That is fault tolerance. For example, a second instance can continue handling requests if the first stops, provided state and routing support the switch. Fault tolerance is a technical ability used to support availability. It differs from disaster recovery, which restores service after a major interruption rather than necessarily avoiding interruption.\n\nFault tolerance is the ability to continue operating when a component fails, using redundant components or other safeguards. The design must remove single points of failure; merely running in a cloud is insufficient.\n\nDisaster recovery restores service after a major interruption, using backups, replication, failover, and recovery procedures. Recovery objectives describe acceptable downtime and data loss. It differs from avoiding small local interruptions.",
    "optionExplanations": {
      "A": "Correct. Fault tolerance is the ability to continue operating when a component fails, using redundant components or other safeguards. The design must remove single points of failure; merely running in a cloud is insufficient.",
      "B": "Incorrect. Disaster recovery restores service after a major interruption, using backups, replication, failover, and recovery procedures. Recovery objectives describe acceptable downtime and data loss. It differs from avoiding small local interruptions.",
      "C": "Incorrect. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
      "D": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine."
    },
    "keyClue": "Redundant components take over when one fails.",
    "mentalModel": "Component fails → replacement continues work",
    "examTip": "Surviving a component failure through redundancy is fault tolerance.",
    "learnReference": "Microsoft Learn: Fault tolerance",
    "objective": "Describe Fault tolerance",
    "subtopic": "Fault tolerance",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "fault-tolerance"
    ]
  },
  {
    "id": "AZ900-CLOU-017",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Migration",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company moves an existing on-premises application to Azure virtual machines with minimal code changes. Which service model is most likely used?",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure as a service (IaaS)"
      },
      {
        "id": "B",
        "text": "Platform as a service (PaaS)"
      },
      {
        "id": "C",
        "text": "Software as a service (SaaS)"
      },
      {
        "id": "D",
        "text": "Private cloud"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Moving the existing application to VMs preserves an operating-system environment much like its previous servers. The company can install its software and control the guest OS with relatively few application changes. This is commonly called rehosting and uses IaaS. It reduces ownership of physical infrastructure but does not remove OS maintenance. PaaS would require a compatible managed platform; SaaS would mean using a provider's finished application.\n\nInfrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
    "optionExplanations": {
      "A": "Correct. Infrastructure as a service rents computing infrastructure such as virtual machines, storage, and networking. Microsoft operates the physical datacenter and virtualization platform. The customer configures and maintains the guest operating system, applications, and data.",
      "B": "Incorrect. Platform as a service includes a provider-managed operating system and runtime. Developers deploy their own application code and manage its configuration and data. They do not patch the underlying platform OS.",
      "C": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.",
      "D": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack."
    },
    "keyClue": "Existing app moved to Azure VMs with minimal changes.",
    "mentalModel": "Physical server → Azure VM\nOS and app remain customer responsibilities",
    "examTip": "Rehosting an app on VMs usually means IaaS.",
    "learnReference": "Microsoft Learn: Migration",
    "objective": "Describe Migration",
    "subtopic": "Migration",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "migration"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Infrastructure as a service (IaaS)",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-001",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Availability Zones",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An Azure workload is configured with redundant supported instances across physical locations within one region. Which capability helps it withstand one datacenter location failing?",
    "options": [
      {
        "id": "A",
        "text": "Availability Zones"
      },
      {
        "id": "B",
        "text": "Availability Set"
      },
      {
        "id": "C",
        "text": "Azure Policy"
      },
      {
        "id": "D",
        "text": "Resource group"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Availability Zones separate infrastructure dependencies such as power, cooling, and networking within a region. A supported workload configured across zones can withstand a failure affecting one zone better than a workload in one location. Merely choosing a zonal service is not enough: the deployment must use the appropriate redundancy design. Availability Sets distribute VM hardware and update dependencies but are not the same as zone separation.\n\nAvailability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.\n\nAn Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
    "optionExplanations": {
      "A": "Correct. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
      "B": "Incorrect. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
      "C": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "D": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy."
    },
    "keyClue": "One physical datacenter fails within the region.",
    "mentalModel": "Region contains separate zones",
    "examTip": "Datacenter-level isolation within one region → Availability Zones.",
    "learnReference": "Microsoft Learn: Availability Zones",
    "objective": "Describe Availability Zones",
    "subtopic": "Availability Zones",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "availability-zones"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Availability Zones",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-002",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Availability Sets",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Several Azure VMs in one datacenter should be distributed across fault and update domains. Which feature helps?",
    "options": [
      {
        "id": "A",
        "text": "Availability Zones"
      },
      {
        "id": "B",
        "text": "Availability Set"
      },
      {
        "id": "C",
        "text": "Azure Policy"
      },
      {
        "id": "D",
        "text": "Resource group"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The explicit terms fault domain and update domain identify an Availability Set. Fault domains spread VMs across shared hardware dependencies. Update domains let Azure stagger planned updates rather than restart every VM together. This improves VM redundancy but does not place the machines across multiple zones. Azure Policy evaluates configuration standards; a resource group organizes resources without creating physical isolation.\n\nAn Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.\n\nAvailability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
    "optionExplanations": {
      "A": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
      "B": "Correct. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
      "C": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "D": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy."
    },
    "keyClue": "Fault and update domains.",
    "mentalModel": "Set: separate hardware/update groups\nZones: separate locations",
    "examTip": "Fault/update domains → Availability Set; separate datacenters → zones.",
    "learnReference": "Microsoft Learn: Availability Sets",
    "objective": "Describe Availability Sets",
    "subtopic": "Availability Sets",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "availability-sets"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Availability Set",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-003",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Regions",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "What is an Azure region?",
    "options": [
      {
        "id": "A",
        "text": "A geographic area containing interconnected Azure datacenters"
      },
      {
        "id": "B",
        "text": "A physically separate location within an Azure region"
      },
      {
        "id": "C",
        "text": "A logical container for resources that share a management lifecycle"
      },
      {
        "id": "D",
        "text": "A billing and resource-access boundary containing resource groups"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An Azure region is a geographic area containing datacenters connected through a low-latency network. Customers select regions for latency, service availability, and location needs. An Availability Zone is a physically separated location inside a region. Resource groups and subscriptions are logical management boundaries, so they can organize resources without describing where the hardware sits.\n\nAn Azure region is a geographic area with datacenters connected through a low-latency network. Supported regional services are deployed there. A region differs from an Availability Zone within it and from a logical resource-management scope.\n\nAvailability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
    "optionExplanations": {
      "A": "Correct. An Azure region is a geographic area with datacenters connected through a low-latency network. Supported regional services are deployed there. A region differs from an Availability Zone within it and from a logical resource-management scope.",
      "B": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
      "C": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "D": "Incorrect. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter."
    },
    "keyClue": "Geographic area containing Azure datacenters.",
    "mentalModel": "Region → zones/datacenters\nSubscription → resource groups",
    "examTip": "Region is geographic; resource group and subscription are logical.",
    "learnReference": "Microsoft Learn: Regions",
    "objective": "Describe Regions",
    "subtopic": "Regions",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "regions"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Azure region",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-004",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Storage",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An application needs object storage for images, backups, and unstructured data. Which service is appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Azure Blob Storage"
      },
      {
        "id": "B",
        "text": "Azure Files"
      },
      {
        "id": "C",
        "text": "Azure Queue Storage"
      },
      {
        "id": "D",
        "text": "Azure Disk Storage"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Images and backups are unstructured objects: their contents do not need a relational table or mounted filesystem to be useful. Blob Storage stores these objects with metadata and API access. A website might retrieve an image using an authorized HTTP request. Azure Files instead supports file-share access, Queue Storage exchanges messages, and Disk Storage supplies block volumes to VMs.\n\nBlob Storage stores unstructured objects such as images, videos, documents, and backups. Applications commonly access blobs using APIs or HTTP; it is different from a shared SMB or NFS filesystem.\n\nAzure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
    "optionExplanations": {
      "A": "Correct. Blob Storage stores unstructured objects such as images, videos, documents, and backups. Applications commonly access blobs using APIs or HTTP; it is different from a shared SMB or NFS filesystem.",
      "B": "Incorrect. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
      "C": "Incorrect. Queue Storage holds messages so application components can exchange work asynchronously. A producer adds a message and a worker processes it later. It is not a file share or a VM disk.",
      "D": "Incorrect. Disk Storage provides persistent block-storage volumes for Azure VMs. An operating system treats a disk as an attached device. This differs from an object repository or a general shared filesystem."
    },
    "keyClue": "Images, backups, and unstructured objects.",
    "mentalModel": "Blob: objects\nFiles: shares\nQueues: messages\nDisks: VM volumes",
    "examTip": "Unstructured objects accessed through APIs → Blob Storage.",
    "learnReference": "Microsoft Learn: Storage",
    "objective": "Describe Storage",
    "subtopic": "Storage",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "storage"
    ]
  },
  {
    "id": "AZ900-ARCH-005",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Storage",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Several Windows and Linux VMs need to mount the same managed file share by SMB or NFS. Which service fits?",
    "options": [
      {
        "id": "A",
        "text": "Azure Blob Storage"
      },
      {
        "id": "B",
        "text": "Azure Files"
      },
      {
        "id": "C",
        "text": "Azure Queue Storage"
      },
      {
        "id": "D",
        "text": "Azure Disk Storage"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The VMs need a common mounted filesystem using a file protocol. Azure Files provides managed shares with supported SMB or NFS configurations. Applications can work with paths and files much as they would with a conventional network share. Blob Storage is object storage and is not the SMB/NFS file-share service described here. Queue messages and VM disk volumes also have different access models.\n\nAzure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.\n\nBlob Storage stores unstructured objects such as images, videos, documents, and backups. Applications commonly access blobs using APIs or HTTP; it is different from a shared SMB or NFS filesystem.",
    "optionExplanations": {
      "A": "Incorrect. Blob Storage stores unstructured objects such as images, videos, documents, and backups. Applications commonly access blobs using APIs or HTTP; it is different from a shared SMB or NFS filesystem.",
      "B": "Correct. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
      "C": "Incorrect. Queue Storage holds messages so application components can exchange work asynchronously. A producer adds a message and a worker processes it later. It is not a file share or a VM disk.",
      "D": "Incorrect. Disk Storage provides persistent block-storage volumes for Azure VMs. An operating system treats a disk as an attached device. This differs from an object repository or a general shared filesystem."
    },
    "keyClue": "Mount the same file share using SMB or NFS.",
    "mentalModel": "Applications → shared file paths → Azure Files",
    "examTip": "Mounted managed file share → Azure Files.",
    "learnReference": "Microsoft Learn: Storage",
    "objective": "Describe Storage",
    "subtopic": "Storage",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "storage"
    ]
  },
  {
    "id": "AZ900-ARCH-006",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Storage redundancy",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Data must remain synchronously replicated across separate availability zones in a region. Which redundancy option is best?",
    "options": [
      {
        "id": "A",
        "text": "LRS"
      },
      {
        "id": "B",
        "text": "ZRS"
      },
      {
        "id": "C",
        "text": "GRS"
      },
      {
        "id": "D",
        "text": "RA-GRS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Synchronous copies across zones identify ZRS. A successful write is replicated across available zone replicas in the primary region, helping keep data available through a zone outage. LRS keeps replicas in one datacenter. GRS and RA-GRS add asynchronous copying to another region; they do not use ZRS for primary-region zone redundancy. Redundancy also differs from backup: deletions can propagate to replicas.\n\nZone-redundant storage synchronously copies data across availability zones in the primary region. It can withstand a zone outage, but alone does not create a copy in a second geographic region.\n\nLocally redundant storage keeps redundant copies within a single datacenter in the primary region. It protects against hardware failures there, but offers neither zone separation nor a secondary-region copy.",
    "optionExplanations": {
      "A": "Incorrect. Locally redundant storage keeps redundant copies within a single datacenter in the primary region. It protects against hardware failures there, but offers neither zone separation nor a secondary-region copy.",
      "B": "Correct. Zone-redundant storage synchronously copies data across availability zones in the primary region. It can withstand a zone outage, but alone does not create a copy in a second geographic region.",
      "C": "Incorrect. Geo-redundant storage uses local redundancy in the primary region and asynchronously replicates to a secondary region. Secondary access normally requires failover. Recent writes may not yet have reached the secondary.",
      "D": "Incorrect. Read-access geo-redundant storage adds read access to the secondary-region replica before failover. It includes geo-replication like GRS; the additional distinction is the readable secondary endpoint."
    },
    "keyClue": "Synchronous replication across zones in one region.",
    "mentalModel": "LRS: one datacenter\nZRS: zones\nGRS: another region",
    "examTip": "ZRS = zone copies; geo options = second-region copies.",
    "learnReference": "Microsoft Learn: Storage redundancy",
    "objective": "Describe Storage redundancy",
    "subtopic": "Storage redundancy",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "storage-redundancy"
    ],
    "visual": {
      "type": "storage-redundancy",
      "highlight": "ZRS",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-007",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Storage redundancy",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "A storage account needs replication to a secondary geographic region. Read access to the secondary before failover is not needed. Which listed option supplies this protection without the extra secondary read-access feature?",
    "options": [
      {
        "id": "A",
        "text": "LRS"
      },
      {
        "id": "B",
        "text": "ZRS"
      },
      {
        "id": "C",
        "text": "GRS"
      },
      {
        "id": "D",
        "text": "RA-GRS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "GRS stores locally redundant copies in the primary region and sends updates asynchronously to a secondary geographic region. It supports regional recovery, but recent writes can be missing if they have not yet replicated. The clarified scenario does not need read access to the secondary before failover, so GRS is the most economical matching option among the choices. RA-GRS adds that read-access feature.\n\nGeo-redundant storage uses local redundancy in the primary region and asynchronously replicates to a secondary region. Secondary access normally requires failover. Recent writes may not yet have reached the secondary.\n\nLocally redundant storage keeps redundant copies within a single datacenter in the primary region. It protects against hardware failures there, but offers neither zone separation nor a secondary-region copy.",
    "optionExplanations": {
      "A": "Incorrect. Locally redundant storage keeps redundant copies within a single datacenter in the primary region. It protects against hardware failures there, but offers neither zone separation nor a secondary-region copy.",
      "B": "Incorrect. Zone-redundant storage synchronously copies data across availability zones in the primary region. It can withstand a zone outage, but alone does not create a copy in a second geographic region.",
      "C": "Correct. Geo-redundant storage uses local redundancy in the primary region and asynchronously replicates to a secondary region. Secondary access normally requires failover. Recent writes may not yet have reached the secondary.",
      "D": "Incorrect. Read-access geo-redundant storage adds read access to the secondary-region replica before failover. It includes geo-replication like GRS; the additional distinction is the readable secondary endpoint."
    },
    "keyClue": "Secondary region required; pre-failover read access not needed.",
    "mentalModel": "Primary LRS → asynchronous copy → secondary LRS",
    "examTip": "GRS adds a secondary region; RA-GRS also permits secondary reads.",
    "learnReference": "Microsoft Learn: Storage redundancy",
    "objective": "Describe Storage redundancy",
    "subtopic": "Storage redundancy",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "storage-redundancy"
    ],
    "visual": {
      "type": "storage-redundancy",
      "highlight": "GRS",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-008",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Networking",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An organization needs an encrypted connection from its on-premises network to an Azure virtual network over the public internet. What should it use?",
    "options": [
      {
        "id": "A",
        "text": "VPN Gateway"
      },
      {
        "id": "B",
        "text": "ExpressRoute"
      },
      {
        "id": "C",
        "text": "Azure DNS"
      },
      {
        "id": "D",
        "text": "Network security group"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A site-to-site VPN uses an encrypted tunnel over the public Internet to link the company's network with an Azure VNet. Azure VPN Gateway terminates the Azure side of that connection. Encryption protects traffic on that path, but it is still Internet transport. ExpressRoute is a different connectivity approach using private provider connectivity. DNS naming and NSG filtering do not create the cross-network tunnel.\n\nAzure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.\n\nExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
    "optionExplanations": {
      "A": "Correct. Azure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
      "B": "Incorrect. ExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
      "C": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "D": "Incorrect. A network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol."
    },
    "keyClue": "Encrypted on-premises-to-VNet connection over the Internet.",
    "mentalModel": "On-premises → encrypted Internet tunnel → Azure VNet",
    "examTip": "Encrypted Internet tunnel → VPN Gateway; private circuit → ExpressRoute.",
    "learnReference": "Microsoft Learn: Networking",
    "objective": "Describe Networking",
    "subtopic": "Networking",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "networking"
    ],
    "visual": {
      "type": "networking-connectivity",
      "highlight": "VPN Gateway",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-009",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Networking",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company needs a private dedicated connection from its network to Azure, avoiding the public internet. Which service should it consider?",
    "options": [
      {
        "id": "A",
        "text": "VPN Gateway"
      },
      {
        "id": "B",
        "text": "ExpressRoute"
      },
      {
        "id": "C",
        "text": "Azure DNS"
      },
      {
        "id": "D",
        "text": "Network security group"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ExpressRoute connects an organization's network to Microsoft cloud services through a connectivity provider's private connection. The traffic avoids the public Internet path used by a site-to-site VPN. Private connectivity can help with network predictability, but is not automatically an encryption guarantee. DNS resolves names, and an NSG controls permitted packets within Azure; neither establishes the private connection.\n\nExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.\n\nAzure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
    "optionExplanations": {
      "A": "Incorrect. Azure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
      "B": "Correct. ExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
      "C": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "D": "Incorrect. A network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol."
    },
    "keyClue": "Private dedicated connectivity avoiding the public Internet.",
    "mentalModel": "On-premises → provider private connection → Azure",
    "examTip": "Private provider connectivity to Azure → ExpressRoute.",
    "learnReference": "Microsoft Learn: Networking",
    "objective": "Describe Networking",
    "subtopic": "Networking",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "networking"
    ],
    "visual": {
      "type": "networking-connectivity",
      "highlight": "ExpressRoute",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-010",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Networking",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which Azure service provides name resolution for public and private DNS zones?",
    "options": [
      {
        "id": "A",
        "text": "VPN Gateway"
      },
      {
        "id": "B",
        "text": "ExpressRoute"
      },
      {
        "id": "C",
        "text": "Azure DNS"
      },
      {
        "id": "D",
        "text": "Network security group"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "DNS turns names into records such as IP addresses. Azure DNS hosts zones for names an organization manages; private DNS zones support name resolution within private network scenarios. The question asks for name resolution, not for transport or filtering. VPN Gateway and ExpressRoute connect networks, while an NSG allows or denies traffic based on rules.\n\nAzure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.\n\nAzure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
    "optionExplanations": {
      "A": "Incorrect. Azure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
      "B": "Incorrect. ExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
      "C": "Correct. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "D": "Incorrect. A network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol."
    },
    "keyClue": "Name resolution for DNS zones.",
    "mentalModel": "Name → DNS record → address",
    "examTip": "Resolve names → DNS; connect networks → VPN/ExpressRoute.",
    "learnReference": "Microsoft Learn: Networking",
    "objective": "Describe Networking",
    "subtopic": "Networking",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "networking"
    ]
  },
  {
    "id": "AZ900-ARCH-011",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Virtual networks",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which Azure feature uses allow/deny rules at subnet or network-interface scope to filter inbound and outbound packets?",
    "options": [
      {
        "id": "A",
        "text": "VPN Gateway"
      },
      {
        "id": "B",
        "text": "ExpressRoute"
      },
      {
        "id": "C",
        "text": "Azure DNS"
      },
      {
        "id": "D",
        "text": "Network security group"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "An NSG contains allow and deny rules for network traffic. Those rules can identify source, destination, protocol, and port at subnet or network-interface scope. For example, a team can allow approved traffic to an application's port while denying other inbound traffic. This is filtering, not establishing a network connection or resolving a hostname. It is also distinct from a web application firewall that inspects HTTP requests.\n\nA network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol.\n\nAzure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
    "optionExplanations": {
      "A": "Incorrect. Azure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
      "B": "Incorrect. ExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
      "C": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "D": "Correct. A network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol."
    },
    "keyClue": "Allow/deny inbound and outbound traffic rules.",
    "mentalModel": "Packet → NSG rule → allow or deny",
    "examTip": "Subnet/NIC packet filtering → NSG.",
    "learnReference": "Microsoft Learn: Virtual networks",
    "objective": "Describe Virtual networks",
    "subtopic": "Virtual networks",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "virtual-networks"
    ]
  },
  {
    "id": "AZ900-ARCH-012",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Compute",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team needs complete control of the operating system for a legacy application. Which Azure service is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "C",
        "text": "Azure Container Instances"
      },
      {
        "id": "D",
        "text": "Azure App Service"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The application requires guest OS control, so a VM gives the team a familiar server environment. It can install compatible software, configure the OS, and apply required updates. That flexibility also means the customer must administer the system. Functions and App Service manage their underlying application platform; Container Instances runs containers without exposing full guest OS administration.\n\nAzure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.\n\nAzure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
    "optionExplanations": {
      "A": "Incorrect. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "B": "Correct. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "C": "Incorrect. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
      "D": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration."
    },
    "keyClue": "Complete control of the operating system.",
    "mentalModel": "VM control comes with OS maintenance responsibility",
    "examTip": "Custom guest OS administration → Azure VM.",
    "learnReference": "Microsoft Learn: Compute",
    "objective": "Describe Compute",
    "subtopic": "Compute",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "compute"
    ]
  },
  {
    "id": "AZ900-ARCH-013",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Compute",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team packages a small containerized workload and wants to run it without managing VMs or orchestration. Which service fits?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "C",
        "text": "Azure Container Instances"
      },
      {
        "id": "D",
        "text": "Azure App Service"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Container Instances lets the team run a packaged container without operating VMs or a Kubernetes cluster. That is useful for a small isolated task or service. AKS is the better match for Kubernetes scheduling and orchestration across a cluster. A VM could run the container, but would introduce the administration the team wants to avoid. The scenario calls for a container package rather than code deployed as a web app or event function.\n\nAzure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
    "optionExplanations": {
      "A": "Incorrect. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "B": "Incorrect. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "C": "Correct. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
      "D": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration."
    },
    "keyClue": "Small container package; no VMs or orchestration management.",
    "mentalModel": "Container image → ACI runs it",
    "examTip": "Run an isolated container without a cluster → ACI.",
    "learnReference": "Microsoft Learn: Compute",
    "objective": "Describe Compute",
    "subtopic": "Compute",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "compute"
    ]
  },
  {
    "id": "AZ900-ARCH-014",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "App hosting",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Developers want a managed platform for a web app without managing the underlying OS. Which Azure service is appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Azure Functions"
      },
      {
        "id": "B",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "C",
        "text": "Azure Container Instances"
      },
      {
        "id": "D",
        "text": "Azure App Service"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "App Service hosts a web application or API on a managed platform. The developers deploy code and configuration while Microsoft operates the underlying hosting OS. This is useful for a continuously available website that does not need full VM administration. Functions focuses on triggered units of execution. VMs offer OS control, while Container Instances runs containers without being the same managed web-app platform.\n\nApp Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.\n\nAzure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
    "optionExplanations": {
      "A": "Incorrect. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "B": "Incorrect. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "C": "Incorrect. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
      "D": "Correct. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration."
    },
    "keyClue": "Managed web application platform; no OS administration.",
    "mentalModel": "Developers deploy app → Microsoft runs hosting platform",
    "examTip": "Managed website/API hosting → App Service.",
    "learnReference": "Microsoft Learn: App hosting",
    "objective": "Describe App hosting",
    "subtopic": "App hosting",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "app-hosting"
    ]
  },
  {
    "id": "AZ900-ARCH-015",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Resource Manager",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which Azure service provides the management layer used to deploy, update, and delete Azure resources through templates and APIs?",
    "options": [
      {
        "id": "A",
        "text": "Azure Resource Manager"
      },
      {
        "id": "B",
        "text": "Azure portal"
      },
      {
        "id": "C",
        "text": "Azure Marketplace"
      },
      {
        "id": "D",
        "text": "Azure Advisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Resource Manager is the common management layer behind resource deployment and administration. A portal action, CLI command, or ARM-template deployment ultimately uses this management system. This is why ARM is the answer when the question asks for the layer handling resource operations rather than the interface a human sees. Marketplace catalogs solutions and Advisor recommends improvements.\n\nAzure Resource Manager is Azure's resource deployment and management layer. Portal, CLI, PowerShell, and templates use it to manage resources. It is the common management service, not just a user interface.\n\nThe Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.",
    "optionExplanations": {
      "A": "Correct. Azure Resource Manager is Azure's resource deployment and management layer. Portal, CLI, PowerShell, and templates use it to manage resources. It is the common management service, not just a user interface.",
      "B": "Incorrect. The Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.",
      "C": "Incorrect. Azure Marketplace is a catalog of Microsoft and partner offerings that customers can discover and deploy. Finding a packaged solution differs from identity management or datacenter redundancy.",
      "D": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service."
    },
    "keyClue": "Management layer used by templates and APIs.",
    "mentalModel": "Portal / CLI / template → ARM → Azure resources",
    "examTip": "ARM is the management layer; portal and command tools are clients.",
    "learnReference": "Microsoft Learn: Azure Resource Manager",
    "objective": "Describe Azure Resource Manager",
    "subtopic": "Azure Resource Manager",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-resource-manager"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Azure Resource Manager",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-016",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Resource groups",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A project team wants to organize related Azure resources so they can be managed together. What should it use?",
    "options": [
      {
        "id": "A",
        "text": "Management group"
      },
      {
        "id": "B",
        "text": "Subscription"
      },
      {
        "id": "C",
        "text": "Resource group"
      },
      {
        "id": "D",
        "text": "Availability Zone"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A resource group puts related resources into a logical container for lifecycle management. For example, a web app and its storage can be administered together if they belong to the same project lifecycle. Resources in a group can be in different regions. A subscription contains groups and provides billing scope; management groups organize subscriptions. An Availability Zone describes physical isolation, not project organization.\n\nA resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.\n\nA management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
    "optionExplanations": {
      "A": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "B": "Incorrect. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
      "C": "Correct. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "D": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage."
    },
    "keyClue": "Organize related resources for shared management.",
    "mentalModel": "Management group → subscription → resource group → resource",
    "examTip": "Related resources with a common lifecycle → resource group.",
    "learnReference": "Microsoft Learn: Resource groups",
    "objective": "Describe Resource groups",
    "subtopic": "Resource groups",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "resource-groups"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Resource group",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-017",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Subscriptions",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which Azure construct provides a billing boundary and can contain resource groups?",
    "options": [
      {
        "id": "A",
        "text": "Management group"
      },
      {
        "id": "B",
        "text": "Subscription"
      },
      {
        "id": "C",
        "text": "Resource group"
      },
      {
        "id": "D",
        "text": "Availability Zone"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A subscription is a logical boundary that contains resource groups and is associated with billing and access controls. A business can separate development and production into different subscriptions for administration or cost boundaries. A management group sits above subscriptions for shared governance. A resource group is below a subscription; an Availability Zone is a location inside a region.\n\nAn Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.\n\nA management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
    "optionExplanations": {
      "A": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "B": "Correct. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
      "C": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "D": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage."
    },
    "keyClue": "Billing boundary containing resource groups.",
    "mentalModel": "Management group → subscription → resource group → resource",
    "examTip": "Subscription contains resource groups and sets a billing/access boundary.",
    "learnReference": "Microsoft Learn: Subscriptions",
    "objective": "Describe Subscriptions",
    "subtopic": "Subscriptions",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "subscriptions"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Subscription",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-ARCH-018",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Virtual machines",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "A team plans to run custom software in Azure VMs. Choose TWO valid characteristics of those VMs.",
    "options": [
      {
        "id": "A",
        "text": "VMs never require an operating system"
      },
      {
        "id": "B",
        "text": "VMs provide control over the guest OS"
      },
      {
        "id": "C",
        "text": "VMs can run custom software"
      },
      {
        "id": "D",
        "text": "VMs are always serverless"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Azure VMs give customers control of their guest operating systems and allow installation of compatible custom software. Those are the two valid characteristics. Virtualization does not eliminate the OS: the VM contains its own guest OS. A VM is also not automatically serverless; customers choose sizes and manage operating systems, unlike a managed event-driven function platform.\n\nCustomers can configure and maintain the guest OS rather than only supply app code.\n\nCustomers can install compatible applications and services inside a VM.\n\nA VM contains a guest operating system; virtualization does not eliminate it.",
    "optionExplanations": {
      "A": "Incorrect. A VM contains a guest operating system; virtualization does not eliminate it.",
      "B": "Correct. Customers can configure and maintain the guest OS rather than only supply app code.",
      "C": "Correct. Customers can install compatible applications and services inside a VM.",
      "D": "Incorrect. IaaS VMs require sizing and guest OS management rather than being automatically serverless."
    },
    "keyClue": "Guest OS control and custom software.",
    "mentalModel": "VM = guest OS + applications on virtual hardware",
    "examTip": "A VM virtualizes a server; it does not eliminate its operating system.",
    "learnReference": "Microsoft Learn: Virtual machines",
    "objective": "Describe Virtual machines",
    "subtopic": "Virtual machines",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "virtual-machines"
    ]
  },
  {
    "id": "AZ900-ARCH-019",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Containers",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "True or false: Containers typically share the host operating system kernel, unlike full virtual machines.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Ordinary containers isolate applications while sharing the host operating-system kernel. A full VM typically has its own guest OS kernel on virtualized hardware. This helps containers start quickly and use fewer resources, though their images still need to match supported operating-system environments. Sharing a kernel does not mean sharing application data indiscriminately or having no isolation.",
    "optionExplanations": {
      "A": "Correct. Yes. Ordinary containers isolate applications while sharing the host operating-system kernel. A full VM typically has its own guest OS kernel on virtualized hardware. This helps containers start quickly and use fewer resources, though their images still need to match supported operating-system environments. Sharing a kernel does not mean sharing application data indiscriminately or having no isolation.",
      "B": "Incorrect. The statement is true. Yes. Ordinary containers isolate applications while sharing the host operating-system kernel. A full VM typically has its own guest OS kernel on virtualized hardware. This helps containers start quickly and use fewer resources, though their images still need to match supported operating-system environments. Sharing a kernel does not mean sharing application data indiscriminately or having no isolation."
    },
    "keyClue": "Typically share the host OS kernel.",
    "mentalModel": "Host kernel → several containers\nHypervisor → separate VM kernels",
    "examTip": "Container: shared kernel; VM: separate guest OS.",
    "learnReference": "Microsoft Learn: Containers",
    "objective": "Describe Containers",
    "subtopic": "Containers",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "containers"
    ]
  },
  {
    "id": "AZ900-ARCH-020",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Marketplace",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which Azure solution catalog lists deployable Microsoft and third-party offerings, such as VM images and managed applications?",
    "options": [
      {
        "id": "A",
        "text": "Azure Marketplace"
      },
      {
        "id": "B",
        "text": "Azure portal"
      },
      {
        "id": "C",
        "text": "Azure Advisor"
      },
      {
        "id": "D",
        "text": "Azure Resource Manager"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Marketplace is where customers discover Microsoft and partner solution offerings, such as packaged VM images and managed applications. It helps find a solution to deploy, while the deployment still needs suitable permissions and billing arrangements. The portal is a management interface, Advisor recommends improvements to resources already deployed, and Resource Manager coordinates resource operations. None is the solution catalog requested here.\n\nAzure Marketplace is a catalog of Microsoft and partner offerings that customers can discover and deploy. Finding a packaged solution differs from identity management or datacenter redundancy.\n\nThe Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.",
    "optionExplanations": {
      "A": "Correct. Azure Marketplace is a catalog of Microsoft and partner offerings that customers can discover and deploy. Finding a packaged solution differs from identity management or datacenter redundancy.",
      "B": "Incorrect. The Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.",
      "C": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "D": "Incorrect. Azure Resource Manager is Azure's resource deployment and management layer. Portal, CLI, PowerShell, and templates use it to manage resources. It is the common management service, not just a user interface."
    },
    "keyClue": "Discover deployable Microsoft and third-party offerings.",
    "mentalModel": "Catalog offering → deploy solution → manage resources",
    "examTip": "Find packaged cloud solutions → Azure Marketplace.",
    "learnReference": "Microsoft Learn: Azure Marketplace",
    "objective": "Describe Azure Marketplace",
    "subtopic": "Azure Marketplace",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-marketplace"
    ]
  },
  {
    "id": "AZ900-ARCH-021",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Load balancing",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which service distributes inbound traffic across healthy backend resources at Layer 4?",
    "options": [
      {
        "id": "A",
        "text": "Azure Load Balancer"
      },
      {
        "id": "B",
        "text": "Azure Front Door"
      },
      {
        "id": "C",
        "text": "Azure App Service"
      },
      {
        "id": "D",
        "text": "Azure Monitor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Load Balancer operates at Layer 4, distributing TCP or UDP connections to backend resources. Health probes help identify available backends. It is suitable for network-level traffic distribution but does not inspect HTTP content like a WAF. The phrase Layer 4 separates it from application-layer routing services. Front Door routes HTTP/HTTPS requests at the web-application layer. App Service hosts web applications, while Monitor collects telemetry. Neither application hosting nor monitoring supplies the requested Layer 4 load distribution.\n\nAzure Load Balancer distributes TCP or UDP traffic to backend instances at Layer 4. Health probes help route to available backends. It does not inspect web requests like an application-layer WAF.\n\nAzure Front Door provides global HTTP/HTTPS entry points, routing, acceleration, and supported web application firewall integration. A regional Layer-4 load balancer has a different scope and traffic model.",
    "optionExplanations": {
      "A": "Correct. Azure Load Balancer distributes TCP or UDP traffic to backend instances at Layer 4. Health probes help route to available backends. It does not inspect web requests like an application-layer WAF.",
      "B": "Incorrect. Azure Front Door provides global HTTP/HTTPS entry points, routing, acceleration, and supported web application firewall integration. A regional Layer-4 load balancer has a different scope and traffic model.",
      "C": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
      "D": "Incorrect. Azure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents."
    },
    "keyClue": "Layer 4 distribution to healthy backends.",
    "mentalModel": "Incoming connections → load balancer → healthy backends",
    "examTip": "TCP/UDP distribution → Azure Load Balancer.",
    "learnReference": "Microsoft Learn: Load balancing",
    "objective": "Describe Load balancing",
    "subtopic": "Load balancing",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "load-balancing"
    ]
  },
  {
    "id": "AZ900-ARCH-022",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Application delivery",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "A global HTTP/HTTPS application needs a managed worldwide entry point, routing to appropriate origins, and WAF protection. Which service combines those capabilities?",
    "options": [
      {
        "id": "A",
        "text": "Azure Front Door"
      },
      {
        "id": "B",
        "text": "Azure Load Balancer"
      },
      {
        "id": "C",
        "text": "Network security group"
      },
      {
        "id": "D",
        "text": "VPN Gateway"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Front Door supplies a global HTTP/HTTPS entry point, routes requests to appropriate origins, and supports web application firewall protection. The combination of global web routing and WAF capabilities identifies this service. An NSG filters network packets without the same global web-delivery function. VPN Gateway connects private networks. Azure Load Balancer distributes TCP/UDP connections at Layer 4, rather than providing this global HTTP/HTTPS entry point with WAF protection.\n\nAzure Front Door provides global HTTP/HTTPS entry points, routing, acceleration, and supported web application firewall integration. A regional Layer-4 load balancer has a different scope and traffic model.\n\nAzure Load Balancer distributes TCP or UDP traffic to backend instances at Layer 4. Health probes help route to available backends. It does not inspect web requests like an application-layer WAF.",
    "optionExplanations": {
      "A": "Correct. Azure Front Door provides global HTTP/HTTPS entry points, routing, acceleration, and supported web application firewall integration. A regional Layer-4 load balancer has a different scope and traffic model.",
      "B": "Incorrect. Azure Load Balancer distributes TCP or UDP traffic to backend instances at Layer 4. Health probes help route to available backends. It does not inspect web requests like an application-layer WAF.",
      "C": "Incorrect. A network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol.",
      "D": "Incorrect. Azure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit."
    },
    "keyClue": "Global HTTP/HTTPS routing with WAF.",
    "mentalModel": "Users worldwide → Front Door → selected web origin",
    "examTip": "Global web entry point + WAF → Azure Front Door.",
    "learnReference": "Microsoft Learn: Application delivery",
    "objective": "Describe Application delivery",
    "subtopic": "Application delivery",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "application-delivery"
    ]
  },
  {
    "id": "AZ900-ARCH-023",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Identity",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An application needs to access Azure resources without storing credentials in code. Which Azure feature can provide an identity for it?",
    "options": [
      {
        "id": "A",
        "text": "Managed identity"
      },
      {
        "id": "B",
        "text": "Resource lock"
      },
      {
        "id": "C",
        "text": "Availability Set"
      },
      {
        "id": "D",
        "text": "Azure tag"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A managed identity lets an application obtain an identity token without keeping an embedded password or secret in its code. Azure manages the identity's credentials. The target service still checks permissions, so a suitable role assignment may also be required. A resource lock, tag, or Availability Set cannot supply an identity token or manage application credentials.\n\nA managed identity gives an Azure workload an identity whose credentials Azure manages. Applications can obtain tokens without embedding secrets. The identity still needs suitable permissions on the target resource.\n\nA management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
    "optionExplanations": {
      "A": "Correct. A managed identity gives an Azure workload an identity whose credentials Azure manages. Applications can obtain tokens without embedding secrets. The identity still needs suitable permissions on the target resource.",
      "B": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "C": "Incorrect. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
      "D": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule."
    },
    "keyClue": "Access resources without storing credentials in code.",
    "mentalModel": "Workload identity → token → authorized resource",
    "examTip": "Azure-managed workload credentials → managed identity.",
    "learnReference": "Microsoft Learn: Identity",
    "objective": "Describe Identity",
    "subtopic": "Identity",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "identity"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Managed identity",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-001",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure RBAC",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A user must be allowed to start VMs but not manage access or delete resource groups. Which capability controls permissions?",
    "options": [
      {
        "id": "A",
        "text": "Azure Policy"
      },
      {
        "id": "B",
        "text": "Azure RBAC"
      },
      {
        "id": "C",
        "text": "Resource lock"
      },
      {
        "id": "D",
        "text": "Tag"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "RBAC controls which actions an identity can perform at a scope. A suitable role can permit VM operations without granting access management or resource-group deletion. Least privilege means assigning only the permissions needed. The exact role definition matters: choosing a broadly privileged role would defeat the objective. Azure Policy governs configuration compliance, while locks and tags do not grant this user's precise action permissions.\n\nAzure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.\n\nAzure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
    "optionExplanations": {
      "A": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "B": "Correct. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "C": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule."
    },
    "keyClue": "Allow a user to start VMs with restricted permissions.",
    "mentalModel": "Identity + role + scope = role assignment",
    "examTip": "WHO can perform actions → RBAC; WHAT configurations are allowed → Policy.",
    "learnReference": "Microsoft Learn: Azure RBAC",
    "objective": "Describe Azure RBAC",
    "subtopic": "Azure RBAC",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-rbac"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Azure RBAC",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-002",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Policy",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An organization wants to prevent creation of resources outside approved regions. Which service should enforce this?",
    "options": [
      {
        "id": "A",
        "text": "Azure Policy"
      },
      {
        "id": "B",
        "text": "Azure RBAC"
      },
      {
        "id": "C",
        "text": "Resource lock"
      },
      {
        "id": "D",
        "text": "Tag"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Policy can deny creation of resources whose location is not in an approved list. The restriction applies to configuration, regardless of which otherwise-authorized user attempts the deployment. RBAC grants or denies user actions at a scope but is not the location-validation rule here. A lock protects an existing resource; a tag labels it. This distinction is useful when a question uses words such as allowed regions or compliance.\n\nAzure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.\n\nAzure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
    "optionExplanations": {
      "A": "Correct. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "B": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "C": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule."
    },
    "keyClue": "Prevent deployment outside approved regions.",
    "mentalModel": "Deployment properties → policy evaluation → allow or deny",
    "examTip": "Enforce permitted resource properties → Azure Policy.",
    "learnReference": "Microsoft Learn: Azure Policy",
    "objective": "Describe Azure Policy",
    "subtopic": "Azure Policy",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-policy"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Azure Policy",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-003",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Resource locks",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team needs an extra guard against accidentally deleting an existing Azure database resource through Resource Manager. Which control is designed for that purpose?",
    "options": [
      {
        "id": "A",
        "text": "Azure Policy"
      },
      {
        "id": "B",
        "text": "Azure RBAC"
      },
      {
        "id": "C",
        "text": "Resource lock"
      },
      {
        "id": "D",
        "text": "Tag"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A CanNotDelete management lock prevents accidental deletion through Azure Resource Manager while still permitting changes. This is an additional guard even when a user has resource-management permission. A user with appropriate lock-management permission can remove it. Locks are not backups and do not protect every data-plane action, such as deleting database rows. RBAC, tags, and general compliance policies serve different purposes.\n\nA management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.\n\nAzure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
    "optionExplanations": {
      "A": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "B": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "C": "Correct. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule."
    },
    "keyClue": "Prevent accidental deletion of an existing resource.",
    "mentalModel": "CanNotDelete: modify allowed, deletion blocked\nReadOnly: management changes blocked",
    "examTip": "CanNotDelete lock protects management deletion, not the stored data itself.",
    "learnReference": "Microsoft Learn: Resource locks",
    "objective": "Describe Resource locks",
    "subtopic": "Resource locks",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "resource-locks"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Resource lock",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-004",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Tags",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A finance team wants to categorize resource costs by department. Which feature should it use?",
    "options": [
      {
        "id": "A",
        "text": "Azure Policy"
      },
      {
        "id": "B",
        "text": "Azure RBAC"
      },
      {
        "id": "C",
        "text": "Resource lock"
      },
      {
        "id": "D",
        "text": "Tag"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A Department tag can label a resource's business ownership and help group supported cost records. This makes it practical for finance to allocate spending without reorganizing every resource. Tags are metadata, not an access rule. They also do not automatically enforce that all resources have a department value; Azure Policy can help require a tagging standard. The question asks for classification, so the label is the first tool.\n\nA tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule.\n\nAzure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
    "optionExplanations": {
      "A": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "B": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "C": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Correct. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule."
    },
    "keyClue": "Categorize costs by department.",
    "mentalModel": "Resource + Department=Finance → cost category",
    "examTip": "Classify resources/costs → tags; enforce tagging rules → Policy.",
    "learnReference": "Microsoft Learn: Tags",
    "objective": "Describe Tags",
    "subtopic": "Tags",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "tags"
    ]
  },
  {
    "id": "AZ900-GOVE-005",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Microsoft Entra ID",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which service provides cloud identity authentication for users and applications in Azure?",
    "options": [
      {
        "id": "A",
        "text": "Microsoft Entra ID"
      },
      {
        "id": "B",
        "text": "Azure RBAC"
      },
      {
        "id": "C",
        "text": "Azure Policy"
      },
      {
        "id": "D",
        "text": "Management group"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Microsoft Entra ID supplies identities and authentication for users and applications. It enables sign-in and issues tokens that services can validate. Authentication establishes who is calling; authorization determines the actions they may perform. Azure RBAC handles Azure resource permissions, while Policy evaluates compliance. A management group organizes subscriptions and cannot act as a sign-in directory.\n\nMicrosoft Entra ID is a cloud identity and access service used for sign-in by users and applications. It establishes identities and tokens. Azure RBAC separately controls their permissions on Azure resources.\n\nAzure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
    "optionExplanations": {
      "A": "Correct. Microsoft Entra ID is a cloud identity and access service used for sign-in by users and applications. It establishes identities and tokens. Azure RBAC separately controls their permissions on Azure resources.",
      "B": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "C": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "D": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance."
    },
    "keyClue": "Cloud identity authentication.",
    "mentalModel": "Identity → authentication → resource authorization",
    "examTip": "Entra ID identifies the caller; Azure RBAC controls resource permissions.",
    "learnReference": "Microsoft Learn: Microsoft Entra ID",
    "objective": "Describe Microsoft Entra ID",
    "subtopic": "Microsoft Entra ID",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "microsoft-entra-id"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Microsoft Entra ID",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-006",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Authentication and authorization",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which term means proving who a user is?",
    "options": [
      {
        "id": "A",
        "text": "Authentication"
      },
      {
        "id": "B",
        "text": "Authorization"
      },
      {
        "id": "C",
        "text": "Governance"
      },
      {
        "id": "D",
        "text": "Auditing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Authentication is proving an identity. A user may demonstrate knowledge of a password, possession of a security key, or another supported credential. After sign-in, authorization decides which actions that identity can perform. A valid identity does not automatically have administrator privileges. Governance defines organizational rules, and auditing records activity; neither is the process of verifying identity.\n\nAuthentication verifies an identity using credentials or other evidence. Passwords, passkeys, and multifactor sign-in can prove who is signing in. Authentication alone does not grant every resource permission.\n\nAuthorization determines which actions an identified user or application may perform. Azure RBAC is one authorization mechanism for Azure resources. Permission is different from proving identity.",
    "optionExplanations": {
      "A": "Correct. Authentication verifies an identity using credentials or other evidence. Passwords, passkeys, and multifactor sign-in can prove who is signing in. Authentication alone does not grant every resource permission.",
      "B": "Incorrect. Authorization determines which actions an identified user or application may perform. Azure RBAC is one authorization mechanism for Azure resources. Permission is different from proving identity.",
      "C": "Incorrect. Governance establishes and enforces organizational rules for resources, access, cost, and compliance. It guides how cloud services are used; it is not a substitute for redundancy or sign-in.",
      "D": "Incorrect. Auditing records and reviews events to show what happened, who acted, and when. It provides evidence after or during actions rather than verifying credentials or granting permissions."
    },
    "keyClue": "Proving who a user is.",
    "mentalModel": "Authentication → identity verified\nAuthorization → actions permitted",
    "examTip": "Authentication asks Who are you? Authorization asks What may you do?",
    "learnReference": "Microsoft Learn: Authentication and authorization",
    "objective": "Describe Authentication and authorization",
    "subtopic": "Authentication and authorization",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "authentication-and-authorization"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Authentication",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-007",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Authentication and authorization",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which term means deciding what an authenticated user is permitted to do?",
    "options": [
      {
        "id": "A",
        "text": "Authentication"
      },
      {
        "id": "B",
        "text": "Authorization"
      },
      {
        "id": "C",
        "text": "Availability"
      },
      {
        "id": "D",
        "text": "Encryption"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Authorization is the permission decision after identity is known. A user can sign in successfully yet be unable to delete a VM because no applicable role grants that action. Azure RBAC expresses these permissions using roles and scopes. Authentication supplies the identity, encryption protects readable data, and availability concerns usable service time. The scenario is specifically about allowed actions.\n\nAuthorization determines which actions an identified user or application may perform. Azure RBAC is one authorization mechanism for Azure resources. Permission is different from proving identity.\n\nAuthentication verifies an identity using credentials or other evidence. Passwords, passkeys, and multifactor sign-in can prove who is signing in. Authentication alone does not grant every resource permission.",
    "optionExplanations": {
      "A": "Incorrect. Authentication verifies an identity using credentials or other evidence. Passwords, passkeys, and multifactor sign-in can prove who is signing in. Authentication alone does not grant every resource permission.",
      "B": "Correct. Authorization determines which actions an identified user or application may perform. Azure RBAC is one authorization mechanism for Azure resources. Permission is different from proving identity.",
      "C": "Incorrect. Availability measures whether a service can be used when needed. Redundancy and recovery affect availability; it is unrelated to encrypting data or assigning user permissions.",
      "D": "Incorrect. Encryption protects data by making it unreadable without the appropriate key. It protects confidentiality in storage or transit; it does not decide which resource-management operations a user may perform."
    },
    "keyClue": "What an authenticated user is permitted to do.",
    "mentalModel": "Authentication: identity\nAuthorization: permission",
    "examTip": "Successful sign-in does not imply authorization for every action.",
    "learnReference": "Microsoft Learn: Authentication and authorization",
    "objective": "Describe Authentication and authorization",
    "subtopic": "Authentication and authorization",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "authentication-and-authorization"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Authorization",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-008",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Management groups",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An enterprise needs to apply governance across several Azure subscriptions. Which hierarchy level is designed for this?",
    "options": [
      {
        "id": "A",
        "text": "Management group"
      },
      {
        "id": "B",
        "text": "Subscription"
      },
      {
        "id": "C",
        "text": "Resource group"
      },
      {
        "id": "D",
        "text": "Availability Zone"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Management groups organize subscriptions under common governance scopes. A policy or appropriate role assignment at a parent scope can be inherited by child subscriptions. This is useful when an enterprise has many subscriptions rather than only one project. Resource groups organize resources within a subscription. Availability Zones separate datacenter locations and do not form an administrative hierarchy.\n\nA management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.\n\nAn Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
    "optionExplanations": {
      "A": "Correct. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "B": "Incorrect. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
      "C": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "D": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage."
    },
    "keyClue": "Governance across several subscriptions.",
    "mentalModel": "Management group → subscriptions → resource groups → resources",
    "examTip": "Shared governance above subscriptions → management group.",
    "learnReference": "Microsoft Learn: Management groups",
    "objective": "Describe Management groups",
    "subtopic": "Management groups",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "management-groups"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Management group",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-009",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Monitor",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An operations team needs metrics, logs, alerts, and application telemetry. Which Azure service is central to this?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      },
      {
        "id": "D",
        "text": "Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Azure Monitor brings together workload telemetry, such as metrics, logs, and application performance data. Operators use it to investigate behavior and configure alerts. Application Insights and Log Analytics are related capabilities within this monitoring environment. Advisor recommends optimizations, Service Health reports Azure-side incidents, and Defender for Cloud focuses on security posture and protection. The broad collection of runtime signals in the scenario points to Monitor.\n\nAzure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.\n\nAdvisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
    "optionExplanations": {
      "A": "Correct. Azure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
      "B": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "C": "Incorrect. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "D": "Incorrect. Defender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users."
    },
    "keyClue": "Metrics, logs, alerts, and app telemetry.",
    "mentalModel": "Monitor: telemetry\nAdvisor: recommendations\nService Health: platform incidents",
    "examTip": "Workload telemetry → Monitor; improvement suggestions → Advisor.",
    "learnReference": "Microsoft Learn: Azure Monitor",
    "objective": "Describe Azure Monitor",
    "subtopic": "Azure Monitor",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-monitor"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Azure Monitor",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-010",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Advisor",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which service provides personalized recommendations about cost, security, reliability, operational excellence, and performance?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      },
      {
        "id": "D",
        "text": "Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Advisor assesses Azure deployments and offers personalized recommendations across several optimization areas. Its role is suggesting ways to improve reliability, security, performance, cost, and operational excellence. It is not the primary workspace for querying application logs or examining requests. Service Health instead communicates platform issues. Defender for Cloud supplies security-focused assessment, while Advisor spans the wider categories listed.\n\nAdvisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.\n\nAzure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
    "optionExplanations": {
      "A": "Incorrect. Azure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
      "B": "Correct. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "C": "Incorrect. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "D": "Incorrect. Defender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users."
    },
    "keyClue": "Recommendations across five optimization categories.",
    "mentalModel": "Observe: Monitor\nRecommend: Advisor\nPlatform incident: Service Health",
    "examTip": "Personalized improvements across cost and reliability → Advisor.",
    "learnReference": "Microsoft Learn: Azure Advisor",
    "objective": "Describe Azure Advisor",
    "subtopic": "Azure Advisor",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-advisor"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Azure Advisor",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-011",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Service Health",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which service informs customers about Azure incidents, planned maintenance, and health advisories that may affect their resources?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      },
      {
        "id": "D",
        "text": "Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Service Health informs customers about Azure incidents, planned maintenance, and advisories relevant to their services and regions. This helps distinguish a provider-side disruption from a problem in an application's own code or resources. CPU metrics and runtime logs belong to Azure Monitor. Advisor offers optimization recommendations; Defender for Cloud addresses security. The incident-and-maintenance wording identifies Service Health.\n\nService Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.\n\nAzure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
    "optionExplanations": {
      "A": "Incorrect. Azure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
      "B": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "C": "Correct. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "D": "Incorrect. Defender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users."
    },
    "keyClue": "Azure incidents and maintenance affecting your resources.",
    "mentalModel": "Service Health: Azure events\nMonitor: workload signals",
    "examTip": "Azure platform incidents → Service Health; application telemetry → Monitor.",
    "learnReference": "Microsoft Learn: Azure Service Health",
    "objective": "Describe Azure Service Health",
    "subtopic": "Azure Service Health",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-service-health"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Azure Service Health",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-012",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Defender for Cloud",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Which dedicated service assesses cloud security posture and offers supported workload threat protection and security recommendations?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      },
      {
        "id": "D",
        "text": "Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Defender for Cloud evaluates security posture and provides recommendations to reduce security risks. Supported protection plans can also detect threats to workloads. A team may use it to identify weaknesses in resource configuration, while Entra ID authenticates callers and Azure Monitor provides general telemetry. Advisor includes broader optimization categories, but this question asks for the dedicated security posture and workload protection service.\n\nDefender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users.\n\nAzure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
    "optionExplanations": {
      "A": "Incorrect. Azure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
      "B": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "C": "Incorrect. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "D": "Correct. Defender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users."
    },
    "keyClue": "Security posture assessment and recommendations.",
    "mentalModel": "Assess configuration → reduce exposure → detect threats",
    "examTip": "Security posture and workload threat protection → Defender for Cloud.",
    "learnReference": "Microsoft Learn: Defender for Cloud",
    "objective": "Describe Defender for Cloud",
    "subtopic": "Defender for Cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "defender-for-cloud"
    ]
  },
  {
    "id": "AZ900-GOVE-013",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Compliance",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "An organization wants to assign several Azure Policy definitions together as one set for a compliance baseline. What is that set called?",
    "options": [
      {
        "id": "A",
        "text": "Policy initiative"
      },
      {
        "id": "B",
        "text": "Resource group"
      },
      {
        "id": "C",
        "text": "Management group"
      },
      {
        "id": "D",
        "text": "Azure RBAC"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An initiative is a collection of Azure Policy definitions managed as one set. An organization can assign related rules together, such as a collection addressing a compliance baseline. This makes governance easier than assigning each definition independently. It does not itself prove that the organization has achieved legal compliance. A resource group groups resources; an initiative groups rules.\n\nA Policy initiative groups multiple policy definitions into a set that can be assigned together. It is a collection of governance rules, not a container of running resources.\n\nA resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
    "optionExplanations": {
      "A": "Correct. A Policy initiative groups multiple policy definitions into a set that can be assigned together. It is a collection of governance rules, not a container of running resources.",
      "B": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "C": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "D": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule."
    },
    "keyClue": "Several policy definitions assigned as one set.",
    "mentalModel": "Policy definitions → initiative → assignment",
    "examTip": "One definition = one policy; grouped definitions = initiative.",
    "learnReference": "Microsoft Learn: Compliance",
    "objective": "Describe Compliance",
    "subtopic": "Compliance",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "compliance"
    ]
  },
  {
    "id": "AZ900-GOVE-014",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Cost Management",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Which Azure capability helps analyze spending, create budgets, and receive cost alerts?",
    "options": [
      {
        "id": "A",
        "text": "Azure Cost Management"
      },
      {
        "id": "B",
        "text": "Pricing Calculator"
      },
      {
        "id": "C",
        "text": "Azure Advisor"
      },
      {
        "id": "D",
        "text": "Azure Resource Graph"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cost Management analyzes actual and forecast spending, helps categorize charges, and supports budgets and alerts. A budget notification lets operators investigate cost growth. It is not automatically a hard limit that shuts down resources. For estimating an undeployed design, the Pricing Calculator is more suitable. Advisor recommends resource optimizations, which can include cost savings. Resource Graph queries resource inventory. Neither replaces Cost Management's spending analysis, budgets, and billing-related views.\n\nMicrosoft Cost Management analyzes actual spending and supports cost allocation, budgets, and alerts. A budget normally notifies you rather than automatically stopping resources. Estimates for proposed designs use the Pricing Calculator.\n\nThe Azure Pricing Calculator estimates the cost of a proposed configuration using selected services, sizes, and usage assumptions. It helps plan future costs; actual billed usage is analyzed with Cost Management.",
    "optionExplanations": {
      "A": "Correct. Microsoft Cost Management analyzes actual spending and supports cost allocation, budgets, and alerts. A budget normally notifies you rather than automatically stopping resources. Estimates for proposed designs use the Pricing Calculator.",
      "B": "Incorrect. The Azure Pricing Calculator estimates the cost of a proposed configuration using selected services, sizes, and usage assumptions. It helps plan future costs; actual billed usage is analyzed with Cost Management.",
      "C": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "D": "Incorrect. Resource Graph queries Azure resource inventory and properties across authorized scopes. It helps answer questions such as which VMs exist. It is different from querying runtime application logs."
    },
    "keyClue": "Analyze spending, budgets, and cost alerts.",
    "mentalModel": "Proposed cost: calculator\nActual spending: Cost Management",
    "examTip": "Estimate future design → Pricing Calculator; analyze usage → Cost Management.",
    "learnReference": "Microsoft Learn: Cost Management",
    "objective": "Describe Cost Management",
    "subtopic": "Cost Management",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "cost-management"
    ]
  },
  {
    "id": "AZ900-GOVE-015",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Service Level Agreements",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "What does an Azure service-level agreement primarily communicate?",
    "options": [
      {
        "id": "A",
        "text": "The provider's defined service commitments, conditions, and applicable remedies"
      },
      {
        "id": "B",
        "text": "The application's actual uptime measured by its operators"
      },
      {
        "id": "C",
        "text": "The organization's internal target for its entire application's availability"
      },
      {
        "id": "D",
        "text": "The discounted price for a long-term eligible usage commitment"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A service-level agreement describes Microsoft's defined commitments for a service, including measurement conditions and applicable remedies. Availability commitments commonly appear as percentages. This is different from the uptime a customer actually measures or the target it chooses for its entire application. A solution can depend on several services, so one service's SLA should not be assumed to equal the complete solution's outcome.\n\nA service-level agreement states a provider's defined service commitments, measurement conditions, and relevant remedies. It is not the same as a workload's measured uptime or a certification passing score.\n\nMeasured uptime records how long the customer's application was actually usable during a period. It is an observed result rather than the provider's contractual service commitment.",
    "optionExplanations": {
      "A": "Correct. A service-level agreement states a provider's defined service commitments, measurement conditions, and relevant remedies. It is not the same as a workload's measured uptime or a certification passing score.",
      "B": "Incorrect. Measured uptime records how long the customer's application was actually usable during a period. It is an observed result rather than the provider's contractual service commitment.",
      "C": "Incorrect. An internal availability target is the organization's desired reliability goal. It may guide engineering but is not automatically Microsoft's contractual service-level agreement.",
      "D": "Incorrect. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free."
    },
    "keyClue": "Provider's defined service availability commitment.",
    "mentalModel": "Provider SLA ≠ application measurement",
    "examTip": "SLA = contractual service commitment, not actual measured uptime.",
    "learnReference": "Microsoft Learn: Service Level Agreements",
    "objective": "Describe Service Level Agreements",
    "subtopic": "Service Level Agreements",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "service-level-agreements"
    ]
  },
  {
    "id": "AZ900-GOVE-016",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure portal",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which browser-based interface can be used to create and manage Azure resources?",
    "options": [
      {
        "id": "A",
        "text": "Azure portal"
      },
      {
        "id": "B",
        "text": "Azure CLI"
      },
      {
        "id": "C",
        "text": "Azure PowerShell"
      },
      {
        "id": "D",
        "text": "ARM template"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "The Azure portal is the graphical interface accessed through a browser. Operators can create, configure, and inspect resources without writing command syntax. The portal still sends management requests through Azure Resource Manager and respects permissions. CLI and PowerShell are command-line clients, while templates describe deployments in code. The phrase browser-based interface identifies the portal rather than the backend management layer.\n\nThe Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.\n\nAzure CLI is a cross-platform command-line tool using az commands to manage Azure. It is commonly used from Bash but is not limited to it. It can run locally or in Cloud Shell.",
    "optionExplanations": {
      "A": "Correct. The Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.",
      "B": "Incorrect. Azure CLI is a cross-platform command-line tool using az commands to manage Azure. It is commonly used from Bash but is not limited to it. It can run locally or in Cloud Shell.",
      "C": "Incorrect. Azure PowerShell provides PowerShell cmdlets, such as Get-AzVM, for Azure management. It fits PowerShell scripts and object pipelines. It is not the same command syntax as Azure CLI.",
      "D": "Incorrect. An ARM template is a declarative JSON description of Azure resources and settings. Azure Resource Manager processes it to deploy the desired resources. A template describes the result rather than a sequence of portal clicks."
    },
    "keyClue": "Browser-based graphical interface.",
    "mentalModel": "Portal click → ARM request → resource operation",
    "examTip": "Graphical browser administration → Azure portal.",
    "learnReference": "Microsoft Learn: Azure portal",
    "objective": "Describe Azure portal",
    "subtopic": "Azure portal",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-portal"
    ]
  },
  {
    "id": "AZ900-GOVE-017",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Cloud Shell",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A user wants a browser-based command-line environment for administering Azure using PowerShell or Bash. Which feature should they use?",
    "options": [
      {
        "id": "A",
        "text": "Azure Cloud Shell"
      },
      {
        "id": "B",
        "text": "Azure CLI"
      },
      {
        "id": "C",
        "text": "Azure PowerShell"
      },
      {
        "id": "D",
        "text": "Azure Resource Graph"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cloud Shell provides an Azure administration shell reachable through a browser, with Bash and PowerShell environments. Users can run supported command tools without first installing them on their own computer. This is a shell, not the graphical resource blades of the portal. Azure CLI and Azure PowerShell are command tools that can run inside Cloud Shell or on a local computer. Resource Graph queries inventory. The requirement is for the browser-hosted environment itself, not just a command tool or query service.\n\nCloud Shell is a browser-accessible command-line environment with Bash and PowerShell tools for Azure administration. It saves local installation work, but commands still need authorization to manage resources.\n\nAzure CLI is a cross-platform command-line tool using az commands to manage Azure. It is commonly used from Bash but is not limited to it. It can run locally or in Cloud Shell.",
    "optionExplanations": {
      "A": "Correct. Cloud Shell is a browser-accessible command-line environment with Bash and PowerShell tools for Azure administration. It saves local installation work, but commands still need authorization to manage resources.",
      "B": "Incorrect. Azure CLI is a cross-platform command-line tool using az commands to manage Azure. It is commonly used from Bash but is not limited to it. It can run locally or in Cloud Shell.",
      "C": "Incorrect. Azure PowerShell provides PowerShell cmdlets, such as Get-AzVM, for Azure management. It fits PowerShell scripts and object pipelines. It is not the same command syntax as Azure CLI.",
      "D": "Incorrect. Resource Graph queries Azure resource inventory and properties across authorized scopes. It helps answer questions such as which VMs exist. It is different from querying runtime application logs."
    },
    "keyClue": "Browser-based Bash or PowerShell environment.",
    "mentalModel": "Browser → shell environment → Azure commands",
    "examTip": "Browser terminal for Azure administration → Cloud Shell.",
    "learnReference": "Microsoft Learn: Cloud Shell",
    "objective": "Describe Cloud Shell",
    "subtopic": "Cloud Shell",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "cloud-shell"
    ]
  },
  {
    "id": "AZ900-GOVE-018",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Policy",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "Choose TWO actions Azure Policy can support.",
    "options": [
      {
        "id": "A",
        "text": "Deny noncompliant deployments"
      },
      {
        "id": "B",
        "text": "Grant a user Owner permissions"
      },
      {
        "id": "C",
        "text": "Audit resource configurations"
      },
      {
        "id": "D",
        "text": "Patch a VM operating system"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Azure Policy supports auditing configuration and denying noncompliant resource deployments. Audit identifies deviations; deny prevents specified noncompliant requests. These are both resource-governance behaviors. Granting an identity Owner permissions belongs to an RBAC role assignment. Installing guest OS patches belongs to an update-management process. Some Policy effects can help remediate configuration, but that does not make it a general OS patching tool.\n\nA deny policy can reject a request whose resource properties violate the assigned rule.\n\nAudit can report resources whose properties do not comply with a rule.\n\nGranting Owner is an RBAC role assignment, not a resource-configuration Policy effect.",
    "optionExplanations": {
      "A": "Correct. A deny policy can reject a request whose resource properties violate the assigned rule.",
      "B": "Incorrect. Granting Owner is an RBAC role assignment, not a resource-configuration Policy effect.",
      "C": "Correct. Audit can report resources whose properties do not comply with a rule.",
      "D": "Incorrect. Guest OS patch installation uses an update-management process, not general policy evaluation."
    },
    "keyClue": "Audit and deny resource configurations.",
    "mentalModel": "Audit: report\nDeny: block noncompliant request",
    "examTip": "Policy audits or enforces resource standards; RBAC grants permissions.",
    "learnReference": "Microsoft Learn: Azure Policy",
    "objective": "Describe Azure Policy",
    "subtopic": "Azure Policy",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-policy"
    ]
  },
  {
    "id": "AZ900-GOVE-019",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Resource locks",
    "difficulty": "medium",
    "type": "yes-no",
    "question": "Statement: A ReadOnly resource lock prevents updates and deletion through Azure Resource Manager until an authorized user removes the lock.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes, for management operations through Azure Resource Manager. A ReadOnly lock blocks resource updates and deletion until an authorized person removes it. This can affect operations that appear read-like but use a management POST request. It does not generally block data-plane changes, such as modifying data inside a database. The clarified statement refers to resource management, not every possible operation on the service's contents.",
    "optionExplanations": {
      "A": "Correct. Yes, for management operations through Azure Resource Manager. A ReadOnly lock blocks resource updates and deletion until an authorized person removes it. This can affect operations that appear read-like but use a management POST request. It does not generally block data-plane changes, such as modifying data inside a database. The clarified statement refers to resource management, not every possible operation on the service's contents.",
      "B": "Incorrect. The statement is true. Yes, for management operations through Azure Resource Manager. A ReadOnly lock blocks resource updates and deletion until an authorized person removes it. This can affect operations that appear read-like but use a management POST request. It does not generally block data-plane changes, such as modifying data inside a database. The clarified statement refers to resource management, not every possible operation on the service's contents."
    },
    "keyClue": "ReadOnly lock on ARM management changes.",
    "mentalModel": "Control plane: configure resource\nData plane: use contents",
    "examTip": "Management locks protect the control plane, not every data operation.",
    "learnReference": "Microsoft Learn: Resource locks",
    "objective": "Describe Resource locks",
    "subtopic": "Resource locks",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "resource-locks"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Yes",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-GOVE-020",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Monitoring",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "A team wants to be notified when CPU usage exceeds a threshold and then investigate logs. Which service should be the starting point?",
    "options": [
      {
        "id": "A",
        "text": "Azure Monitor"
      },
      {
        "id": "B",
        "text": "Azure Advisor"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      },
      {
        "id": "D",
        "text": "Microsoft Defender for Cloud"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A CPU threshold is a workload metric, so an Azure Monitor alert can evaluate it and notify the team. Operators can then use relevant collected logs for investigation. The monitoring data must be configured and available; an alert does not diagnose every cause by itself. Service Health reports Microsoft-side incidents, Advisor suggests improvements, and Defender for Cloud evaluates security rather than being the main CPU-threshold workflow.\n\nAzure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.\n\nAdvisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
    "optionExplanations": {
      "A": "Correct. Azure Monitor collects and analyzes telemetry, including metrics, logs, and application monitoring data. Alerts can notify operators of conditions. Its purpose is understanding workloads, not reporting only Microsoft platform incidents.",
      "B": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "C": "Incorrect. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "D": "Incorrect. Defender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users."
    },
    "keyClue": "CPU threshold alert followed by log investigation.",
    "mentalModel": "Metric → alert → investigate logs",
    "examTip": "Metric threshold + log investigation → Azure Monitor.",
    "learnReference": "Microsoft Learn: Monitoring",
    "objective": "Describe Monitoring",
    "subtopic": "Monitoring",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "monitoring"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Azure Monitor",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-061",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Shared responsibility for guest OS",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A developer installs a custom kernel driver on an Azure VM. Who must arrange updates for that VM's guest operating system?",
    "options": [
      {
        "id": "A",
        "text": "Microsoft"
      },
      {
        "id": "B",
        "text": "Customer"
      },
      {
        "id": "C",
        "text": "Azure RBAC"
      },
      {
        "id": "D",
        "text": "Azure Advisor"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A custom driver needs an operating-system environment the customer controls. The customer is responsible for maintaining that guest OS, including compatibility and updates. Microsoft maintains the hosts below it. Azure can offer automation, but delegating execution to a tool is different from transferring responsibility. RBAC defines permissions and Advisor suggests improvements; neither becomes the OS administrator.\n\nThe customer manages the VM guest OS, installed software, and access configuration unless a separate managed service takes over a task. Azure can supply patching tools, but that does not remove customer accountability for an IaaS VM.\n\nMicrosoft operates Azure's physical datacenters, host infrastructure, and virtualization platform. Platform responsibility extends further for PaaS and SaaS; customers always retain responsibilities for identities and their data.",
    "optionExplanations": {
      "A": "Incorrect. Microsoft operates Azure's physical datacenters, host infrastructure, and virtualization platform. Platform responsibility extends further for PaaS and SaaS; customers always retain responsibilities for identities and their data.",
      "B": "Correct. The customer manages the VM guest OS, installed software, and access configuration unless a separate managed service takes over a task. Azure can supply patching tools, but that does not remove customer accountability for an IaaS VM.",
      "C": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "D": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service."
    },
    "keyClue": "Custom driver in an Azure VM guest OS.",
    "mentalModel": "Physical host: Microsoft\nGuest OS: customer",
    "examTip": "VM guest OS updates remain a customer responsibility.",
    "learnReference": "Microsoft Learn: Shared responsibility for guest OS",
    "objective": "Describe Shared responsibility for guest OS",
    "subtopic": "Shared responsibility for guest OS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "shared-responsibility-for-guest-os"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Customer",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-062",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Shared responsibility for physical datacenters",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company deploys Azure VMs. Who is responsible for securing access to the physical Azure datacenter buildings?",
    "options": [
      {
        "id": "A",
        "text": "Customer"
      },
      {
        "id": "B",
        "text": "Microsoft"
      },
      {
        "id": "C",
        "text": "Azure RBAC"
      },
      {
        "id": "D",
        "text": "Managed identity"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The buildings, physical hosts, and underlying facility security are part of the Azure platform operated by Microsoft. The company does not need to employ staff to guard Microsoft's datacenter entrances. Its responsibilities instead include identities, permissions, guest OS configuration, and data. A managed identity or RBAC role handles logical access, not physical building operations.\n\nMicrosoft operates Azure's physical datacenters, host infrastructure, and virtualization platform. Platform responsibility extends further for PaaS and SaaS; customers always retain responsibilities for identities and their data.\n\nThe customer manages the VM guest OS, installed software, and access configuration unless a separate managed service takes over a task. Azure can supply patching tools, but that does not remove customer accountability for an IaaS VM.",
    "optionExplanations": {
      "A": "Incorrect. The customer manages the VM guest OS, installed software, and access configuration unless a separate managed service takes over a task. Azure can supply patching tools, but that does not remove customer accountability for an IaaS VM.",
      "B": "Correct. Microsoft operates Azure's physical datacenters, host infrastructure, and virtualization platform. Platform responsibility extends further for PaaS and SaaS; customers always retain responsibilities for identities and their data.",
      "C": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "D": "Incorrect. A managed identity gives an Azure workload an identity whose credentials Azure manages. Applications can obtain tokens without embedding secrets. The identity still needs suitable permissions on the target resource."
    },
    "keyClue": "Physical Azure datacenter buildings.",
    "mentalModel": "Physical facility → provider\nWorkload access/data → shared/customer",
    "examTip": "Physical Azure infrastructure is Microsoft's responsibility.",
    "learnReference": "Microsoft Learn: Shared responsibility for physical datacenters",
    "objective": "Describe Shared responsibility for physical datacenters",
    "subtopic": "Shared responsibility for physical datacenters",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "shared-responsibility-for-physical-datacenters"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Microsoft",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-063",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Public cloud",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A research group rents Azure compute from a provider that serves many organizations. Access to its datasets remains restricted. Which deployment model is being used?",
    "options": [
      {
        "id": "A",
        "text": "Private cloud"
      },
      {
        "id": "B",
        "text": "Hybrid cloud"
      },
      {
        "id": "C",
        "text": "Public cloud"
      },
      {
        "id": "D",
        "text": "SaaS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The deployment runs on a third-party cloud platform offered to many customers, so it is public cloud. Public describes the provider's service model and availability to customers, not the visibility of each dataset. Authentication and network controls still protect private data. No private or on-premises integration is specified, and the group is renting compute rather than consuming a finished software application.\n\nPublic cloud services run on infrastructure operated by a third-party provider and are offered to many customers. Azure is a public cloud; public here does not mean that everyone can access a customer's private data.\n\nA private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack.",
    "optionExplanations": {
      "A": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack.",
      "B": "Incorrect. Hybrid cloud integrates public cloud services with on-premises or private infrastructure. The organization operates across both environments. IaaS, PaaS, and SaaS instead describe the division of service management responsibilities.",
      "C": "Correct. Public cloud services run on infrastructure operated by a third-party provider and are offered to many customers. Azure is a public cloud; public here does not mean that everyone can access a customer's private data.",
      "D": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data."
    },
    "keyClue": "Provider serves many organizations while datasets remain restricted.",
    "mentalModel": "Public infrastructure service ≠ anonymous data access",
    "examTip": "Public cloud does not mean public customer data.",
    "learnReference": "Microsoft Learn: Public cloud",
    "objective": "Describe Public cloud",
    "subtopic": "Public cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "public-cloud"
    ],
    "visual": {
      "type": "cloud-deployment-models",
      "highlight": "Public cloud",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-064",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure regions",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company is choosing where to deploy a regional Azure database to reduce network distance from users in Europe. Which choice sets the geographic deployment location?",
    "options": [
      {
        "id": "A",
        "text": "Resource group"
      },
      {
        "id": "B",
        "text": "Management group"
      },
      {
        "id": "C",
        "text": "Subscription"
      },
      {
        "id": "D",
        "text": "Azure region"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "A regional service is deployed into an Azure region, which is a geographic area. Selecting a nearby suitable region can reduce latency and support data-location requirements. The company must check that the service is offered there. A subscription handles billing/access, and resource groups and management groups organize administration; none is a substitute for choosing the service's deployment region.\n\nAn Azure region is a geographic area with datacenters connected through a low-latency network. Supported regional services are deployed there. A region differs from an Availability Zone within it and from a logical resource-management scope.\n\nA resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
    "optionExplanations": {
      "A": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "B": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "C": "Incorrect. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
      "D": "Correct. An Azure region is a geographic area with datacenters connected through a low-latency network. Supported regional services are deployed there. A region differs from an Availability Zone within it and from a logical resource-management scope."
    },
    "keyClue": "Geographic location near users.",
    "mentalModel": "Geography: region\nAdministration: subscription/group",
    "examTip": "Choose a region for location; choose scopes for administration.",
    "learnReference": "Microsoft Learn: Azure regions",
    "objective": "Describe Azure regions",
    "subtopic": "Azure regions",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-regions"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Azure region",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-065",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Region pairs",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "An architect claims every Azure region has a paired region and that a pairing automatically replicates every application. Which assessment is correct?",
    "options": [
      {
        "id": "A",
        "text": "Both claims are correct"
      },
      {
        "id": "B",
        "text": "Not every region is paired, and app replication must be designed"
      },
      {
        "id": "C",
        "text": "Every region is paired, but billing enables replication"
      },
      {
        "id": "D",
        "text": "Zones and region pairs are identical"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Some Azure regions are paired and others are not. A pairing also does not automatically copy every application or provide application failover. Services and workloads need their own supported replication and recovery configuration. This is a fundamental distinction between platform geography and a working disaster-recovery design. Availability Zones operate inside a region; a region pair concerns separate regions.\n\nAzure includes unpaired regions. Replication and recovery depend on the service and application design, not a blanket guarantee from regional geography.\n\nThe claims are too broad: some regions are unpaired, and application replication is not automatically supplied merely by a region pairing.",
    "optionExplanations": {
      "A": "Incorrect. The claims are too broad: some regions are unpaired, and application replication is not automatically supplied merely by a region pairing.",
      "B": "Correct. Azure includes unpaired regions. Replication and recovery depend on the service and application design, not a blanket guarantee from regional geography.",
      "C": "Incorrect. A billing configuration does not enable generic app replication, and the premise that every region is paired is false.",
      "D": "Incorrect. Zones are locations inside a region; pairs involve separate regions. They operate at different geographic failure boundaries."
    },
    "keyClue": "Every region; automatically replicates every application.",
    "mentalModel": "Regional relationship ≠ configured workload replication",
    "examTip": "A region pair is not an automatic disaster-recovery plan.",
    "learnReference": "Microsoft Learn: Region pairs",
    "objective": "Describe Region pairs",
    "subtopic": "Region pairs",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "region-pairs"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Not every region is paired, and app replication must be designed",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-066",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Availability Zones",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A business deploys three web VMs across supported Azure Availability Zones. What failure boundary is this design primarily separating?",
    "options": [
      {
        "id": "A",
        "text": "Billing accounts"
      },
      {
        "id": "B",
        "text": "Individual user identities"
      },
      {
        "id": "C",
        "text": "Datacenter power, cooling, and networking dependencies"
      },
      {
        "id": "D",
        "text": "Entire geographic regions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Availability Zones isolate physical location dependencies within one region. If one zone suffers a facility outage, instances in other zones can continue serving, provided routing and application design support it. They are not separate subscriptions and do not protect by themselves against an outage affecting the whole region. Multi-region recovery requires additional design.\n\nSeparating these facility dependencies is the purpose of physically distinct zones within a supported region.\n\nBilling accounts organize commercial charging arrangements. They do not separate physical power or cooling dependencies for workloads.",
    "optionExplanations": {
      "A": "Incorrect. Billing accounts organize commercial charging arrangements. They do not separate physical power or cooling dependencies for workloads.",
      "B": "Incorrect. User identities represent callers for authentication and access control. Zone distribution is a physical availability measure, not identity separation.",
      "C": "Correct. Separating these facility dependencies is the purpose of physically distinct zones within a supported region.",
      "D": "Incorrect. Whole-region separation needs a multi-region design. Multiple zones can still be inside one geographic region."
    },
    "keyClue": "VMs spread across zones in one region.",
    "mentalModel": "One region → multiple separated zones",
    "examTip": "Zones isolate datacenter dependencies; regions address geographic separation.",
    "learnReference": "Microsoft Learn: Availability Zones",
    "objective": "Describe Availability Zones",
    "subtopic": "Availability Zones",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "availability-zones"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Datacenter power, cooling, and networking dependencies",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-067",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Availability Sets",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Two VMs already share an Availability Set. Which additional guarantee should the architect NOT assume?",
    "options": [
      {
        "id": "A",
        "text": "Their VM update groups can differ"
      },
      {
        "id": "B",
        "text": "Their fault domains can differ"
      },
      {
        "id": "C",
        "text": "Azure distributes their maintenance groups"
      },
      {
        "id": "D",
        "text": "They are necessarily in separate Availability Zones"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "An Availability Set uses fault and update domains to reduce shared hardware and planned-maintenance risks. It does not mean the VMs are deployed in separate Availability Zones. The wording asks for the unsupported assumption rather than a benefit of the set. Zone placement is a separate availability design choice. This avoids confusing logical maintenance grouping with datacenter-level location separation.\n\nAn Availability Set does not ensure separate zone placement; zones are a distinct deployment capability.\n\nAvailability Sets use update domains to separate groups that undergo planned maintenance.",
    "optionExplanations": {
      "A": "Incorrect. Availability Sets use update domains to separate groups that undergo planned maintenance.",
      "B": "Incorrect. Availability Sets distribute VMs across fault domains to reduce shared hardware dependency.",
      "C": "Incorrect. Update-domain placement supports staggering maintenance rather than updating all set members together.",
      "D": "Correct. An Availability Set does not ensure separate zone placement; zones are a distinct deployment capability."
    },
    "keyClue": "NOT assume separate Availability Zones.",
    "mentalModel": "Set: fault/update groups\nZones: physical locations",
    "examTip": "Availability Set membership does not imply zone separation.",
    "learnReference": "Microsoft Learn: Availability Sets",
    "objective": "Describe Availability Sets",
    "subtopic": "Availability Sets",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "availability-sets"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "They are necessarily in separate Availability Zones",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-068",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Microsoft Entra ID",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A user can sign in to the Azure portal but receives an access-denied error when creating a VM. Which statement best explains the distinction?",
    "options": [
      {
        "id": "A",
        "text": "Entra sign-in grants Owner automatically"
      },
      {
        "id": "B",
        "text": "A resource tag must authenticate the user"
      },
      {
        "id": "C",
        "text": "Entra authentication can succeed while Azure RBAC lacks the required permission"
      },
      {
        "id": "D",
        "text": "A DNS zone is the user's permission store"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The successful sign-in establishes the user's identity. It does not automatically authorize creation of resources. Azure RBAC evaluates applicable role assignments and their scope for the requested VM operation. The user may need an appropriate role, while administrators should follow least privilege. Neither tagging nor DNS performs this authorization. A sign-in failure and a resource-permission failure are different problems.\n\nIdentity verification and action authorization are separate decisions. A signed-in caller can still lack a VM creation role.\n\nSigning in establishes identity but does not automatically grant the Owner role or permission to create resources.",
    "optionExplanations": {
      "A": "Incorrect. Signing in establishes identity but does not automatically grant the Owner role or permission to create resources.",
      "B": "Incorrect. Tags are resource metadata, such as department labels, and cannot verify user credentials.",
      "C": "Correct. Identity verification and action authorization are separate decisions. A signed-in caller can still lack a VM creation role.",
      "D": "Incorrect. DNS zones hold naming records. Azure RBAC role assignments determine Azure resource permissions."
    },
    "keyClue": "Signed in successfully; create operation denied.",
    "mentalModel": "Sign-in token → RBAC action check → allow/deny",
    "examTip": "Entra proves identity; RBAC grants Azure resource actions.",
    "learnReference": "Microsoft Learn: Microsoft Entra ID",
    "objective": "Describe Microsoft Entra ID",
    "subtopic": "Microsoft Entra ID",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "microsoft-entra-id"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Entra authentication can succeed while Azure RBAC lacks the required permission",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-069",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Multi-factor authentication",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which sign-in combination uses two different authentication factor categories?",
    "options": [
      {
        "id": "A",
        "text": "Password plus a second password"
      },
      {
        "id": "B",
        "text": "Password plus an authenticator approval"
      },
      {
        "id": "C",
        "text": "PIN plus a security question only"
      },
      {
        "id": "D",
        "text": "Username plus password"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A password represents something the user knows, while an authenticator approval can demonstrate possession of a registered device. Using different factor categories makes this multifactor authentication. Two knowledge secrets are not two different categories. A username identifies an account and is not itself a second authentication factor. MFA strengthens sign-in but does not replace the need for resource authorization.\n\nThis can combine something the user knows with possession of a registered authenticator, supplying different factor categories.\n\nBoth are knowledge evidence. Two passwords do not represent two different authentication factor categories.",
    "optionExplanations": {
      "A": "Incorrect. Both are knowledge evidence. Two passwords do not represent two different authentication factor categories.",
      "B": "Correct. This can combine something the user knows with possession of a registered authenticator, supplying different factor categories.",
      "C": "Incorrect. Both are knowledge secrets in this combination, so the pair alone does not demonstrate different factor categories.",
      "D": "Incorrect. A username identifies the account; it is not itself proof from a second factor category."
    },
    "keyClue": "Two different factor categories.",
    "mentalModel": "Know: password\nHave: registered authenticator",
    "examTip": "MFA needs different factor types, not simply two prompts.",
    "learnReference": "Microsoft Learn: Multi-factor authentication",
    "objective": "Describe Multi-factor authentication",
    "subtopic": "Multi-factor authentication",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "multi-factor-authentication"
    ]
  },
  {
    "id": "AZ900-NEW-070",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Passwordless authentication",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company wants staff to sign in using a FIDO2 passkey with local device verification instead of typing a password. Which approach is this?",
    "options": [
      {
        "id": "A",
        "text": "Passwordless authentication"
      },
      {
        "id": "B",
        "text": "Anonymous access"
      },
      {
        "id": "C",
        "text": "Resource locking"
      },
      {
        "id": "D",
        "text": "Azure Policy tagging"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A passkey lets a user authenticate without sending a typed password. Possession of the credential and local verification, such as a biometric or PIN, support the sign-in. Passwordless is still authentication, so it is not anonymous access. Resource locks protect management operations and resource policies enforce standards; neither supplies this user sign-in method.\n\nPasswordless authentication uses methods such as passkeys or Windows Hello instead of typing a password. These methods can use possession and local biometric or PIN verification; passwordless does not mean unauthenticated.\n\nAnonymous access allows use without an authenticated identity. Passwordless sign-in still verifies a user using another credential.",
    "optionExplanations": {
      "A": "Correct. Passwordless authentication uses methods such as passkeys or Windows Hello instead of typing a password. These methods can use possession and local biometric or PIN verification; passwordless does not mean unauthenticated.",
      "B": "Incorrect. Anonymous access allows use without an authenticated identity. Passwordless sign-in still verifies a user using another credential.",
      "C": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Incorrect. A resource policy can audit or enforce tags. This does not implement user passkey authentication."
    },
    "keyClue": "Passkey instead of typing a password.",
    "mentalModel": "Credential + local verification → authenticated sign-in",
    "examTip": "Passwordless removes the typed password, not identity verification.",
    "learnReference": "Microsoft Learn: Passwordless authentication",
    "objective": "Describe Passwordless authentication",
    "subtopic": "Passwordless authentication",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "passwordless-authentication"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Passwordless authentication",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-071",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Hybrid cloud",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A manufacturer must retain factory equipment control on premises but wants connected Azure analytics. Which deployment model describes the combined design?",
    "options": [
      {
        "id": "A",
        "text": "SaaS"
      },
      {
        "id": "B",
        "text": "Public cloud only"
      },
      {
        "id": "C",
        "text": "Hybrid cloud"
      },
      {
        "id": "D",
        "text": "Private cloud only"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Factory control remains in the company's facilities while analytics runs in Azure. The connected combination is hybrid cloud. Keeping part of the workload local can support constraints such as latency or existing equipment, while the cloud supplies another service. This does not mean every component has the same management model. The analytics portion could use IaaS or PaaS within the overall hybrid deployment.\n\nHybrid cloud integrates public cloud services with on-premises or private infrastructure. The organization operates across both environments. IaaS, PaaS, and SaaS instead describe the division of service management responsibilities.\n\nSoftware as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.",
    "optionExplanations": {
      "A": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data.",
      "B": "Incorrect. Public cloud services run on infrastructure operated by a third-party provider and are offered to many customers. Azure is a public cloud; public here does not mean that everyone can access a customer's private data.",
      "C": "Correct. Hybrid cloud integrates public cloud services with on-premises or private infrastructure. The organization operates across both environments. IaaS, PaaS, and SaaS instead describe the division of service management responsibilities.",
      "D": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack."
    },
    "keyClue": "Factory systems stay on premises; analytics uses Azure.",
    "mentalModel": "Factory datacenter ↔ Azure analytics",
    "examTip": "Connected local systems plus Azure services → hybrid cloud.",
    "learnReference": "Microsoft Learn: Hybrid cloud",
    "objective": "Describe Hybrid cloud",
    "subtopic": "Hybrid cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "hybrid-cloud"
    ],
    "visual": {
      "type": "cloud-deployment-models",
      "highlight": "Hybrid cloud",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-072",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Consumption billing",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "An Azure VM is running overnight but receives no user requests. Which billing assumption is safest?",
    "options": [
      {
        "id": "A",
        "text": "No requests means no possible charge"
      },
      {
        "id": "B",
        "text": "Only DNS requests can be charged"
      },
      {
        "id": "C",
        "text": "An active provisioned VM can still incur compute charges"
      },
      {
        "id": "D",
        "text": "Consumption billing makes allocated storage free"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "An allocated running VM consumes provisioned compute capacity even if application request volume is zero. Billing depends on the service's charge units rather than a universal rule about requests. Storage can also continue costing money after compute is stopped. Operators must understand resource state and each service's pricing before expecting savings. Consumption-based pricing is not a blanket idle-resource exemption.\n\nProvisioned compute remains chargeable while running, even when app traffic is idle.\n\nA VM can consume provisioned compute and incur charges even when its application receives no requests.",
    "optionExplanations": {
      "A": "Incorrect. A VM can consume provisioned compute and incur charges even when its application receives no requests.",
      "B": "Incorrect. Azure charges depend on many service-specific units, including compute time and storage, not just DNS activity.",
      "C": "Correct. Provisioned compute remains chargeable while running, even when app traffic is idle.",
      "D": "Incorrect. Stored data and allocated disks can incur charges independent of application request volume."
    },
    "keyClue": "Running VM with no user requests.",
    "mentalModel": "Resource allocation + pricing units → bill",
    "examTip": "Idle application activity does not imply an unbilled provisioned resource.",
    "learnReference": "Microsoft Learn: Consumption billing",
    "objective": "Describe Consumption billing",
    "subtopic": "Consumption billing",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "consumption-billing"
    ]
  },
  {
    "id": "AZ900-NEW-073",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "CapEx planning",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company buys physical servers for a datacenter refresh and records them as long-lived assets. Which category best describes the up-front purchase?",
    "options": [
      {
        "id": "A",
        "text": "Azure reservation"
      },
      {
        "id": "B",
        "text": "OpEx"
      },
      {
        "id": "C",
        "text": "Consumption billing"
      },
      {
        "id": "D",
        "text": "CapEx"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "The company is acquiring equipment it will own and use over several years. That up-front asset purchase is capital expenditure. Operating expenditure describes ongoing operating/service costs. Buying a reservation commits to a cloud pricing benefit rather than purchasing the provider's physical hosts. The distinction is about spending structure, not whether a system happens to be modern or cloud-connected.\n\nCapital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.\n\nAn Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free.",
    "optionExplanations": {
      "A": "Incorrect. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free.",
      "B": "Incorrect. Operating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.",
      "C": "Incorrect. Consumption billing charges according to usage of a service, such as storage volume or compute time. Prices and units vary by service. Unused or idle provisioned resources can still incur charges.",
      "D": "Correct. Capital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement."
    },
    "keyClue": "Owns purchased long-lived servers.",
    "mentalModel": "Own equipment: capital asset\nRent service: operating cost",
    "examTip": "Up-front hardware asset purchase → CapEx.",
    "learnReference": "Microsoft Learn: CapEx planning",
    "objective": "Describe CapEx planning",
    "subtopic": "CapEx planning",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "capex-planning"
    ],
    "visual": {
      "type": "capital-operating-cost",
      "highlight": "CapEx",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-074",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure resources",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Which item is an example of an individual Azure resource rather than a resource-management container?",
    "options": [
      {
        "id": "A",
        "text": "Subscription"
      },
      {
        "id": "B",
        "text": "Virtual machine"
      },
      {
        "id": "C",
        "text": "Management group"
      },
      {
        "id": "D",
        "text": "Resource group"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A VM is a provisioned service instance and is managed as an Azure resource. It belongs to a resource group, which belongs to a subscription. Management groups organize subscriptions above that. This hierarchy helps choose the scope of access, governance, and lifecycle tasks. Creating another resource group does not create a VM or add compute capacity.\n\nAzure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.\n\nAn Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
    "optionExplanations": {
      "A": "Incorrect. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
      "B": "Correct. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "C": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "D": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy."
    },
    "keyClue": "Individual provisioned service instance.",
    "mentalModel": "Management group → subscription → group → VM",
    "examTip": "A VM is a resource; groups and subscriptions organize resources.",
    "learnReference": "Microsoft Learn: Azure resources",
    "objective": "Describe Azure resources",
    "subtopic": "Azure resources",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-resources"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Virtual machine",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-075",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Resource groups",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A team deletes a resource group containing a web app and storage account after the project ends. What is the expected management effect?",
    "options": [
      {
        "id": "A",
        "text": "Only the group's label is removed"
      },
      {
        "id": "B",
        "text": "Both resources move to another subscription"
      },
      {
        "id": "C",
        "text": "Resources in the group are targeted for deletion"
      },
      {
        "id": "D",
        "text": "All subscriptions in the tenant are deleted"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Deleting a resource group normally deletes the resources inside it, subject to protections or dependencies that can block the operation. This is why resources with a shared lifecycle often belong together and why deletion needs care. It is not a simple label removal or an automatic move. The operation does not delete unrelated subscriptions. Backups and locks should be considered before ending a production project.\n\nResource-group deletion normally deletes contained resources, unless locks or other constraints prevent completion.\n\nA resource group is a lifecycle container, not merely a tag. Deleting it targets its contained resources.",
    "optionExplanations": {
      "A": "Incorrect. A resource group is a lifecycle container, not merely a tag. Deleting it targets its contained resources.",
      "B": "Incorrect. Deleting a group does not migrate resources. Moving them requires a separate supported operation.",
      "C": "Correct. Resource-group deletion normally deletes contained resources, unless locks or other constraints prevent completion.",
      "D": "Incorrect. A resource-group operation is below subscription scope and does not delete unrelated subscriptions."
    },
    "keyClue": "Delete group at the end of the project's lifecycle.",
    "mentalModel": "Delete group → delete contained resources",
    "examTip": "Resource-group deletion targets its contained resources.",
    "learnReference": "Microsoft Learn: Resource groups",
    "objective": "Describe Resource groups",
    "subtopic": "Resource groups",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "resource-groups"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Resources in the group are targeted for deletion",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-076",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Subscriptions",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "An enterprise wants development and production resource charges grouped into separate administrative billing scopes. Which Azure construct can provide those scopes?",
    "options": [
      {
        "id": "A",
        "text": "Availability Zone"
      },
      {
        "id": "B",
        "text": "Subnet"
      },
      {
        "id": "C",
        "text": "Azure region"
      },
      {
        "id": "D",
        "text": "Subscription"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Separate subscriptions can give the organization distinct resource, access, and cost-management boundaries for development and production. Each subscription can contain many resource groups. Regions and zones describe location, while a subnet divides network address space. Those physical or network choices do not replace an administrative subscription boundary. Higher-level governance can still be applied to both subscriptions using a management group.\n\nAn Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.\n\nAvailability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
    "optionExplanations": {
      "A": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
      "B": "Incorrect. A subnet divides a VNet's address space into smaller network segments. Resources attach to subnets for placement and network controls. A subnet is not a billing boundary.",
      "C": "Incorrect. An Azure region is a geographic area with datacenters connected through a low-latency network. Supported regional services are deployed there. A region differs from an Availability Zone within it and from a logical resource-management scope.",
      "D": "Correct. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter."
    },
    "keyClue": "Separate billing/access scopes for environments.",
    "mentalModel": "Management group\n→ development subscription\n→ production subscription",
    "examTip": "Separate subscription scopes help divide environment administration and charges.",
    "learnReference": "Microsoft Learn: Subscriptions",
    "objective": "Describe Subscriptions",
    "subtopic": "Subscriptions",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "subscriptions"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Subscription",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-077",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Management groups",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A policy is assigned at a management group containing several subscriptions. What is the usual scope effect?",
    "options": [
      {
        "id": "A",
        "text": "It affects only the management group's display name"
      },
      {
        "id": "B",
        "text": "Applicable child subscriptions inherit the assignment"
      },
      {
        "id": "C",
        "text": "It automatically changes every user's password"
      },
      {
        "id": "D",
        "text": "It creates an Availability Zone"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A management group is a parent scope for its subscriptions. Policy assignments there can apply to resources under the child subscriptions, with configured exclusions and exemptions considered. This lets an enterprise establish common standards without assigning each rule separately in every subscription. It does not create physical infrastructure or change sign-in credentials. Understanding parent-child scopes is central to governance at scale.\n\nManagement groups are parent scopes, so assignments can apply below them, with relevant exclusions and exemptions.\n\nPolicy assignments evaluate applicable resources under the assigned scope, not merely the parent label.",
    "optionExplanations": {
      "A": "Incorrect. Policy assignments evaluate applicable resources under the assigned scope, not merely the parent label.",
      "B": "Correct. Management groups are parent scopes, so assignments can apply below them, with relevant exclusions and exemptions.",
      "C": "Incorrect. Resource governance assignments do not perform automatic directory-password changes.",
      "D": "Incorrect. Assigning a policy cannot create a new physical datacenter location or availability zone."
    },
    "keyClue": "Policy assigned above several subscriptions.",
    "mentalModel": "Parent assignment → child subscription resources",
    "examTip": "Parent management-group governance can flow down to child subscriptions.",
    "learnReference": "Microsoft Learn: Management groups",
    "objective": "Describe Management groups",
    "subtopic": "Management groups",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "management-groups"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "Applicable child subscriptions inherit the assignment",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-078",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Conditional Access",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company wants to require MFA only when employees sign in from an unfamiliar location or fail a device-compliance check. Which capability evaluates these conditions?",
    "options": [
      {
        "id": "A",
        "text": "Azure RBAC"
      },
      {
        "id": "B",
        "text": "Azure DNS"
      },
      {
        "id": "C",
        "text": "Conditional Access"
      },
      {
        "id": "D",
        "text": "Resource lock"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Conditional Access evaluates sign-in context and decides whether to allow access, block it, or require controls such as MFA. The scenario needs a policy decision based on location or device signals, rather than simply enabling an extra authentication factor everywhere. Azure RBAC controls resource actions after identity is established. Network naming and management locks do not evaluate user sign-in risk or device compliance.\n\nConditional Access evaluates sign-in signals such as user, location, device, and risk, then requires controls or blocks access. MFA can be one required control; it is not the whole conditional decision engine.\n\nAzure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
    "optionExplanations": {
      "A": "Incorrect. Azure role-based access control assigns an identity a role at a scope. The role lists allowed actions; the scope limits where they apply. RBAC is authorization rather than a resource-configuration compliance rule.",
      "B": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "C": "Correct. Conditional Access evaluates sign-in signals such as user, location, device, and risk, then requires controls or blocks access. MFA can be one required control; it is not the whole conditional decision engine.",
      "D": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation."
    },
    "keyClue": "MFA requirement depends on sign-in location or device state.",
    "mentalModel": "Sign-in signals → access policy → grant/block/require MFA",
    "examTip": "Conditional Access decides when controls such as MFA are required.",
    "learnReference": "Microsoft Learn: Conditional Access",
    "objective": "Describe Conditional Access",
    "subtopic": "Conditional Access",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "conditional-access"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Conditional Access",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-079",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "External identities",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A supplier's employee needs controlled access to a company's collaboration resources while using an existing external identity. Which capability is intended for this scenario?",
    "options": [
      {
        "id": "A",
        "text": "Resource group"
      },
      {
        "id": "B",
        "text": "Microsoft Entra External ID collaboration"
      },
      {
        "id": "C",
        "text": "Availability Set"
      },
      {
        "id": "D",
        "text": "Azure Policy allowed locations"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "External identity collaboration lets an organization work with people whose identities originate outside it. A guest can use an existing account while the host organization governs what it may access. This does not require making the guest an unrestricted administrator or disabling authentication. Resource grouping and physical availability services do not implement identity collaboration.\n\nMicrosoft Entra External ID supports collaboration and identity scenarios involving people outside an organization. Guest collaborators can use their existing identities and receive controlled access; they do not need unrestricted tenant permissions.\n\nA resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
    "optionExplanations": {
      "A": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "B": "Correct. Microsoft Entra External ID supports collaboration and identity scenarios involving people outside an organization. Guest collaborators can use their existing identities and receive controlled access; they do not need unrestricted tenant permissions.",
      "C": "Incorrect. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
      "D": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC."
    },
    "keyClue": "Outside collaborator using an existing identity.",
    "mentalModel": "External identity → host authorization → permitted resources",
    "examTip": "External collaborator with governed access → Entra External ID.",
    "learnReference": "Microsoft Learn: External identities",
    "objective": "Describe External identities",
    "subtopic": "External identities",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "external-identities"
    ],
    "visual": {
      "type": "identity-access",
      "highlight": "Microsoft Entra External ID collaboration",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-080",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure RBAC",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "An administrator grants a team permission to read resources in one resource group only. What combination is central to that Azure RBAC assignment?",
    "options": [
      {
        "id": "A",
        "text": "Identity, role, and scope"
      },
      {
        "id": "B",
        "text": "Region, zone, and datacenter"
      },
      {
        "id": "C",
        "text": "Tag, budget, and reservation"
      },
      {
        "id": "D",
        "text": "Password, disk, and subnet"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "An RBAC assignment connects a security principal, a role definition, and a scope. The principal is who receives access, the role lists permitted actions, and the resource-group scope sets where they apply. A Reader role at that group can permit viewing without granting write operations throughout a subscription. Geographic locations and cost labels are separate concerns.\n\nAn RBAC role assignment links who gets access, which actions are permitted, and where those actions apply.\n\nThese describe geographic and physical locations, not the three components of an RBAC assignment.",
    "optionExplanations": {
      "A": "Correct. An RBAC role assignment links who gets access, which actions are permitted, and where those actions apply.",
      "B": "Incorrect. These describe geographic and physical locations, not the three components of an RBAC assignment.",
      "C": "Incorrect. These support classification and cost management; they do not define an identity's allowed actions.",
      "D": "Incorrect. A password is an authentication secret, a disk is storage, and a subnet is networking; they do not form an RBAC assignment."
    },
    "keyClue": "Read access limited to one resource group.",
    "mentalModel": "Who + allowed actions + where = role assignment",
    "examTip": "RBAC assignment = identity + role + scope.",
    "learnReference": "Microsoft Learn: Azure RBAC",
    "objective": "Describe Azure RBAC",
    "subtopic": "Azure RBAC",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-rbac"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Identity, role, and scope",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-081",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "OpEx spending",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A finance team wants to pay monthly for cloud services instead of purchasing servers. Which expenditure category best matches those ongoing service charges?",
    "options": [
      {
        "id": "A",
        "text": "OpEx"
      },
      {
        "id": "B",
        "text": "CapEx"
      },
      {
        "id": "C",
        "text": "Resource lock"
      },
      {
        "id": "D",
        "text": "Availability Set"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Monthly cloud-service charges are operating expenditure rather than the purchase of owned physical equipment. This can spread spending over time and let the organization adjust capacity. It does not remove the need to manage waste or forecast costs. Capital expenditure would cover the up-front asset purchase; availability and lock settings are resource controls, not financial categories.\n\nOperating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.\n\nCapital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.",
    "optionExplanations": {
      "A": "Correct. Operating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.",
      "B": "Incorrect. Capital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.",
      "C": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Incorrect. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones."
    },
    "keyClue": "Monthly service charges rather than owned servers.",
    "mentalModel": "Rent service → ongoing expense",
    "examTip": "Ongoing cloud service charges → OpEx.",
    "learnReference": "Microsoft Learn: OpEx spending",
    "objective": "Describe OpEx spending",
    "subtopic": "OpEx spending",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "opex-spending"
    ],
    "visual": {
      "type": "capital-operating-cost",
      "highlight": "OpEx",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-082",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "High availability",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "A company needs users to keep accessing its app during the failure of one app instance. Which goal should guide redundant instances and health-based traffic routing?",
    "options": [
      {
        "id": "A",
        "text": "Capital expenditure"
      },
      {
        "id": "B",
        "text": "High availability"
      },
      {
        "id": "C",
        "text": "Data classification"
      },
      {
        "id": "D",
        "text": "Guest collaboration"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The goal is to limit interruption when a local component fails. Multiple app instances and health-aware routing help keep the service available to users. They must be complemented by suitable data and state design; a second frontend alone may leave a single database dependency. This is an availability goal rather than a financial model or a data-catalog task.\n\nHigh availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail.\n\nCapital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.",
    "optionExplanations": {
      "A": "Incorrect. Capital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement.",
      "B": "Correct. High availability aims to keep a service usable with minimal downtime. Redundant components and failover reduce interruptions. It is a design outcome, not a promise that an application can never fail.",
      "C": "Incorrect. Microsoft Purview provides data governance, discovery, classification, and supported compliance capabilities. It helps understand and manage information across data estates. Azure Policy focuses on resource governance.",
      "D": "Incorrect. Microsoft Entra External ID supports collaboration and identity scenarios involving people outside an organization. Guest collaborators can use their existing identities and receive controlled access; they do not need unrestricted tenant permissions."
    },
    "keyClue": "Users keep accessing the app when one instance fails.",
    "mentalModel": "Healthy redundant instances → continued service",
    "examTip": "Continued user access through local failures → high availability.",
    "learnReference": "Microsoft Learn: High availability",
    "objective": "Describe High availability",
    "subtopic": "High availability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "high-availability"
    ]
  },
  {
    "id": "AZ900-NEW-083",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Disaster recovery",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "After a regional disaster, a company plans to restore its application from backups into another region. Which discipline does this describe?",
    "options": [
      {
        "id": "A",
        "text": "Resource tagging"
      },
      {
        "id": "B",
        "text": "Vertical scaling"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Disaster recovery"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Restoring service after a major disruption is disaster recovery. Backups, alternative-region capacity, and tested procedures support that recovery. The team should decide how much downtime and recent data loss it can accept. High availability aims to reduce interruptions during ordinary failures; recovery addresses bringing the service back after a larger event. Increasing one VM's size does not supply a recovery process.\n\nDisaster recovery restores service after a major interruption, using backups, replication, failover, and recovery procedures. Recovery objectives describe acceptable downtime and data loss. It differs from avoiding small local interruptions.\n\nA tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule.",
    "optionExplanations": {
      "A": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule.",
      "B": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
      "C": "Incorrect. Authentication verifies an identity using credentials or other evidence. Passwords, passkeys, and multifactor sign-in can prove who is signing in. Authentication alone does not grant every resource permission.",
      "D": "Correct. Disaster recovery restores service after a major interruption, using backups, replication, failover, and recovery procedures. Recovery objectives describe acceptable downtime and data loss. It differs from avoiding small local interruptions."
    },
    "keyClue": "Restore service in another region after a disaster.",
    "mentalModel": "Backup/replica → recovery procedure → restored service",
    "examTip": "Recover after a major outage → disaster recovery.",
    "learnReference": "Microsoft Learn: Disaster recovery",
    "objective": "Describe Disaster recovery",
    "subtopic": "Disaster recovery",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "disaster-recovery"
    ],
    "visual": {
      "type": "region-zones",
      "highlight": "Disaster recovery",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-084",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "VM Scale Sets",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A web workload must add or remove similarly configured VM instances automatically as CPU demand changes. Which service is designed to manage that VM group?",
    "options": [
      {
        "id": "A",
        "text": "Availability Set"
      },
      {
        "id": "B",
        "text": "Azure Files"
      },
      {
        "id": "C",
        "text": "VM Scale Sets"
      },
      {
        "id": "D",
        "text": "Azure Policy"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A VM Scale Set manages a collection of VM instances with a common configuration and supports autoscaling integration. This addresses growing or shrinking a VM-based application tier. An Availability Set distributes failure and maintenance dependencies but does not perform that autoscaling job. Files stores shares, and Policy handles governance. The group still needs a workload that can spread traffic and state appropriately.\n\nVirtual Machine Scale Sets manage groups of similarly configured VM instances and can integrate with autoscaling. They are suitable for scaling VM-based workloads; Availability Sets mainly distribute failure dependencies.\n\nAn Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
    "optionExplanations": {
      "A": "Incorrect. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones.",
      "B": "Incorrect. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
      "C": "Correct. Virtual Machine Scale Sets manage groups of similarly configured VM instances and can integrate with autoscaling. They are suitable for scaling VM-based workloads; Availability Sets mainly distribute failure dependencies.",
      "D": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC."
    },
    "keyClue": "Automatically change the number of similar VMs.",
    "mentalModel": "CPU demand → scale rule → VM instance count",
    "examTip": "Autoscaling a VM group → VM Scale Sets.",
    "learnReference": "Microsoft Learn: VM Scale Sets",
    "objective": "Describe VM Scale Sets",
    "subtopic": "VM Scale Sets",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "vm-scale-sets"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "VM Scale Sets",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-085",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Virtual Machines",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A legacy vendor app requires administrator access to Windows and installation of a special service. Which compute service gives the needed guest OS control?",
    "options": [
      {
        "id": "A",
        "text": "Azure App Service"
      },
      {
        "id": "B",
        "text": "Azure Functions"
      },
      {
        "id": "C",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "D",
        "text": "Azure Container Instances"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The vendor's special Windows service needs control of the guest OS. A VM provides that server environment and permits compatible software installation. The customer also assumes configuration and patching work. Managed web and event services expose application-level deployment without unrestricted OS administration. Containers can package applications, but ACI does not offer the full Windows VM administration described.\n\nAzure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.\n\nApp Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
    "optionExplanations": {
      "A": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
      "B": "Incorrect. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "C": "Correct. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "D": "Incorrect. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS."
    },
    "keyClue": "Administrator access to Windows and a custom service.",
    "mentalModel": "VM flexibility ↔ customer OS responsibility",
    "examTip": "Full guest OS administration → VM.",
    "learnReference": "Microsoft Learn: Azure Virtual Machines",
    "objective": "Describe Azure Virtual Machines",
    "subtopic": "Azure Virtual Machines",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-virtual-machines"
    ]
  },
  {
    "id": "AZ900-NEW-086",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure App Service",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team deploys a conventional web API and wants built-in managed web hosting rather than configuring IIS on a VM. Which service is most suitable?",
    "options": [
      {
        "id": "A",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "B",
        "text": "Azure App Service"
      },
      {
        "id": "C",
        "text": "Azure Queue Storage"
      },
      {
        "id": "D",
        "text": "Azure DNS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "App Service supplies a managed web hosting environment for applications and APIs. Developers publish code and configure the app instead of building and maintaining an IIS server in a VM. They still own the application's behavior, configuration, and data. Queue Storage passes messages and DNS resolves names; those supporting services do not host the API execution platform.\n\nApp Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.\n\nAzure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
    "optionExplanations": {
      "A": "Incorrect. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "B": "Correct. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
      "C": "Incorrect. Queue Storage holds messages so application components can exchange work asynchronously. A producer adds a message and a worker processes it later. It is not a file share or a VM disk.",
      "D": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets."
    },
    "keyClue": "Managed web API hosting rather than IIS administration.",
    "mentalModel": "Code deployment → managed web runtime",
    "examTip": "Managed web app/API platform → App Service.",
    "learnReference": "Microsoft Learn: Azure App Service",
    "objective": "Describe Azure App Service",
    "subtopic": "Azure App Service",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-app-service"
    ]
  },
  {
    "id": "AZ900-NEW-087",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Functions",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A storage upload should trigger code that validates the new image and then stops running. Which compute service has a natural trigger-based execution model?",
    "options": [
      {
        "id": "A",
        "text": "Azure Virtual Machines"
      },
      {
        "id": "B",
        "text": "Azure Virtual Desktop"
      },
      {
        "id": "C",
        "text": "Azure Functions"
      },
      {
        "id": "D",
        "text": "Azure Files"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The image upload is an event that starts a small unit of work. Functions can use supported triggers to execute the validation logic, so the developer does not need a permanently managed VM polling for uploads. The app still needs correct code, permissions, and a suitable hosting plan. Virtual Desktop serves desktop users, and Files is storage rather than an event-code runtime.\n\nAzure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.\n\nAzure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
    "optionExplanations": {
      "A": "Incorrect. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services.",
      "B": "Incorrect. Azure Virtual Desktop delivers virtual Windows desktops and applications to remote users. It addresses desktop access and centralized delivery rather than hosting a public website or container API.",
      "C": "Correct. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "D": "Incorrect. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages."
    },
    "keyClue": "Run code when an image upload occurs.",
    "mentalModel": "Upload event → function → validated image",
    "examTip": "Event starts a short computation → Functions.",
    "learnReference": "Microsoft Learn: Azure Functions",
    "objective": "Describe Azure Functions",
    "subtopic": "Azure Functions",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-functions"
    ]
  },
  {
    "id": "AZ900-NEW-088",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Zero Trust",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A security team refuses to trust a connection solely because it comes from the office network. Which security approach emphasizes explicit verification and least privilege?",
    "options": [
      {
        "id": "A",
        "text": "Zero Trust"
      },
      {
        "id": "B",
        "text": "Private cloud"
      },
      {
        "id": "C",
        "text": "Resource grouping"
      },
      {
        "id": "D",
        "text": "Capital expenditure"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Zero Trust rejects automatic trust based only on a network location. It evaluates identities and context, limits access to what is needed, and assumes compromise is possible. Being inside an office does not prove a request is safe. A private deployment can still need these controls. Resource grouping organizes services, and spending categories do not define a security verification strategy.\n\nZero Trust uses explicit verification, least privilege, and an assumption that breaches can occur. A connection from an internal network is not automatically trusted. Access decisions should consider identity and context.\n\nA private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack.",
    "optionExplanations": {
      "A": "Correct. Zero Trust uses explicit verification, least privilege, and an assumption that breaches can occur. A connection from an internal network is not automatically trusted. Access decisions should consider identity and context.",
      "B": "Incorrect. A private cloud is dedicated to one organization. It may be operated on premises or hosted elsewhere. Exclusive use describes its deployment model; it does not describe who manages the application stack.",
      "C": "Incorrect. Resource grouping organizes Azure resources for management and lifecycle operations. It does not automatically resize a workload, authenticate a user, or distribute data copies.",
      "D": "Incorrect. Capital expenditure is money spent up front to acquire long-lived assets, such as buying physical servers. The organization owns the equipment and must plan for its capacity and replacement."
    },
    "keyClue": "Office network alone is not trusted.",
    "mentalModel": "Network location ≠ automatic trust",
    "examTip": "Verify explicitly, use least privilege, and assume breach → Zero Trust.",
    "learnReference": "Microsoft Learn: Zero Trust",
    "objective": "Describe Zero Trust",
    "subtopic": "Zero Trust",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "zero-trust"
    ]
  },
  {
    "id": "AZ900-NEW-089",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Defense in depth",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An application uses identity checks, network filtering, encryption, and monitoring together. Which security principle does this illustrate?",
    "options": [
      {
        "id": "A",
        "text": "Elasticity"
      },
      {
        "id": "B",
        "text": "Defense in depth"
      },
      {
        "id": "C",
        "text": "Region pairing"
      },
      {
        "id": "D",
        "text": "SaaS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Several protections reduce risk at different points. If an attacker gets past one layer, another can still restrict access or expose activity. That is defense in depth. Encryption is valuable but cannot replace identity verification; a firewall cannot replace application controls. The approach is about combining layers, not increasing capacity or choosing a deployment location.\n\nDefense in depth places safeguards at several layers, such as identity, networking, applications, and data. If one layer fails, others can still reduce the impact. A single perimeter control is insufficient.\n\nElasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
    "optionExplanations": {
      "A": "Incorrect. Elasticity adjusts capacity up and down as demand changes, often automatically. A shop can add instances during a sale and remove them afterward, reducing the cost of keeping unused peak capacity.",
      "B": "Correct. Defense in depth places safeguards at several layers, such as identity, networking, applications, and data. If one layer fails, others can still reduce the impact. A single perimeter control is insufficient.",
      "C": "Incorrect. A region pair relates two Azure regions for certain platform/service purposes. Not all regions have a pair. Pairing alone does not replicate an application or configure failover; each workload needs an appropriate recovery design.",
      "D": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data."
    },
    "keyClue": "Several security layers working together.",
    "mentalModel": "Identity → network → application → data protections",
    "examTip": "Layered safeguards → defense in depth.",
    "learnReference": "Microsoft Learn: Defense in depth",
    "objective": "Describe Defense in depth",
    "subtopic": "Defense in depth",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "defense-in-depth"
    ]
  },
  {
    "id": "AZ900-NEW-090",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Defender for Cloud",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team wants a prioritized view of insecure workload configurations and supported threat-protection recommendations. Which service should it examine?",
    "options": [
      {
        "id": "A",
        "text": "Azure Service Health"
      },
      {
        "id": "B",
        "text": "Azure DNS"
      },
      {
        "id": "C",
        "text": "Microsoft Defender for Cloud"
      },
      {
        "id": "D",
        "text": "Azure Pricing Calculator"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Defender for Cloud is designed for security posture and workload protection. It can identify weak configurations and suggest remediation, with protection features depending on supported plans. The team still must evaluate and implement recommendations. Service Health concerns Azure platform disruptions, DNS naming, and the Pricing Calculator future cost estimates; none supplies this dedicated security posture view.\n\nDefender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users.\n\nService Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
    "optionExplanations": {
      "A": "Incorrect. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "B": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "C": "Correct. Defender for Cloud assesses security posture and supplies security recommendations and supported workload threat protection. It helps find security risks; it is not the directory that authenticates users.",
      "D": "Incorrect. The Azure Pricing Calculator estimates the cost of a proposed configuration using selected services, sizes, and usage assumptions. It helps plan future costs; actual billed usage is analyzed with Cost Management."
    },
    "keyClue": "Insecure workload configurations and threat protection.",
    "mentalModel": "Assess → prioritize weaknesses → improve protection",
    "examTip": "Posture assessment and workload threats → Defender for Cloud.",
    "learnReference": "Microsoft Learn: Defender for Cloud",
    "objective": "Describe Defender for Cloud",
    "subtopic": "Defender for Cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "defender-for-cloud"
    ]
  },
  {
    "id": "AZ900-NEW-091",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Reliability",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A workload team designs redundancy, monitors errors, tests backups, and rehearses restoring service. Which quality are these activities collectively improving?",
    "options": [
      {
        "id": "A",
        "text": "Reliability"
      },
      {
        "id": "B",
        "text": "OpEx"
      },
      {
        "id": "C",
        "text": "Authentication"
      },
      {
        "id": "D",
        "text": "Public endpoints"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Reliability includes consistent operation and the ability to recover when something goes wrong. The activities cover prevention, detection, and recovery rather than just one failure mechanism. The cloud provider supplies resilient building blocks, but the team must use them and test its application design. Authentication establishes identity, and operating costs or network exposure describe different aspects of the solution.\n\nReliability means a workload performs its intended function consistently and recovers from failures. Good design includes redundancy, monitoring, backups, and recovery planning; provider infrastructure alone cannot assure it.\n\nOperating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.",
    "optionExplanations": {
      "A": "Correct. Reliability means a workload performs its intended function consistently and recovers from failures. Good design includes redundancy, monitoring, backups, and recovery planning; provider infrastructure alone cannot assure it.",
      "B": "Incorrect. Operating expenditure pays for ongoing services or operations. Consumption-based cloud charges are commonly treated as operating expenditure, letting a business rent capacity without purchasing the underlying hardware.",
      "C": "Incorrect. Authentication verifies an identity using credentials or other evidence. Passwords, passkeys, and multifactor sign-in can prove who is signing in. Authentication alone does not grant every resource permission.",
      "D": "Incorrect. A public endpoint exposes a service address reachable through public networking, subject to authentication and network controls. Public reachability is not a grant of anonymous access to customer data."
    },
    "keyClue": "Redundancy, detection, backups, and tested recovery.",
    "mentalModel": "Prevent → detect → recover",
    "examTip": "Consistent operation plus recovery capability → reliability.",
    "learnReference": "Microsoft Learn: Reliability",
    "objective": "Describe Reliability",
    "subtopic": "Reliability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "reliability"
    ]
  },
  {
    "id": "AZ900-NEW-092",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Predictability",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company combines expected-usage estimates with monitoring and budgets to reduce surprises in Azure costs and performance. Which cloud benefit is it pursuing?",
    "options": [
      {
        "id": "A",
        "text": "Fault tolerance"
      },
      {
        "id": "B",
        "text": "Predictability"
      },
      {
        "id": "C",
        "text": "Hybrid cloud"
      },
      {
        "id": "D",
        "text": "Tagging only"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Predictability means being better able to estimate outcomes under known usage assumptions. Monitoring supplies evidence about behavior, and cost tools help plan and compare spending. Estimates can still differ from reality if demand or configuration changes. This is not a guarantee of a fixed bill or zero outages. Tags support cost classification but do not alone forecast performance or cost.\n\nPredictability concerns estimating performance and cost under known conditions. Monitoring, sizing, cost estimates, and budgets help planning. It is not a guarantee of a fixed bill regardless of usage.\n\nFault tolerance is the ability to continue operating when a component fails, using redundant components or other safeguards. The design must remove single points of failure; merely running in a cloud is insufficient.",
    "optionExplanations": {
      "A": "Incorrect. Fault tolerance is the ability to continue operating when a component fails, using redundant components or other safeguards. The design must remove single points of failure; merely running in a cloud is insufficient.",
      "B": "Correct. Predictability concerns estimating performance and cost under known conditions. Monitoring, sizing, cost estimates, and budgets help planning. It is not a guarantee of a fixed bill regardless of usage.",
      "C": "Incorrect. Hybrid cloud integrates public cloud services with on-premises or private infrastructure. The organization operates across both environments. IaaS, PaaS, and SaaS instead describe the division of service management responsibilities.",
      "D": "Incorrect. Labels can group costs, but do not by themselves estimate future performance or spending."
    },
    "keyClue": "Reduce surprises through estimates and measured usage.",
    "mentalModel": "Estimate → measure → adjust forecast",
    "examTip": "Known usage plus monitoring supports cost/performance predictability.",
    "learnReference": "Microsoft Learn: Predictability",
    "objective": "Describe Predictability",
    "subtopic": "Predictability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "predictability"
    ]
  },
  {
    "id": "AZ900-NEW-093",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Security in the cloud",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "After moving an app to a managed cloud platform, which customer responsibility still needs attention?",
    "options": [
      {
        "id": "A",
        "text": "Guarding Microsoft's datacenter doors"
      },
      {
        "id": "B",
        "text": "Replacing Azure host hardware"
      },
      {
        "id": "C",
        "text": "Managing user permissions and protecting application data"
      },
      {
        "id": "D",
        "text": "Maintaining Microsoft's virtualization layer"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Using a managed platform reduces infrastructure administration but does not remove customer responsibility for identities, access configuration, and use of data. A customer can still expose data through excessive permissions or insecure app settings. Microsoft maintains its facilities and host platform. Security therefore remains shared, with the boundary depending on the service model.\n\nCustomer access decisions and data protection remain necessary even when Microsoft manages the hosting platform.\n\nPhysical facility security belongs to Microsoft's operation of Azure, not the managed-platform customer's duties.",
    "optionExplanations": {
      "A": "Incorrect. Physical facility security belongs to Microsoft's operation of Azure, not the managed-platform customer's duties.",
      "B": "Incorrect. Microsoft maintains its physical host hardware. Customer app teams do not replace Azure servers.",
      "C": "Correct. Customer access decisions and data protection remain necessary even when Microsoft manages the hosting platform.",
      "D": "Incorrect. Microsoft operates its virtualization platform. The customer secures workload configuration and data."
    },
    "keyClue": "Managed platform still contains customer identities and data.",
    "mentalModel": "Provider runs platform\nCustomer governs access and data",
    "examTip": "Cloud management does not remove data and access responsibilities.",
    "learnReference": "Microsoft Learn: Security in the cloud",
    "objective": "Describe Security in the cloud",
    "subtopic": "Security in the cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "security-in-the-cloud"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Managing user permissions and protecting application data",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-094",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Container Instances",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team needs to run a packaged container once to transform a batch of files, without a Kubernetes cluster. Which option is simplest among these?",
    "options": [
      {
        "id": "A",
        "text": "Azure Kubernetes Service"
      },
      {
        "id": "B",
        "text": "Azure Container Instances"
      },
      {
        "id": "C",
        "text": "Azure Virtual Desktop"
      },
      {
        "id": "D",
        "text": "Azure Virtual Machines"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ACI can start a container for an isolated batch job without requiring a Kubernetes cluster or a customer-managed VM. The team packages its code and dependencies in the image and supplies necessary configuration and permissions. AKS adds orchestration for more complex workloads. Virtual Desktop is for interactive desktop delivery. A VM could run the job but introduces a server to maintain.\n\nAzure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.\n\nAzure Kubernetes Service provides managed Kubernetes orchestration. Kubernetes coordinates container workloads, scaling, and placement across nodes. Customers still manage workload configuration and have responsibilities for the cluster.",
    "optionExplanations": {
      "A": "Incorrect. Azure Kubernetes Service provides managed Kubernetes orchestration. Kubernetes coordinates container workloads, scaling, and placement across nodes. Customers still manage workload configuration and have responsibilities for the cluster.",
      "B": "Correct. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
      "C": "Incorrect. Azure Virtual Desktop delivers virtual Windows desktops and applications to remote users. It addresses desktop access and centralized delivery rather than hosting a public website or container API.",
      "D": "Incorrect. Azure VMs provide an operating system running on virtualized hardware. Customers can install custom software and maintain the guest OS. This control brings more administration responsibility than managed application services."
    },
    "keyClue": "One container batch job without a cluster.",
    "mentalModel": "Image + job configuration → ACI execution",
    "examTip": "Isolated container execution → ACI; orchestration → AKS.",
    "learnReference": "Microsoft Learn: Azure Container Instances",
    "objective": "Describe Azure Container Instances",
    "subtopic": "Azure Container Instances",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-container-instances"
    ]
  },
  {
    "id": "AZ900-NEW-095",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "AKS",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An application uses many containerized services and needs Kubernetes scheduling and orchestration across a cluster. Which Azure offering fits?",
    "options": [
      {
        "id": "A",
        "text": "Azure Container Instances"
      },
      {
        "id": "B",
        "text": "Azure Files"
      },
      {
        "id": "C",
        "text": "Azure Kubernetes Service"
      },
      {
        "id": "D",
        "text": "Azure Virtual Desktop"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "AKS offers managed Kubernetes for coordinating container workloads. Kubernetes handles concepts such as scheduling, service discovery, and scaling across nodes. This fits a multi-service application needing orchestration rather than a single independent container run. The customer still manages application manifests and has cluster responsibilities. Files provides storage, and Virtual Desktop serves user desktops.\n\nAzure Kubernetes Service provides managed Kubernetes orchestration. Kubernetes coordinates container workloads, scaling, and placement across nodes. Customers still manage workload configuration and have responsibilities for the cluster.\n\nAzure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
    "optionExplanations": {
      "A": "Incorrect. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS.",
      "B": "Incorrect. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
      "C": "Correct. Azure Kubernetes Service provides managed Kubernetes orchestration. Kubernetes coordinates container workloads, scaling, and placement across nodes. Customers still manage workload configuration and have responsibilities for the cluster.",
      "D": "Incorrect. Azure Virtual Desktop delivers virtual Windows desktops and applications to remote users. It addresses desktop access and centralized delivery rather than hosting a public website or container API."
    },
    "keyClue": "Kubernetes orchestration across a cluster.",
    "mentalModel": "Container workloads → Kubernetes cluster → coordinated services",
    "examTip": "Managed Kubernetes in Azure → AKS.",
    "learnReference": "Microsoft Learn: AKS",
    "objective": "Describe AKS",
    "subtopic": "AKS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "aks"
    ]
  },
  {
    "id": "AZ900-NEW-096",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Virtual Desktop",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company wants employees to remotely access centrally hosted Windows desktops and applications. Which service is intended for that user experience?",
    "options": [
      {
        "id": "A",
        "text": "Azure App Service"
      },
      {
        "id": "B",
        "text": "Azure Virtual Desktop"
      },
      {
        "id": "C",
        "text": "Azure Functions"
      },
      {
        "id": "D",
        "text": "Azure Container Instances"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Azure Virtual Desktop delivers Windows desktop sessions and applications to remote users. It helps centralize desktop delivery instead of requiring every app to run on the employee's local machine. This is an interactive desktop experience, not a web app runtime, triggered function, or isolated container task. The organization still needs appropriate session-host, identity, and access configuration.\n\nAzure Virtual Desktop delivers virtual Windows desktops and applications to remote users. It addresses desktop access and centralized delivery rather than hosting a public website or container API.\n\nApp Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
    "optionExplanations": {
      "A": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
      "B": "Correct. Azure Virtual Desktop delivers virtual Windows desktops and applications to remote users. It addresses desktop access and centralized delivery rather than hosting a public website or container API.",
      "C": "Incorrect. Azure Functions runs code in response to triggers such as events, timers, or messages. Microsoft manages the platform. Functions suit event-driven work rather than requiring the developer to administer a guest OS.",
      "D": "Incorrect. Azure Container Instances runs containers without requiring customers to manage VMs or a Kubernetes cluster. It suits isolated container jobs; complex orchestration across a cluster is better associated with AKS."
    },
    "keyClue": "Remote access to Windows desktops and apps.",
    "mentalModel": "Employee device → remote desktop/app session",
    "examTip": "Hosted Windows user sessions → Azure Virtual Desktop.",
    "learnReference": "Microsoft Learn: Azure Virtual Desktop",
    "objective": "Describe Azure Virtual Desktop",
    "subtopic": "Azure Virtual Desktop",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-virtual-desktop"
    ]
  },
  {
    "id": "AZ900-NEW-097",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Virtual networks",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team needs a private network address space for Azure VMs, with subnets for application tiers. Which resource should it create?",
    "options": [
      {
        "id": "A",
        "text": "Resource group"
      },
      {
        "id": "B",
        "text": "Management group"
      },
      {
        "id": "C",
        "text": "Virtual network"
      },
      {
        "id": "D",
        "text": "Azure DNS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A virtual network defines a logical private network in Azure and supplies address spaces that can be divided into subnets. The app tiers can use private addresses and network controls. It is not a project lifecycle container or a cross-subscription governance scope. DNS can support name resolution within that environment but does not replace the network itself.\n\nAn Azure virtual network is a logical private network for Azure resources. It can contain subnets and connect to other networks. A VNet does not replace user identity or resource grouping.\n\nA resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
    "optionExplanations": {
      "A": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "B": "Incorrect. A management group organizes Azure subscriptions into a hierarchy. Policies and role assignments at this scope can be inherited below it, making it useful for enterprise-wide governance.",
      "C": "Correct. An Azure virtual network is a logical private network for Azure resources. It can contain subnets and connect to other networks. A VNet does not replace user identity or resource grouping.",
      "D": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets."
    },
    "keyClue": "Private address space with subnets.",
    "mentalModel": "VNet address space → subnet segments",
    "examTip": "Private Azure address space → VNet.",
    "learnReference": "Microsoft Learn: Virtual networks",
    "objective": "Describe Virtual networks",
    "subtopic": "Virtual networks",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "virtual-networks"
    ]
  },
  {
    "id": "AZ900-NEW-098",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Pricing Calculator",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Before deploying a new web app, finance wants an estimated monthly price based on selected Azure services and expected usage. Which tool should be used?",
    "options": [
      {
        "id": "A",
        "text": "Azure Cost Management"
      },
      {
        "id": "B",
        "text": "Azure Pricing Calculator"
      },
      {
        "id": "C",
        "text": "Azure Service Health"
      },
      {
        "id": "D",
        "text": "Azure Resource Graph"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "The Pricing Calculator builds estimates from proposed services, sizes, regions, and usage assumptions. It is suitable before the app has accumulated real charges. Cost Management is used to analyze actual spending and related forecasts. The estimate is a planning input rather than a guaranteed bill; unexpected usage, omitted services, or changed configuration can alter costs.\n\nThe Azure Pricing Calculator estimates the cost of a proposed configuration using selected services, sizes, and usage assumptions. It helps plan future costs; actual billed usage is analyzed with Cost Management.\n\nMicrosoft Cost Management analyzes actual spending and supports cost allocation, budgets, and alerts. A budget normally notifies you rather than automatically stopping resources. Estimates for proposed designs use the Pricing Calculator.",
    "optionExplanations": {
      "A": "Incorrect. Microsoft Cost Management analyzes actual spending and supports cost allocation, budgets, and alerts. A budget normally notifies you rather than automatically stopping resources. Estimates for proposed designs use the Pricing Calculator.",
      "B": "Correct. The Azure Pricing Calculator estimates the cost of a proposed configuration using selected services, sizes, and usage assumptions. It helps plan future costs; actual billed usage is analyzed with Cost Management.",
      "C": "Incorrect. Service Health gives personalized information about Azure service incidents, planned maintenance, and health advisories that can affect your resources. It differs from measuring your application's own CPU usage.",
      "D": "Incorrect. Resource Graph queries Azure resource inventory and properties across authorized scopes. It helps answer questions such as which VMs exist. It is different from querying runtime application logs."
    },
    "keyClue": "Estimate an undeployed design using expected usage.",
    "mentalModel": "Plan design → estimate cost → later compare actual spending",
    "examTip": "Proposed configuration cost → Pricing Calculator.",
    "learnReference": "Microsoft Learn: Pricing Calculator",
    "objective": "Describe Pricing Calculator",
    "subtopic": "Pricing Calculator",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "pricing-calculator"
    ]
  },
  {
    "id": "AZ900-NEW-099",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Cost Management",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A department's Azure bill rose last month. The team wants to inspect actual charges by service and identify the source of the increase. Which tool is appropriate?",
    "options": [
      {
        "id": "A",
        "text": "Azure Advisor"
      },
      {
        "id": "B",
        "text": "Azure DNS"
      },
      {
        "id": "C",
        "text": "Azure Cost Management"
      },
      {
        "id": "D",
        "text": "Azure Pricing Calculator"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cost Management supplies analysis of recorded spending and categories such as service or resource. That lets the department investigate a historical increase. The Pricing Calculator estimates a hypothetical configuration instead of explaining the actual bill. Advisor may suggest cost optimizations, but it is not the primary charge-analysis view. DNS has a naming role.\n\nMicrosoft Cost Management analyzes actual spending and supports cost allocation, budgets, and alerts. A budget normally notifies you rather than automatically stopping resources. Estimates for proposed designs use the Pricing Calculator.\n\nAdvisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
    "optionExplanations": {
      "A": "Incorrect. Advisor analyzes deployments and recommends improvements across reliability, security, performance, cost, and operational excellence. Recommendations guide optimization; Advisor is not the main log-query or incident-notification service.",
      "B": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "C": "Correct. Microsoft Cost Management analyzes actual spending and supports cost allocation, budgets, and alerts. A budget normally notifies you rather than automatically stopping resources. Estimates for proposed designs use the Pricing Calculator.",
      "D": "Incorrect. The Azure Pricing Calculator estimates the cost of a proposed configuration using selected services, sizes, and usage assumptions. It helps plan future costs; actual billed usage is analyzed with Cost Management."
    },
    "keyClue": "Inspect actual last-month charges.",
    "mentalModel": "Usage records → cost analysis → spending explanation",
    "examTip": "Actual spending investigation → Cost Management.",
    "learnReference": "Microsoft Learn: Cost Management",
    "objective": "Describe Cost Management",
    "subtopic": "Cost Management",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "cost-management"
    ]
  },
  {
    "id": "AZ900-NEW-100",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Reservations",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A stable workload will use eligible Azure compute for the next three years. Which pricing option may reduce cost through a long-term usage commitment?",
    "options": [
      {
        "id": "A",
        "text": "Azure reservation"
      },
      {
        "id": "B",
        "text": "Resource lock"
      },
      {
        "id": "C",
        "text": "Availability Zone"
      },
      {
        "id": "D",
        "text": "Department tag"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A reservation exchanges a qualifying one- or three-year commitment for discounted eligible usage. It can suit predictable resource demand. The organization must check scope, eligible products, and utilization before purchasing; unused benefits can reduce value. A lock protects resource management, zones improve availability design, and tags classify ownership. Those choices do not create the commitment-based discount.\n\nAn Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free.\n\nA management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
    "optionExplanations": {
      "A": "Correct. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free.",
      "B": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "C": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage.",
      "D": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule."
    },
    "keyClue": "Predictable eligible compute use for three years.",
    "mentalModel": "Commitment + eligible usage → discount",
    "examTip": "Long-term predictable eligible usage → consider reservations.",
    "learnReference": "Microsoft Learn: Reservations",
    "objective": "Describe Reservations",
    "subtopic": "Reservations",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "reservations"
    ]
  },
  {
    "id": "AZ900-NEW-101",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Governance in the cloud",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company wants consistent allowed regions and required department labels across deployments. Which cloud benefit do these standards support?",
    "options": [
      {
        "id": "A",
        "text": "Global reach"
      },
      {
        "id": "B",
        "text": "Governance"
      },
      {
        "id": "C",
        "text": "Vertical scaling"
      },
      {
        "id": "D",
        "text": "Fault tolerance"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Governance defines how the organization permits and manages cloud use. Approved locations and required labels are resource standards that support compliance, cost accountability, and consistency. Azure Policy can help enforce or audit them. These are administrative rules rather than redundancy or capacity mechanisms. A well-governed environment still needs separate security, monitoring, and availability design.\n\nGovernance establishes and enforces organizational rules for resources, access, cost, and compliance. It guides how cloud services are used; it is not a substitute for redundancy or sign-in.\n\nA cloud provider operates datacenters in many geographic areas. Customers can deploy near users without building their own facilities. Location selection still needs to consider service availability and data-location requirements.",
    "optionExplanations": {
      "A": "Incorrect. A cloud provider operates datacenters in many geographic areas. Customers can deploy near users without building their own facilities. Location selection still needs to consider service availability and data-location requirements.",
      "B": "Correct. Governance establishes and enforces organizational rules for resources, access, cost, and compliance. It guides how cloud services are used; it is not a substitute for redundancy or sign-in.",
      "C": "Incorrect. Vertical scaling changes the capacity of an existing instance, for example by increasing CPU or RAM. The number of instances stays the same. There are limits to the available sizes of a single machine.",
      "D": "Incorrect. Fault tolerance is the ability to continue operating when a component fails, using redundant components or other safeguards. The design must remove single points of failure; merely running in a cloud is insufficient."
    },
    "keyClue": "Consistent allowed locations and required labels.",
    "mentalModel": "Business standard → policy assignment → compliant resources",
    "examTip": "Organization-wide resource standards → governance.",
    "learnReference": "Microsoft Learn: Governance in the cloud",
    "objective": "Describe Governance in the cloud",
    "subtopic": "Governance in the cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "governance-in-the-cloud"
    ]
  },
  {
    "id": "AZ900-NEW-102",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Manageability",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An administrator uses scripts and APIs to configure many Azure resources consistently. Which cloud benefit is demonstrated?",
    "options": [
      {
        "id": "A",
        "text": "Disaster recovery"
      },
      {
        "id": "B",
        "text": "Data residency"
      },
      {
        "id": "C",
        "text": "Manageability"
      },
      {
        "id": "D",
        "text": "SaaS"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Manageability includes configuring and administering resources through tools, APIs, and automation. Scripting makes repeated changes practical at larger scale and reduces manual work. It does not by itself restore data after a disaster or guarantee a geographic location. SaaS is a service responsibility model. The clue is the administration method, not the application being hosted.\n\nManageability is the ability to configure, monitor, automate, and administer cloud resources. APIs and tools let operators manage infrastructure at scale. Availability concerns uptime rather than administration methods.\n\nDisaster recovery restores service after a major interruption, using backups, replication, failover, and recovery procedures. Recovery objectives describe acceptable downtime and data loss. It differs from avoiding small local interruptions.",
    "optionExplanations": {
      "A": "Incorrect. Disaster recovery restores service after a major interruption, using backups, replication, failover, and recovery procedures. Recovery objectives describe acceptable downtime and data loss. It differs from avoiding small local interruptions.",
      "B": "Incorrect. Data residency concerns the geographic location where data is stored or processed. Choosing an appropriate Azure region can support location requirements; it does not automatically increase or decrease capacity.",
      "C": "Correct. Manageability is the ability to configure, monitor, automate, and administer cloud resources. APIs and tools let operators manage infrastructure at scale. Availability concerns uptime rather than administration methods.",
      "D": "Incorrect. Software as a service delivers a complete provider-hosted application. Customers use and configure the software rather than deploy its code or maintain its operating system. Customers still control their identities, access, and use of data."
    },
    "keyClue": "Scripts and APIs administer many resources.",
    "mentalModel": "Management tools → repeatable resource operations",
    "examTip": "Automated administration through tools → manageability.",
    "learnReference": "Microsoft Learn: Manageability",
    "objective": "Describe Manageability",
    "subtopic": "Manageability",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "manageability"
    ]
  },
  {
    "id": "AZ900-NEW-103",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "IaaS responsibility",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An IaaS VM hosts a company's custom application. Which part is normally managed by Microsoft rather than the company?",
    "options": [
      {
        "id": "A",
        "text": "Application code"
      },
      {
        "id": "B",
        "text": "Guest OS user accounts"
      },
      {
        "id": "C",
        "text": "Physical host and virtualization platform"
      },
      {
        "id": "D",
        "text": "Application data classification"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "IaaS puts the physical host and virtualization platform under the provider's operation. The company manages its guest OS accounts, application code, and data decisions. This division allows it to rent server capacity while retaining software control. PaaS would move more platform work to Microsoft, but this question specifically names an IaaS VM.\n\nMicrosoft operates the hardware and virtualization foundation beneath the customer's VM guest OS.\n\nThe customer owns the custom application's code and must manage its behavior and vulnerabilities on an IaaS VM.",
    "optionExplanations": {
      "A": "Incorrect. The customer owns the custom application's code and must manage its behavior and vulnerabilities on an IaaS VM.",
      "B": "Incorrect. The customer administers accounts inside its IaaS guest OS, distinct from Microsoft operating physical hosts.",
      "C": "Correct. Microsoft operates the hardware and virtualization foundation beneath the customer's VM guest OS.",
      "D": "Incorrect. The customer decides what its application data contains and how it should be protected; IaaS does not transfer that decision."
    },
    "keyClue": "IaaS provider responsibility beneath the guest OS.",
    "mentalModel": "Hardware/virtualization: provider\nGuest OS/application: customer",
    "examTip": "In IaaS, provider manages hosts; customer manages guest OS and app.",
    "learnReference": "Microsoft Learn: IaaS responsibility",
    "objective": "Describe IaaS responsibility",
    "subtopic": "IaaS responsibility",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "iaas-responsibility"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Physical host and virtualization platform",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-104",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Subnets",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A VNet uses a private address range. The team wants separate smaller ranges for its web and database tiers. What should divide the VNet address space?",
    "options": [
      {
        "id": "A",
        "text": "Subscriptions"
      },
      {
        "id": "B",
        "text": "Resource groups"
      },
      {
        "id": "C",
        "text": "Subnets"
      },
      {
        "id": "D",
        "text": "Availability Sets"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Subnets are portions of a VNet address space. They provide logical network placement for different tiers and can be associated with relevant network controls. This is an addressing decision, not a billing or lifecycle boundary. A resource group can organize both tiers without separating their network ranges. An Availability Set manages VM failure and maintenance dependencies.\n\nA subnet divides a VNet's address space into smaller network segments. Resources attach to subnets for placement and network controls. A subnet is not a billing boundary.\n\nAn Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
    "optionExplanations": {
      "A": "Incorrect. An Azure subscription contains resource groups and provides a boundary for billing and resource access. A management group can govern several subscriptions. A subscription is not a physical datacenter.",
      "B": "Incorrect. A resource group is a logical container for related Azure resources that share a management lifecycle. Resources can be in different regions. Grouping them does not by itself provide redundancy.",
      "C": "Correct. A subnet divides a VNet's address space into smaller network segments. Resources attach to subnets for placement and network controls. A subnet is not a billing boundary.",
      "D": "Incorrect. An Availability Set spreads VMs across fault domains and update domains. Fault domains separate shared hardware dependencies; update domains separate planned maintenance groups. It is not the same as placing VMs in different availability zones."
    },
    "keyClue": "Smaller network ranges within a VNet.",
    "mentalModel": "VNet → web subnet + database subnet",
    "examTip": "Divide VNet address space → subnets.",
    "learnReference": "Microsoft Learn: Subnets",
    "objective": "Describe Subnets",
    "subtopic": "Subnets",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "subnets"
    ]
  },
  {
    "id": "AZ900-NEW-105",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "VNet peering",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Resources in two Azure VNets need private-IP communication over Microsoft's network without a site-to-site Internet VPN. Which feature connects the VNets?",
    "options": [
      {
        "id": "A",
        "text": "Azure DNS"
      },
      {
        "id": "B",
        "text": "VNet peering"
      },
      {
        "id": "C",
        "text": "Resource locking"
      },
      {
        "id": "D",
        "text": "Azure Files"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Peering provides connectivity between virtual networks using private IP addresses over Microsoft's backbone. It is different from a VPN tunnel carried over the public Internet. Peered networks retain their own configuration and do not become one subscription. Name resolution and routing must still be configured appropriately for the application. DNS can help identify addresses but cannot itself create the connection.\n\nVNet peering links virtual networks so resources can communicate using private IP addresses over Microsoft's network. It does not turn those networks into a single subscription or create an Internet VPN.\n\nAzure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
    "optionExplanations": {
      "A": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "B": "Correct. VNet peering links virtual networks so resources can communicate using private IP addresses over Microsoft's network. It does not turn those networks into a single subscription or create an Internet VPN.",
      "C": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "D": "Incorrect. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages."
    },
    "keyClue": "Two VNets communicating by private IP without an Internet tunnel.",
    "mentalModel": "VNet A ↔ peering ↔ VNet B",
    "examTip": "Connect Azure VNets privately → peering.",
    "learnReference": "Microsoft Learn: VNet peering",
    "objective": "Describe VNet peering",
    "subtopic": "VNet peering",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "vnet-peering"
    ]
  },
  {
    "id": "AZ900-NEW-106",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure DNS",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company hosts a DNS zone for its custom domain in Azure. What is the primary purpose of that zone?",
    "options": [
      {
        "id": "A",
        "text": "Assign user VM permissions"
      },
      {
        "id": "B",
        "text": "Translate domain names into DNS records"
      },
      {
        "id": "C",
        "text": "Create a private dedicated circuit"
      },
      {
        "id": "D",
        "text": "Store application backups"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "DNS records tell clients where a name points, such as an IP address or another hostname. Azure DNS can host the company's zone so it can manage those records. Hosting DNS is separate from registering a domain name and from creating a network path. It also does not authorize users or store the application itself. The question is about naming information.\n\nA DNS zone holds records that help clients resolve names to addresses or related naming information.\n\nAssigning a VM role belongs to authorization through RBAC, not to DNS record hosting.",
    "optionExplanations": {
      "A": "Incorrect. Assigning a VM role belongs to authorization through RBAC, not to DNS record hosting.",
      "B": "Correct. A DNS zone holds records that help clients resolve names to addresses or related naming information.",
      "C": "Incorrect. Private provider connectivity is associated with ExpressRoute. Hosting DNS records does not create a circuit.",
      "D": "Incorrect. Backups need an appropriate storage or backup service. A DNS zone stores name records instead of backup content."
    },
    "keyClue": "Custom domain DNS records.",
    "mentalModel": "Name lookup → DNS record → destination",
    "examTip": "DNS resolves names; it does not grant access or create connectivity.",
    "learnReference": "Microsoft Learn: Azure DNS",
    "objective": "Describe Azure DNS",
    "subtopic": "Azure DNS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-dns"
    ]
  },
  {
    "id": "AZ900-NEW-107",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "VPN Gateway",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A small office needs an encrypted site-to-site Azure connection using its existing Internet link, rather than buying private provider connectivity. Which service fits?",
    "options": [
      {
        "id": "A",
        "text": "ExpressRoute"
      },
      {
        "id": "B",
        "text": "VPN Gateway"
      },
      {
        "id": "C",
        "text": "Azure DNS"
      },
      {
        "id": "D",
        "text": "Network security group"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A site-to-site VPN can use the existing Internet connection and an Azure VPN Gateway to form an encrypted tunnel. This matches the transport and encryption clues. ExpressRoute is private provider connectivity and has a different provisioning approach. DNS resolves names and an NSG filters packets; both may support a network but neither terminates the required VPN tunnel.\n\nAzure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.\n\nExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
    "optionExplanations": {
      "A": "Incorrect. ExpressRoute connects an organization's network to Microsoft cloud services through private provider connectivity, avoiding the public Internet. Private connectivity is not automatically the same as end-to-end encryption.",
      "B": "Correct. Azure VPN Gateway connects networks using encrypted tunnels over the public Internet. A site-to-site connection links an on-premises network to an Azure VNet. Internet transport still differs from a private circuit.",
      "C": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets.",
      "D": "Incorrect. A network security group uses allow and deny rules to filter network traffic at subnet or network-interface scope. Rules consider information such as source, destination, port, and protocol."
    },
    "keyClue": "Use existing Internet link with an encrypted site-to-site tunnel.",
    "mentalModel": "Office VPN device → Internet tunnel → Azure gateway",
    "examTip": "Internet + encrypted network tunnel → VPN Gateway.",
    "learnReference": "Microsoft Learn: VPN Gateway",
    "objective": "Describe VPN Gateway",
    "subtopic": "VPN Gateway",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "vpn-gateway"
    ],
    "visual": {
      "type": "networking-connectivity",
      "highlight": "VPN Gateway",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-108",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Cost tags",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Finance wants to report costs for resources labeled Project=Migration across several resource groups. Which resource metadata should it use?",
    "options": [
      {
        "id": "A",
        "text": "Resource lock"
      },
      {
        "id": "B",
        "text": "Azure reservation"
      },
      {
        "id": "C",
        "text": "Tag"
      },
      {
        "id": "D",
        "text": "Availability Zone"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A tag gives a resource a name-value label independent of its resource-group membership. Project=Migration can support grouping supported cost records from resources in several groups. The label does not move resources or grant access. Tagging also needs consistent application, which policies can help enforce. Reservations are pricing commitments and locks prevent certain management operations.\n\nA tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule.\n\nA management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
    "optionExplanations": {
      "A": "Incorrect. A management lock can prevent deletion or changes through Azure Resource Manager, depending on its type. It is an extra guard against accidents even for authorized users. It does not block every data-plane operation.",
      "B": "Incorrect. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free.",
      "C": "Correct. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule.",
      "D": "Incorrect. Availability Zones are physically separated locations within an Azure region with independent power, cooling, and networking. Supported services can use multiple zones to reduce the impact of a datacenter-level outage."
    },
    "keyClue": "Project=Migration across resource groups.",
    "mentalModel": "Many groups + same Project tag → common reporting category",
    "examTip": "Cross-cutting ownership/cost label → tag.",
    "learnReference": "Microsoft Learn: Cost tags",
    "objective": "Describe Cost tags",
    "subtopic": "Cost tags",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "cost-tags"
    ]
  },
  {
    "id": "AZ900-NEW-109",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Policy",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A deployment has all necessary RBAC permissions, but its VM location is outside the allowed-region policy. What should a deny policy do?",
    "options": [
      {
        "id": "A",
        "text": "Grant Owner access"
      },
      {
        "id": "B",
        "text": "Accept the deployment because RBAC allows it"
      },
      {
        "id": "C",
        "text": "Rename the resource group"
      },
      {
        "id": "D",
        "text": "Reject the noncompliant deployment"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Permissions and policy compliance are separate checks. RBAC can allow the caller to create a VM while a policy rejects the particular configuration. An allowed-region deny policy blocks the request when the VM's location is not approved. Granting broader permissions does not make that location compliant. Administrators must change the configuration or use a valid governance process for exemptions.\n\nAn applicable deny rule rejects a resource request whose configuration violates the assigned standard.\n\nOwner permissions come from an RBAC role assignment and do not make an unapproved resource location compliant.",
    "optionExplanations": {
      "A": "Incorrect. Owner permissions come from an RBAC role assignment and do not make an unapproved resource location compliant.",
      "B": "Incorrect. RBAC action permission does not override an applicable Azure Policy deny effect.",
      "C": "Incorrect. Changing a group name is not how a disallowed resource location becomes compliant; the deny check concerns its configured location.",
      "D": "Correct. An applicable deny rule rejects a resource request whose configuration violates the assigned standard."
    },
    "keyClue": "Authorized caller but disallowed resource region.",
    "mentalModel": "Caller authorized + configuration noncompliant → deployment denied",
    "examTip": "RBAC permission does not override configuration policy.",
    "learnReference": "Microsoft Learn: Azure Policy",
    "objective": "Describe Azure Policy",
    "subtopic": "Azure Policy",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-policy"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Reject the noncompliant deployment",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-110",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Resource locks",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A CanNotDelete lock protects an Azure resource. Which operation can still normally be allowed through Resource Manager?",
    "options": [
      {
        "id": "A",
        "text": "Delete the locked resource"
      },
      {
        "id": "B",
        "text": "Update its configuration, with appropriate permissions"
      },
      {
        "id": "C",
        "text": "Ignore RBAC checks"
      },
      {
        "id": "D",
        "text": "Delete every child regardless of inherited locks"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "CanNotDelete protects against management deletion while permitting updates by authorized callers. ReadOnly is the stricter lock type for management changes. Neither lock grants permissions or bypasses RBAC. A parent lock can affect children, so it should not be treated as a guarantee that a child can be deleted. Locks are an accident guard rather than a complete security or backup system.\n\nCanNotDelete still permits authorized management updates; ReadOnly blocks such changes.\n\nA CanNotDelete lock protects the management deletion operation until the lock is appropriately removed.",
    "optionExplanations": {
      "A": "Incorrect. A CanNotDelete lock protects the management deletion operation until the lock is appropriately removed.",
      "B": "Correct. CanNotDelete still permits authorized management updates; ReadOnly blocks such changes.",
      "C": "Incorrect. A resource lock adds restrictions. It never grants missing roles or bypasses permission evaluation.",
      "D": "Incorrect. Parent locks can be inherited by child resources, so a child deletion can also be blocked."
    },
    "keyClue": "CanNotDelete rather than ReadOnly.",
    "mentalModel": "CanNotDelete: update allowed\nReadOnly: update blocked",
    "examTip": "CanNotDelete blocks management deletion, not all configuration updates.",
    "learnReference": "Microsoft Learn: Resource locks",
    "objective": "Describe Resource locks",
    "subtopic": "Resource locks",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "resource-locks"
    ],
    "visual": {
      "type": "rbac-policy-lock",
      "highlight": "Update its configuration, with appropriate permissions",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-111",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "PaaS responsibility",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team uses a PaaS web platform. Which responsibility still belongs to the team?",
    "options": [
      {
        "id": "A",
        "text": "Operating Microsoft's physical hosts"
      },
      {
        "id": "B",
        "text": "Maintaining the provider runtime"
      },
      {
        "id": "C",
        "text": "Replacing datacenter network equipment"
      },
      {
        "id": "D",
        "text": "Securing its application code and data"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "PaaS reduces infrastructure and platform maintenance for the customer, including the underlying OS and runtime. The customer still develops secure code, configures application access, and protects its data. A vulnerability in the customer's application is not automatically eliminated by managed hosting. The physical equipment and provider runtime are on the Microsoft side of this service boundary.\n\nPaaS customers still develop secure applications, configure access, and govern their own data.\n\nProvider physical-host operation is not the PaaS application team's responsibility.",
    "optionExplanations": {
      "A": "Incorrect. Provider physical-host operation is not the PaaS application team's responsibility.",
      "B": "Incorrect. Microsoft maintains the PaaS hosting runtime, while customers configure and secure their applications.",
      "C": "Incorrect. Datacenter equipment is part of provider physical infrastructure, not customer app administration.",
      "D": "Correct. PaaS customers still develop secure applications, configure access, and govern their own data."
    },
    "keyClue": "Customer responsibility on a PaaS web platform.",
    "mentalModel": "Provider: platform\nCustomer: application and data",
    "examTip": "PaaS manages the platform; customer still manages app and data.",
    "learnReference": "Microsoft Learn: PaaS responsibility",
    "objective": "Describe PaaS responsibility",
    "subtopic": "PaaS responsibility",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "paas-responsibility"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Securing its application code and data",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-112",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "SaaS responsibility",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Employees use a finished SaaS application. Which action still needs customer governance?",
    "options": [
      {
        "id": "A",
        "text": "Assigning appropriate user access"
      },
      {
        "id": "B",
        "text": "Patching the provider's guest OS"
      },
      {
        "id": "C",
        "text": "Replacing the provider's hosts"
      },
      {
        "id": "D",
        "text": "Maintaining the provider's application binaries"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "A SaaS provider hosts and maintains the finished application, but the customer controls who should use it and what data they put into it. Access decisions and account lifecycle still matter. Removing departed users and applying appropriate permissions are customer governance tasks. The customer normally does not patch the provider's hosting OS or application binaries. SaaS reduces administration without removing all responsibility.\n\nA SaaS customer controls which staff should access its application and information, including account lifecycle decisions.\n\nThe SaaS provider maintains the hosting OS rather than exposing it for customers to patch.",
    "optionExplanations": {
      "A": "Correct. A SaaS customer controls which staff should access its application and information, including account lifecycle decisions.",
      "B": "Incorrect. The SaaS provider maintains the hosting OS rather than exposing it for customers to patch.",
      "C": "Incorrect. Physical equipment maintenance is the provider's task; SaaS customers consume its application.",
      "D": "Incorrect. The SaaS provider maintains the finished application; the customer governs its use, identities, and data."
    },
    "keyClue": "Appropriate user access to a SaaS application.",
    "mentalModel": "Provider runs application\nCustomer governs its users/data",
    "examTip": "SaaS still requires customer identity, access, and data governance.",
    "learnReference": "Microsoft Learn: SaaS responsibility",
    "objective": "Describe SaaS responsibility",
    "subtopic": "SaaS responsibility",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "saas-responsibility"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "Assigning appropriate user access",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-113",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Serverless events",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A team wants a serverless function to execute nightly on a schedule. Must the trigger be an incoming user request?",
    "options": [
      {
        "id": "A",
        "text": "Yes, only HTTP requests can start functions"
      },
      {
        "id": "B",
        "text": "Yes, only public endpoints can trigger code"
      },
      {
        "id": "C",
        "text": "No, timer triggers can start scheduled execution"
      },
      {
        "id": "D",
        "text": "No, serverless code never has a trigger"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Functions can be triggered by supported event sources including timers, not just HTTP requests. A nightly schedule can invoke the job without a user pressing a button. Serverless refers to the provider-managed execution platform; servers still exist underneath. The customer must configure the schedule, code, access, and appropriate hosting behavior. A timer is still a trigger, so execution is not triggerless.\n\nA configured timer trigger can invoke a function according to a schedule, without a user request.\n\nFunctions supports non-HTTP triggers, including schedules and supported messaging or storage events.",
    "optionExplanations": {
      "A": "Incorrect. Functions supports non-HTTP triggers, including schedules and supported messaging or storage events.",
      "B": "Incorrect. Triggers need not originate from public client endpoints; timer events can start scheduled functions.",
      "C": "Correct. A configured timer trigger can invoke a function according to a schedule, without a user request.",
      "D": "Incorrect. Functions still uses configured triggers. Serverless means platform-managed execution rather than an absence of execution conditions."
    },
    "keyClue": "Nightly scheduled execution.",
    "mentalModel": "Timer event → function execution → scheduled work",
    "examTip": "Functions can respond to timers as well as requests and messages.",
    "learnReference": "Microsoft Learn: Serverless events",
    "objective": "Describe Serverless events",
    "subtopic": "Serverless events",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "serverless-events"
    ]
  },
  {
    "id": "AZ900-NEW-114",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "ExpressRoute",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A network manager wants private connectivity to Microsoft cloud services and assumes this also guarantees end-to-end encryption. Which statement is accurate?",
    "options": [
      {
        "id": "A",
        "text": "ExpressRoute always makes encryption unnecessary"
      },
      {
        "id": "B",
        "text": "ExpressRoute avoids public Internet transport, but encryption is a separate consideration"
      },
      {
        "id": "C",
        "text": "VPN Gateway provides unencrypted private circuits"
      },
      {
        "id": "D",
        "text": "Azure DNS encrypts all ExpressRoute packets"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "ExpressRoute provides private provider connectivity instead of sending ordinary traffic over the public Internet. That transport property is distinct from encrypting traffic. Organizations must evaluate appropriate encryption options for their security requirements. VPN tunnels have their own encryption model, and DNS has no general packet-encryption role. This question separates two features often confused in fundamentals discussions.\n\nExpressRoute supplies a private connectivity path. Organizations should separately choose appropriate traffic protection.\n\nPrivate transport is not an unconditional security guarantee. Encryption requirements must be considered separately.",
    "optionExplanations": {
      "A": "Incorrect. Private transport is not an unconditional security guarantee. Encryption requirements must be considered separately.",
      "B": "Correct. ExpressRoute supplies a private connectivity path. Organizations should separately choose appropriate traffic protection.",
      "C": "Incorrect. VPN Gateway establishes encrypted tunnels over the Internet. ExpressRoute is the private-connectivity service here.",
      "D": "Incorrect. DNS supplies naming information; it is not the service that encrypts all ExpressRoute traffic."
    },
    "keyClue": "Private transport versus encryption.",
    "mentalModel": "Private path ≠ automatically encrypted end to end",
    "examTip": "Private connectivity and encryption are separate properties.",
    "learnReference": "Microsoft Learn: ExpressRoute",
    "objective": "Describe ExpressRoute",
    "subtopic": "ExpressRoute",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "expressroute"
    ],
    "visual": {
      "type": "networking-connectivity",
      "highlight": "ExpressRoute avoids public Internet transport, but encryption is a separate consideration",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-115",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Public endpoints",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An Azure service has a public endpoint but requires valid authentication. Does public endpoint mean that all stored data must be anonymously readable?",
    "options": [
      {
        "id": "A",
        "text": "Yes, public addresses disable authentication"
      },
      {
        "id": "B",
        "text": "No, public reachability and data authorization are separate"
      },
      {
        "id": "C",
        "text": "Yes, RBAC cannot work on public endpoints"
      },
      {
        "id": "D",
        "text": "No, the service must therefore have a private IP only"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "A public endpoint describes a network path that clients may reach through public networking. It does not require anonymous data access. The service can still enforce authentication, permissions, firewalls, and other controls. A private endpoint instead provides a private IP path inside a VNet. Neither network choice alone replaces the need to secure identities and data.\n\nA public network path does not mean anonymous permission. Service authentication and authorization still protect data.\n\nA publicly reachable endpoint can still require authentication and restrict data access.",
    "optionExplanations": {
      "A": "Incorrect. A publicly reachable endpoint can still require authentication and restrict data access.",
      "B": "Correct. A public network path does not mean anonymous permission. Service authentication and authorization still protect data.",
      "C": "Incorrect. Supported services can evaluate resource/data permissions with public network access. Network reachability does not eliminate authorization.",
      "D": "Incorrect. A service can combine public reachability with authentication. Authentication alone does not imply private endpoint configuration."
    },
    "keyClue": "Public endpoint still requires authentication.",
    "mentalModel": "Network reachability + identity permissions → effective access",
    "examTip": "Public reachability does not mean anonymous data access.",
    "learnReference": "Microsoft Learn: Public endpoints",
    "objective": "Describe Public endpoints",
    "subtopic": "Public endpoints",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "public-endpoints"
    ],
    "visual": {
      "type": "public-private-endpoint",
      "highlight": "No, public reachability and data authorization are separate",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-116",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Private endpoints",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A storage service should be reached using a private IP inside a VNet through Private Link. Which feature supplies that network interface?",
    "options": [
      {
        "id": "A",
        "text": "Public endpoint"
      },
      {
        "id": "B",
        "text": "Azure tag"
      },
      {
        "id": "C",
        "text": "Private endpoint"
      },
      {
        "id": "D",
        "text": "Azure reservation"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "A private endpoint gives a supported service a private IP from the VNet and connects through Private Link. Applications can reach that private address instead of depending on the public endpoint path. Appropriate DNS, routing, and service access controls are still required. Creating the endpoint does not automatically disable every public route; public access is configured separately when needed.\n\nA private endpoint assigns a private IP address from a VNet to a supported Azure service through Private Link. It gives a private network path; public access must be configured separately if it should be disabled.\n\nA public endpoint exposes a service address reachable through public networking, subject to authentication and network controls. Public reachability is not a grant of anonymous access to customer data.",
    "optionExplanations": {
      "A": "Incorrect. A public endpoint exposes a service address reachable through public networking, subject to authentication and network controls. Public reachability is not a grant of anonymous access to customer data.",
      "B": "Incorrect. A tag is a name-value label such as Department=Finance. Tags organize resources and help allocate supported costs. They do not grant permissions or, by themselves, enforce a deployment rule.",
      "C": "Correct. A private endpoint assigns a private IP address from a VNet to a supported Azure service through Private Link. It gives a private network path; public access must be configured separately if it should be disabled.",
      "D": "Incorrect. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free."
    },
    "keyClue": "Private IP inside a VNet using Private Link.",
    "mentalModel": "VNet client → private IP → supported Azure service",
    "examTip": "Private Link service access through a VNet IP → private endpoint.",
    "learnReference": "Microsoft Learn: Private endpoints",
    "objective": "Describe Private endpoints",
    "subtopic": "Private endpoints",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "private-endpoints"
    ],
    "visual": {
      "type": "public-private-endpoint",
      "highlight": "Private endpoint",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-117",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Blob Storage",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A media app uploads videos and retrieves them using object APIs rather than a mounted network share. Which storage service fits?",
    "options": [
      {
        "id": "A",
        "text": "Azure Files"
      },
      {
        "id": "B",
        "text": "Azure Table Storage"
      },
      {
        "id": "C",
        "text": "Azure Queue Storage"
      },
      {
        "id": "D",
        "text": "Azure Blob Storage"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Videos are unstructured objects, and the app's API access model matches Blob Storage. A blob has content and metadata and can be retrieved through authorized service requests. Files would be more suitable for a mounted share, Tables for structured key-value entities, and Queues for messages. The distinction is the storage access model as well as the data's shape.\n\nBlob Storage stores unstructured objects such as images, videos, documents, and backups. Applications commonly access blobs using APIs or HTTP; it is different from a shared SMB or NFS filesystem.\n\nAzure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
    "optionExplanations": {
      "A": "Incorrect. Azure Files supplies managed file shares accessible through supported SMB or NFS configurations. It is appropriate when applications expect a mounted file share instead of object APIs or messages.",
      "B": "Incorrect. Table Storage holds schemaless structured entities using keys and properties. It is a NoSQL key-value service, not a relational database with SQL joins or a message delivery queue.",
      "C": "Incorrect. Queue Storage holds messages so application components can exchange work asynchronously. A producer adds a message and a worker processes it later. It is not a file share or a VM disk.",
      "D": "Correct. Blob Storage stores unstructured objects such as images, videos, documents, and backups. Applications commonly access blobs using APIs or HTTP; it is different from a shared SMB or NFS filesystem."
    },
    "keyClue": "Videos retrieved through object APIs.",
    "mentalModel": "Media object → blob container → authorized API access",
    "examTip": "Large unstructured API-accessed objects → Blob Storage.",
    "learnReference": "Microsoft Learn: Blob Storage",
    "objective": "Describe Blob Storage",
    "subtopic": "Blob Storage",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "blob-storage"
    ]
  },
  {
    "id": "AZ900-NEW-118",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Microsoft Purview",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A company wants to discover and classify sensitive data across its information estate. Which Microsoft service family is designed for data governance?",
    "options": [
      {
        "id": "A",
        "text": "Azure Policy"
      },
      {
        "id": "B",
        "text": "Microsoft Purview"
      },
      {
        "id": "C",
        "text": "Azure Load Balancer"
      },
      {
        "id": "D",
        "text": "Azure DNS"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Purview supports data discovery, classification, and governance capabilities across an information estate. This can help identify where sensitive information exists and how it should be handled. Azure Policy primarily evaluates Azure resource configurations, such as permitted locations or required settings. It is not a substitute for a data catalog and classification system. Network traffic and naming services address different problems.\n\nMicrosoft Purview provides data governance, discovery, classification, and supported compliance capabilities. It helps understand and manage information across data estates. Azure Policy focuses on resource governance.\n\nAzure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
    "optionExplanations": {
      "A": "Incorrect. Azure Policy audits or enforces organizational resource standards, such as allowed regions or required configurations. An assignment can deny a noncompliant deployment. Permission grants are handled through Azure RBAC.",
      "B": "Correct. Microsoft Purview provides data governance, discovery, classification, and supported compliance capabilities. It helps understand and manage information across data estates. Azure Policy focuses on resource governance.",
      "C": "Incorrect. Azure Load Balancer distributes TCP or UDP traffic to backend instances at Layer 4. Health probes help route to available backends. It does not inspect web requests like an application-layer WAF.",
      "D": "Incorrect. Azure DNS hosts DNS zones that translate names into records such as IP addresses. Azure also supports private DNS zones. DNS resolves names; it does not create a VPN tunnel or filter packets."
    },
    "keyClue": "Discover and classify sensitive data across the estate.",
    "mentalModel": "Data sources → discovery/classification → governance",
    "examTip": "Data governance/classification → Purview; resource standards → Azure Policy.",
    "learnReference": "Microsoft Learn: Microsoft Purview",
    "objective": "Describe Microsoft Purview",
    "subtopic": "Microsoft Purview",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "microsoft-purview"
    ]
  },
  {
    "id": "AZ900-NEW-119",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure portal",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "An operator wants a graphical Azure interface to inspect a VM's settings without writing command syntax. Which tool is most direct?",
    "options": [
      {
        "id": "A",
        "text": "ARM template"
      },
      {
        "id": "B",
        "text": "Azure PowerShell"
      },
      {
        "id": "C",
        "text": "Azure portal"
      },
      {
        "id": "D",
        "text": "Azure CLI"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "The portal offers resource pages and controls in a browser. That makes it convenient for visual inspection and individual changes. PowerShell and CLI require command syntax, while an ARM template is a declarative deployment file. All of these can participate in Azure management, but the scenario's graphical-interface preference identifies the portal.\n\nThe Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.\n\nAn ARM template is a declarative JSON description of Azure resources and settings. Azure Resource Manager processes it to deploy the desired resources. A template describes the result rather than a sequence of portal clicks.",
    "optionExplanations": {
      "A": "Incorrect. An ARM template is a declarative JSON description of Azure resources and settings. Azure Resource Manager processes it to deploy the desired resources. A template describes the result rather than a sequence of portal clicks.",
      "B": "Incorrect. Azure PowerShell provides PowerShell cmdlets, such as Get-AzVM, for Azure management. It fits PowerShell scripts and object pipelines. It is not the same command syntax as Azure CLI.",
      "C": "Correct. The Azure portal is a browser-based graphical interface for managing resources. It uses Azure Resource Manager behind the scenes. It differs from a saved template that describes an environment as code.",
      "D": "Incorrect. Azure CLI is a cross-platform command-line tool using az commands to manage Azure. It is commonly used from Bash but is not limited to it. It can run locally or in Cloud Shell."
    },
    "keyClue": "Graphical inspection without commands.",
    "mentalModel": "Browser UI → resource management service",
    "examTip": "Graphical resource pages → Azure portal.",
    "learnReference": "Microsoft Learn: Azure portal",
    "objective": "Describe Azure portal",
    "subtopic": "Azure portal",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-portal"
    ]
  },
  {
    "id": "AZ900-NEW-120",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Cloud Shell",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "A laptop has no Azure command tools installed. An administrator wants a ready-to-use Bash environment in the browser. Which option should be chosen?",
    "options": [
      {
        "id": "A",
        "text": "Cloud Shell"
      },
      {
        "id": "B",
        "text": "Azure App Service"
      },
      {
        "id": "C",
        "text": "Application Insights"
      },
      {
        "id": "D",
        "text": "Azure reservation"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Cloud Shell provides the browser-accessible command environment and installed administration tools. It allows the administrator to work without a local CLI installation. The user still needs appropriate access and any environment setup required for the session. App Service hosts applications, Application Insights monitors their performance, and a reservation provides a pricing benefit. Those are not interactive administration shells.\n\nCloud Shell is a browser-accessible command-line environment with Bash and PowerShell tools for Azure administration. It saves local installation work, but commands still need authorization to manage resources.\n\nApp Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
    "optionExplanations": {
      "A": "Correct. Cloud Shell is a browser-accessible command-line environment with Bash and PowerShell tools for Azure administration. It saves local installation work, but commands still need authorization to manage resources.",
      "B": "Incorrect. App Service is a managed platform for hosting web apps and APIs. Developers deploy code or supported containers while Microsoft maintains the hosting platform. It does not give unrestricted guest OS administration.",
      "C": "Incorrect. Application Insights provides application performance monitoring within Azure Monitor, including requests, dependencies, failures, and tracing. It diagnoses app behavior rather than Microsoft platform outage announcements.",
      "D": "Incorrect. An Azure reservation offers a discount on eligible usage in return for a one- or three-year commitment. It is a pricing benefit, not a purchase of physical servers or a guarantee that every resource is free."
    },
    "keyClue": "Ready-to-use Bash in the browser.",
    "mentalModel": "Browser → Bash/PowerShell → administration commands",
    "examTip": "No local tools plus browser terminal → Cloud Shell.",
    "learnReference": "Microsoft Learn: Cloud Shell",
    "objective": "Describe Cloud Shell",
    "subtopic": "Cloud Shell",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "cloud-shell"
    ]
  },
  {
    "id": "AZ900-NEW-121",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Horizontal scaling",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A stateless web tier adds instances behind a load balancer. Which TWO statements describe this scaling change? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "The number of instances increases"
      },
      {
        "id": "B",
        "text": "Each existing instance must gain more RAM"
      },
      {
        "id": "C",
        "text": "Work can be distributed among multiple instances"
      },
      {
        "id": "D",
        "text": "It automatically creates a disaster-recovery region"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "The web tier is scaling horizontally. It adds machines and distributes work across them, rather than increasing each machine's size. Stateless request handling makes distribution easier because one machine does not need to retain the only copy of session state. A load balancer helps route traffic, but the application and data layers must also support the design. Horizontal capacity does not automatically create geographic disaster recovery.\n\nAdding instances increases server count rather than changing the size of just one machine.\n\nA compatible web application can distribute requests across the new and existing instances.\n\nMore RAM on an existing machine is vertical scaling and is not required for adding instances.",
    "optionExplanations": {
      "A": "Correct. Adding instances increases server count rather than changing the size of just one machine.",
      "B": "Incorrect. More RAM on an existing machine is vertical scaling and is not required for adding instances.",
      "C": "Correct. A compatible web application can distribute requests across the new and existing instances.",
      "D": "Incorrect. Adding servers in one deployment does not establish another region or a recovery procedure."
    },
    "keyClue": "Adds stateless instances behind a load balancer.",
    "mentalModel": "Instance 1 → instances 1, 2, 3",
    "examTip": "Scale out changes count and permits distributed work.",
    "learnReference": "Microsoft Learn: Horizontal scaling",
    "objective": "Describe Horizontal scaling",
    "subtopic": "Horizontal scaling",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "horizontal-scaling"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "The number of instances increases, Work can be distributed among multiple instances",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-122",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Vertical scaling",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A database VM changes from a smaller size to a larger size with more CPU and memory. Which TWO descriptions apply? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "This is horizontal scaling"
      },
      {
        "id": "B",
        "text": "This is vertical scaling"
      },
      {
        "id": "C",
        "text": "The number of database VMs must increase"
      },
      {
        "id": "D",
        "text": "A single instance gains capacity"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "The resize increases the capacity of one database VM, so it is vertical scaling. The instance count can remain one. This is useful when the workload needs more resources but cannot easily distribute work across machines. Larger sizes have limits, and a resize can affect availability depending on the resource and configuration. It is not an automatic move to a distributed database architecture.\n\nChanging the capacity of one existing VM is scaling up or vertically.\n\nThe new VM size provides more compute and memory to that one instance.\n\nHorizontal scaling changes instance count, which this resize does not do.",
    "optionExplanations": {
      "A": "Incorrect. Horizontal scaling changes instance count, which this resize does not do.",
      "B": "Correct. Changing the capacity of one existing VM is scaling up or vertically.",
      "C": "Incorrect. A resize can keep one VM; adding VMs is a different design.",
      "D": "Correct. The new VM size provides more compute and memory to that one instance."
    },
    "keyClue": "One VM resized for more CPU and memory.",
    "mentalModel": "One smaller VM → one larger VM",
    "examTip": "Scale up = a larger instance; scale out = more instances.",
    "learnReference": "Microsoft Learn: Vertical scaling",
    "objective": "Describe Vertical scaling",
    "subtopic": "Vertical scaling",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "vertical-scaling"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "This is vertical scaling, A single instance gains capacity",
      "mode": "vertical"
    }
  },
  {
    "id": "AZ900-NEW-123",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Azure Files",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A legacy app expects shared file paths. Which TWO facts about Azure Files are relevant? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It offers managed file shares"
      },
      {
        "id": "B",
        "text": "It is primarily a message queue"
      },
      {
        "id": "C",
        "text": "It supports SMB or NFS with suitable share configurations"
      },
      {
        "id": "D",
        "text": "Every file must be rehydrated from an offline archive before reading"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Azure Files supplies file shares with supported SMB or NFS configurations, matching an app that expects filesystem paths. The share configuration and client requirements determine which protocol to use; do not assume any individual share supports every protocol. This is different from storing blobs through object APIs or placing messages in a queue. It also differs from the offline Blob archive tier.\n\nThe service supplies file shares so applications can use shared filesystem paths.\n\nAzure Files supports these file protocols, subject to share type and configuration.\n\nQueue Storage handles asynchronous messages; Azure Files is filesystem storage.",
    "optionExplanations": {
      "A": "Correct. The service supplies file shares so applications can use shared filesystem paths.",
      "B": "Incorrect. Queue Storage handles asynchronous messages; Azure Files is filesystem storage.",
      "C": "Correct. Azure Files supports these file protocols, subject to share type and configuration.",
      "D": "Incorrect. Online file shares are not the Blob archive tier that requires rehydration."
    },
    "keyClue": "Shared paths and supported file protocols.",
    "mentalModel": "Clients → shared file paths → managed share",
    "examTip": "SMB/NFS managed share → Azure Files.",
    "learnReference": "Microsoft Learn: Azure Files",
    "objective": "Describe Azure Files",
    "subtopic": "Azure Files",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "azure-files"
    ]
  },
  {
    "id": "AZ900-NEW-124",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Queue Storage",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "An order system uses Queue Storage between its web frontend and background workers. Which TWO benefits match that design? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It provides SQL joins across orders"
      },
      {
        "id": "B",
        "text": "Components can exchange work asynchronously"
      },
      {
        "id": "C",
        "text": "It automatically replaces identity authentication"
      },
      {
        "id": "D",
        "text": "Workers can process queued messages after a temporary slowdown"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "A queue separates the component producing work from the component performing it. The frontend adds an order-processing message and does not need to wait for every background step. Messages can absorb temporary changes in work rate. Workers must still handle retries and possible repeated processing; a queue is not a promise of automatic business-level correctness. SQL analysis and sign-in use other services.\n\nThe frontend can enqueue a task and the worker can process it later.\n\nMessages can buffer pending work while worker throughput catches up, subject to queue settings.\n\nQueue messages are not relational tables and do not implement SQL joins.",
    "optionExplanations": {
      "A": "Incorrect. Queue messages are not relational tables and do not implement SQL joins.",
      "B": "Correct. The frontend can enqueue a task and the worker can process it later.",
      "C": "Incorrect. Queue access still needs appropriate credentials and authorization.",
      "D": "Correct. Messages can buffer pending work while worker throughput catches up, subject to queue settings."
    },
    "keyClue": "Frontend queues work for later workers.",
    "mentalModel": "Producer → messages → worker",
    "examTip": "Queue = asynchronous work buffer between components.",
    "learnReference": "Microsoft Learn: Queue Storage",
    "objective": "Describe Queue Storage",
    "subtopic": "Queue Storage",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "queue-storage"
    ]
  },
  {
    "id": "AZ900-NEW-125",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Table Storage",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Which TWO characteristics describe Azure Table Storage? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Stores structured entities with properties"
      },
      {
        "id": "B",
        "text": "Requires a mounted SMB file share"
      },
      {
        "id": "C",
        "text": "Supports relational SQL joins between tables"
      },
      {
        "id": "D",
        "text": "Uses partition and row keys to identify entities"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "Table Storage holds structured records without requiring the relational schema and joins of a SQL database. Entities use partition and row keys and can contain properties. This is useful for key-oriented data access, but applications should choose a relational database when they need its relationships and query features. It is not a mounted file share or a work-message queue.\n\nEntities carry key and property values in a schemaless NoSQL store.\n\nThe key pair identifies entities and supports how Table data is organized and accessed.\n\nSMB shares are Azure Files, not the Table entity access model.",
    "optionExplanations": {
      "A": "Correct. Entities carry key and property values in a schemaless NoSQL store.",
      "B": "Incorrect. SMB shares are Azure Files, not the Table entity access model.",
      "C": "Incorrect. Table Storage is not a relational SQL database with join semantics.",
      "D": "Correct. The key pair identifies entities and supports how Table data is organized and accessed."
    },
    "keyClue": "NoSQL entities identified by keys.",
    "mentalModel": "Partition key + row key → entity properties",
    "examTip": "Tables = keyed entities; Files = shares; Queues = messages.",
    "learnReference": "Microsoft Learn: Table Storage",
    "objective": "Describe Table Storage",
    "subtopic": "Table Storage",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "table-storage"
    ]
  },
  {
    "id": "AZ900-NEW-126",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Hot access tier",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A website reads product images frequently. Which TWO statements support choosing the hot blob access tier? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Content must be rehydrated before every read"
      },
      {
        "id": "B",
        "text": "It is designed for frequently accessed data"
      },
      {
        "id": "C",
        "text": "Access charges are generally lower than cooler tiers"
      },
      {
        "id": "D",
        "text": "It always has the lowest storage price"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Hot is intended for frequently accessed blobs such as actively viewed product images. Its cost tradeoff favors access, even though storing a given amount can cost more than cooler tiers. The correct choice depends on read volume and overall cost, not storage price alone. Online access means no archive rehydration is needed. Exact prices depend on configuration and pricing terms.\n\nHot balances cost for a workload with frequent reads.\n\nHot typically trades higher storage cost for lower access-related charges.\n\nRehydration is associated with offline archive blobs, not hot online access.",
    "optionExplanations": {
      "A": "Incorrect. Rehydration is associated with offline archive blobs, not hot online access.",
      "B": "Correct. Hot balances cost for a workload with frequent reads.",
      "C": "Correct. Hot typically trades higher storage cost for lower access-related charges.",
      "D": "Incorrect. Hot storage is typically more expensive to store than cooler tiers."
    },
    "keyClue": "Product images are read frequently.",
    "mentalModel": "Hot: higher storage cost / lower access cost",
    "examTip": "Frequent reads favor hot; lowest storage price alone can mislead.",
    "learnReference": "Microsoft Learn: Hot access tier",
    "objective": "Describe Hot access tier",
    "subtopic": "Hot access tier",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "hot-access-tier"
    ]
  },
  {
    "id": "AZ900-NEW-127",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure CLI",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Which TWO statements correctly describe Azure CLI? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It uses az command syntax"
      },
      {
        "id": "B",
        "text": "It only runs in the Azure portal graphical pages"
      },
      {
        "id": "C",
        "text": "It runs across supported operating systems"
      },
      {
        "id": "D",
        "text": "It is a declarative JSON template format"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Azure CLI is a command-line management tool. Commands such as az vm list make it useful for repeatable administration and scripts on supported platforms. It can be used locally or through Cloud Shell and is commonly paired with Bash, but it is not restricted to a single shell. An ARM template instead describes desired resources declaratively. Tools still need authentication and authorization.\n\nAzure CLI commands use az, for example az vm list.\n\nAzure CLI is cross-platform and can be used in different supported terminal environments.\n\nCLI can run in a local terminal or Cloud Shell rather than only graphical portal pages.",
    "optionExplanations": {
      "A": "Correct. Azure CLI commands use az, for example az vm list.",
      "B": "Incorrect. CLI can run in a local terminal or Cloud Shell rather than only graphical portal pages.",
      "C": "Correct. Azure CLI is cross-platform and can be used in different supported terminal environments.",
      "D": "Incorrect. ARM templates are declarative JSON files; CLI is a command tool."
    },
    "keyClue": "az commands and cross-platform administration.",
    "mentalModel": "CLI commands → Azure management requests",
    "examTip": "az syntax → CLI; Get-Az... cmdlets → PowerShell.",
    "learnReference": "Microsoft Learn: Azure CLI",
    "objective": "Describe Azure CLI",
    "subtopic": "Azure CLI",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-cli"
    ]
  },
  {
    "id": "AZ900-NEW-128",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure PowerShell",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Which TWO statements describe Azure PowerShell? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Its only valid syntax is az commands"
      },
      {
        "id": "B",
        "text": "It provides Azure management cmdlets"
      },
      {
        "id": "C",
        "text": "It can be used in PowerShell automation scripts"
      },
      {
        "id": "D",
        "text": "It bypasses Azure role permissions"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Azure PowerShell adds cmdlets for managing Azure using PowerShell syntax and object pipelines. It is useful when a team already uses PowerShell for administration. The Azure CLI has its own az syntax and is a separate tool, even when both run in the same shell environment. Scripting does not grant new permissions: every management request still operates under the signed-in identity.\n\nThe Az modules supply commands such as Get-AzVM.\n\nPowerShell scripts and object pipelines can combine management operations.\n\naz belongs to Azure CLI; Azure PowerShell uses cmdlets.",
    "optionExplanations": {
      "A": "Incorrect. az belongs to Azure CLI; Azure PowerShell uses cmdlets.",
      "B": "Correct. The Az modules supply commands such as Get-AzVM.",
      "C": "Correct. PowerShell scripts and object pipelines can combine management operations.",
      "D": "Incorrect. PowerShell requests are authorized like other clients and do not bypass RBAC."
    },
    "keyClue": "Azure cmdlets in PowerShell scripts.",
    "mentalModel": "PowerShell object pipeline → Az cmdlets → Azure",
    "examTip": "Get-AzVM is PowerShell; az vm list is CLI.",
    "learnReference": "Microsoft Learn: Azure PowerShell",
    "objective": "Describe Azure PowerShell",
    "subtopic": "Azure PowerShell",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-powershell"
    ]
  },
  {
    "id": "AZ900-NEW-129",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Resource Manager",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Which TWO statements describe Azure Resource Manager? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It is Azure's common resource management layer"
      },
      {
        "id": "B",
        "text": "It is the operating system inside every VM"
      },
      {
        "id": "C",
        "text": "It replaces all user authentication"
      },
      {
        "id": "D",
        "text": "Portal and command tools can use it to manage resources"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "ARM is the shared management layer used to deploy and administer Azure resources. The portal, command-line tools, SDKs, and template deployments can reach that layer. It helps apply consistent management and access controls across different interfaces. ARM is not a VM operating system or a replacement for identity authentication. The distinction is between a user-facing client and the service that processes its resource operations.\n\nARM handles resource deployment and management requests.\n\nThose tools are different clients of the common management layer.\n\nGuest operating systems run workloads; ARM is a management service.",
    "optionExplanations": {
      "A": "Correct. ARM handles resource deployment and management requests.",
      "B": "Incorrect. Guest operating systems run workloads; ARM is a management service.",
      "C": "Incorrect. Management requests still use identities and access controls.",
      "D": "Correct. Those tools are different clients of the common management layer."
    },
    "keyClue": "Common layer behind portal and management tools.",
    "mentalModel": "Portal / CLI / PowerShell → ARM → resources",
    "examTip": "Portal/CLI are clients; ARM is the management layer.",
    "learnReference": "Microsoft Learn: Azure Resource Manager",
    "objective": "Describe Azure Resource Manager",
    "subtopic": "Azure Resource Manager",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-resource-manager"
    ],
    "visual": {
      "type": "azure-hierarchy",
      "highlight": "It is Azure's common resource management layer, Portal and command tools can use it to manage resources",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-130",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "ARM templates",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A team uses ARM templates to create repeatable environments. Which TWO statements are accurate? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "They record only the order of mouse clicks"
      },
      {
        "id": "B",
        "text": "They declare resources and their settings"
      },
      {
        "id": "C",
        "text": "They can be kept in version control"
      },
      {
        "id": "D",
        "text": "They guarantee a secure application without review"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "ARM templates express resources and settings in declarative JSON files. Saving them in version control lets the team review changes and repeat a deployment more consistently. ARM processes the declarations rather than replaying clicks. This does not guarantee every app is secure or that secrets should be embedded in the file. Permissions, parameters, deployment validation, and code review still matter.\n\nAn ARM JSON template specifies a desired resource configuration.\n\nSaved template files can be reviewed, compared, and reused through source control.\n\nTemplates describe resources in a file, not a recording of portal actions.",
    "optionExplanations": {
      "A": "Incorrect. Templates describe resources in a file, not a recording of portal actions.",
      "B": "Correct. An ARM JSON template specifies a desired resource configuration.",
      "C": "Correct. Saved template files can be reviewed, compared, and reused through source control.",
      "D": "Incorrect. Templates can contain poor configuration and still need validation and security review."
    },
    "keyClue": "Declare repeatable resource settings in versioned files.",
    "mentalModel": "Versioned template → validated deployment → resources",
    "examTip": "ARM templates describe desired resources, not portal-click sequences.",
    "learnReference": "Microsoft Learn: ARM templates",
    "objective": "Describe ARM templates",
    "subtopic": "ARM templates",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "arm-templates"
    ]
  },
  {
    "id": "AZ900-NEW-131",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Elasticity",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "A shop automatically changes capacity with customer demand. Which TWO changes together demonstrate elasticity? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Add instances during peak demand"
      },
      {
        "id": "B",
        "text": "Purchase fixed peak capacity permanently"
      },
      {
        "id": "C",
        "text": "Remove excess instances when demand falls"
      },
      {
        "id": "D",
        "text": "Keep the server count fixed regardless of traffic"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Elasticity includes expanding and contracting resources as demand changes. The shop adds instances for busy periods and removes excess ones afterward. Both changes are important: permanent peak provisioning keeps excess capacity running even during quiet periods. Autoscaling can implement elasticity when configured correctly, but the application must tolerate scale changes. Scalability is the capacity-changing ability; elasticity emphasizes matching changing demand.\n\nIncreasing capacity in response to rising demand is the expansion side of elasticity.\n\nReducing capacity after the peak is the contraction side of elasticity.\n\nKeeping maximum capacity regardless of demand is not demand-following elasticity.",
    "optionExplanations": {
      "A": "Correct. Increasing capacity in response to rising demand is the expansion side of elasticity.",
      "B": "Incorrect. Keeping maximum capacity regardless of demand is not demand-following elasticity.",
      "C": "Correct. Reducing capacity after the peak is the contraction side of elasticity.",
      "D": "Incorrect. A fixed capacity policy does not respond to changing demand."
    },
    "keyClue": "Expand at the peak and shrink afterward.",
    "mentalModel": "Traffic rises → add\nTraffic drops → remove",
    "examTip": "Capacity follows demand in both directions → elasticity.",
    "learnReference": "Microsoft Learn: Elasticity",
    "objective": "Describe Elasticity",
    "subtopic": "Elasticity",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "elasticity"
    ],
    "visual": {
      "type": "scaling",
      "highlight": "Add instances during peak demand, Remove excess instances when demand falls",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-132",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud economies of scale",
    "difficulty": "medium",
    "type": "multiple-choice",
    "question": "Which TWO factors can explain a large cloud provider's economies of scale? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "No datacenter ever needs maintenance"
      },
      {
        "id": "B",
        "text": "Bulk purchasing of equipment"
      },
      {
        "id": "C",
        "text": "Customers receive every service without charges"
      },
      {
        "id": "D",
        "text": "Shared infrastructure operations across many customers"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "explanation": "Large providers can buy equipment in bulk and distribute operating costs across a broad customer base. Those mechanisms can reduce unit cost compared with many small separate facilities. They do not remove maintenance, personnel, power, or network costs. Customers should still compare their full expected costs and manage resources carefully. Economies of scale is a cost-efficiency explanation, not a guarantee of free services.\n\nLarge orders can reduce equipment cost per unit.\n\nSpreading fixed operating costs can reduce per-customer costs.\n\nProviders still maintain buildings and equipment.",
    "optionExplanations": {
      "A": "Incorrect. Providers still maintain buildings and equipment.",
      "B": "Correct. Large orders can reduce equipment cost per unit.",
      "C": "Incorrect. Economies of scale do not eliminate customer billing.",
      "D": "Correct. Spreading fixed operating costs can reduce per-customer costs."
    },
    "keyClue": "Bulk purchases and shared operations.",
    "mentalModel": "Bulk inputs + spread fixed costs → potential savings",
    "examTip": "Scale economies reduce unit costs through purchasing and shared overhead.",
    "learnReference": "Microsoft Learn: Cloud economies of scale",
    "objective": "Describe Cloud economies of scale",
    "subtopic": "Cloud economies of scale",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-economies-of-scale"
    ]
  },
  {
    "id": "AZ900-NEW-133",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Cool access tier",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "Reports are read infrequently but must remain immediately accessible online. Which TWO properties favor the cool blob tier over archive? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Online access without archive rehydration"
      },
      {
        "id": "B",
        "text": "No access charges of any kind"
      },
      {
        "id": "C",
        "text": "Lower storage cost than hot, with access-cost tradeoffs"
      },
      {
        "id": "D",
        "text": "Archived content is always instantly readable"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Cool is an online tier for data that is not read often. It can reduce storage cost compared with hot while charging more for access and carrying a minimum-duration consideration. The reports still need prompt reads, which rules out treating archive as an equivalent online tier. Total cost depends on storage duration and access patterns. The lower storage price is only one part of the decision.\n\nCool remains online, unlike the offline archive tier.\n\nCool generally favors storage savings for less-frequent access.\n\nCool can incur access and transaction charges.",
    "optionExplanations": {
      "A": "Correct. Cool remains online, unlike the offline archive tier.",
      "B": "Incorrect. Cool can incur access and transaction charges.",
      "C": "Correct. Cool generally favors storage savings for less-frequent access.",
      "D": "Incorrect. Archive content needs rehydration before online reads."
    },
    "keyClue": "Infrequent reads but immediate online access.",
    "mentalModel": "Cool: online, infrequent access\nArchive: offline, rarely accessed",
    "examTip": "Cool remains online; archive requires rehydration.",
    "learnReference": "Microsoft Learn: Cool access tier",
    "objective": "Describe Cool access tier",
    "subtopic": "Cool access tier",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "cool-access-tier"
    ]
  },
  {
    "id": "AZ900-NEW-134",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "Archive access tier",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "A legal archive stores supported block blobs rarely read. Which TWO statements about the archive tier must be considered? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Every read is as immediate as hot access"
      },
      {
        "id": "B",
        "text": "Content must be rehydrated before normal online reading"
      },
      {
        "id": "C",
        "text": "It can trade access delay for lower storage cost"
      },
      {
        "id": "D",
        "text": "It supports every redundancy configuration without restrictions"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Archive offers low-cost storage for rarely read supported blobs, but content is offline. Retrieval needs rehydration and can take time. This is sensible for long-term retention when immediate reading is not required. Retrieval charges, early-deletion considerations, and compatibility with the storage configuration matter. Hot and cool are online tiers; neither has the same rehydration requirement. Low storage cost alone should not decide a time-critical workload.\n\nRehydration moves the blob to an online tier for access.\n\nArchive suits data kept a long time and rarely accessed, with retrieval and duration costs considered.\n\nArchive is offline; immediate access is not its normal read model.",
    "optionExplanations": {
      "A": "Incorrect. Archive is offline; immediate access is not its normal read model.",
      "B": "Correct. Rehydration moves the blob to an online tier for access.",
      "C": "Correct. Archive suits data kept a long time and rarely accessed, with retrieval and duration costs considered.",
      "D": "Incorrect. Archive has account/redundancy compatibility restrictions, so support must be checked."
    },
    "keyClue": "Rare reads with acceptable retrieval delay.",
    "mentalModel": "Offline archive → rehydrate → online blob",
    "examTip": "Archive saves storage cost by accepting offline retrieval delay.",
    "learnReference": "Microsoft Learn: Archive access tier",
    "objective": "Describe Archive access tier",
    "subtopic": "Archive access tier",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "archive-access-tier"
    ]
  },
  {
    "id": "AZ900-NEW-135",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "LRS",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "Which TWO statements accurately describe locally redundant storage (LRS)? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It keeps redundant copies in one datacenter"
      },
      {
        "id": "B",
        "text": "It guarantees survival of that datacenter's complete destruction"
      },
      {
        "id": "C",
        "text": "It creates a secondary-region replica automatically"
      },
      {
        "id": "D",
        "text": "It protects against local drive/server failures"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "explanation": "LRS uses copies in one datacenter to reduce risk from local hardware failures. That does not give geographic or availability-zone separation. A disaster destroying the entire location can affect all local copies. ZRS and geo-redundant options address broader failure boundaries. Replication also is not a replacement for backup, because deletions can be copied to every replica. Match the redundancy design to the failure you need to withstand.\n\nThe replicas are local to one physical datacenter in the primary region.\n\nLocal replicas help preserve data through hardware failures within the location.\n\nCopies in the same datacenter can all be lost in a datacenter-wide disaster.",
    "optionExplanations": {
      "A": "Correct. The replicas are local to one physical datacenter in the primary region.",
      "B": "Incorrect. Copies in the same datacenter can all be lost in a datacenter-wide disaster.",
      "C": "Incorrect. Geo options such as GRS supply secondary-region copying, not LRS.",
      "D": "Correct. Local replicas help preserve data through hardware failures within the location."
    },
    "keyClue": "Copies local to one datacenter.",
    "mentalModel": "One datacenter: several replicas",
    "examTip": "LRS protects local hardware failures, not loss of its entire location.",
    "learnReference": "Microsoft Learn: LRS",
    "objective": "Describe LRS",
    "subtopic": "LRS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "lrs"
    ],
    "visual": {
      "type": "storage-redundancy",
      "highlight": "It keeps redundant copies in one datacenter, It protects against local drive/server failures",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-136",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Infrastructure as Code",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "A team manages its Azure infrastructure as versioned template files. Which TWO benefits does Infrastructure as Code provide? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It removes all deployment permissions"
      },
      {
        "id": "B",
        "text": "Changes can be reviewed and compared in version control"
      },
      {
        "id": "C",
        "text": "Environments can be recreated from consistent definitions"
      },
      {
        "id": "D",
        "text": "It makes every declared configuration secure by definition"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Infrastructure as Code expresses environment definitions in files rather than relying only on manual administration. Version control makes changes reviewable and helps reproduce environments. Repeatability is useful for testing and recovery, but it can repeat mistakes as well. Teams still need secure settings, appropriate permissions, parameter handling, and deployment checks. The technique improves the management process rather than guaranteeing application security.\n\nFiles can show resource-setting differences through a review process.\n\nReuse of definitions supports repeatability, with parameters and dependencies managed.\n\nDeployments still need appropriate identity and role permissions.",
    "optionExplanations": {
      "A": "Incorrect. Deployments still need appropriate identity and role permissions.",
      "B": "Correct. Files can show resource-setting differences through a review process.",
      "C": "Correct. Reuse of definitions supports repeatability, with parameters and dependencies managed.",
      "D": "Incorrect. Incorrect or insecure settings can be reproduced too, so validation remains necessary."
    },
    "keyClue": "Versioned definitions for repeatable environments.",
    "mentalModel": "Definition → review → deployment → reproducible environment",
    "examTip": "IaC makes infrastructure reviewable and repeatable; still validate it.",
    "learnReference": "Microsoft Learn: Infrastructure as Code",
    "objective": "Describe Infrastructure as Code",
    "subtopic": "Infrastructure as Code",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "infrastructure-as-code"
    ]
  },
  {
    "id": "AZ900-NEW-137",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Arc",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "Which TWO statements about Azure Arc are correct? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "It extends Azure management to supported non-Azure resources"
      },
      {
        "id": "B",
        "text": "It automatically migrates connected servers into Azure VMs"
      },
      {
        "id": "C",
        "text": "It can support governance of connected hybrid resources"
      },
      {
        "id": "D",
        "text": "It removes all operating-system responsibility"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "explanation": "Azure Arc extends supported Azure management capabilities beyond Azure datacenters. An organization can connect eligible servers running on premises or in another cloud and manage them using supported Azure tools and policies. The server still runs where it was, and its owner still maintains applicable OS and workload responsibilities. Arc connectivity is management integration, not an automatic migration service.\n\nArc can bring supported on-premises and other-cloud resources into Azure management.\n\nSupported integrations can apply Azure governance and management capabilities.\n\nRegistration connects management; it does not physically move or rehost the workload.",
    "optionExplanations": {
      "A": "Correct. Arc can bring supported on-premises and other-cloud resources into Azure management.",
      "B": "Incorrect. Registration connects management; it does not physically move or rehost the workload.",
      "C": "Correct. Supported integrations can apply Azure governance and management capabilities.",
      "D": "Incorrect. The server owner still has workload and OS responsibilities."
    },
    "keyClue": "Azure management for servers remaining outside Azure.",
    "mentalModel": "External server ↔ Arc ↔ Azure management",
    "examTip": "Arc extends management; migration moves workloads.",
    "learnReference": "Microsoft Learn: Azure Arc",
    "objective": "Describe Azure Arc",
    "subtopic": "Azure Arc",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-arc"
    ]
  },
  {
    "id": "AZ900-NEW-138",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Monitor",
    "difficulty": "hard",
    "type": "multiple-choice",
    "question": "Which TWO signal types are commonly collected and analyzed through Azure Monitor? Choose TWO answers.",
    "options": [
      {
        "id": "A",
        "text": "Only planned Microsoft maintenance announcements"
      },
      {
        "id": "B",
        "text": "Resource metrics such as CPU utilization"
      },
      {
        "id": "C",
        "text": "Logs recording events and application activity"
      },
      {
        "id": "D",
        "text": "Only the one-time purchase price of physical servers"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "explanation": "Monitor works with metrics and logs to observe resource and application behavior. Metrics summarize numeric measurements over time; logs provide event records and context. Alerts can evaluate collected signals, and operators can investigate the evidence. Planned Azure maintenance information comes from Service Health. The monitoring configuration must collect the relevant data; simply owning a resource does not guarantee every desired app log is present.\n\nMetrics are numerical time-series signals used to observe workload behavior.\n\nLogs carry records that can be queried to investigate behavior.\n\nThose announcements are a Service Health concern, not the full Monitor telemetry model.",
    "optionExplanations": {
      "A": "Incorrect. Those announcements are a Service Health concern, not the full Monitor telemetry model.",
      "B": "Correct. Metrics are numerical time-series signals used to observe workload behavior.",
      "C": "Correct. Logs carry records that can be queried to investigate behavior.",
      "D": "Incorrect. Monitor is workload telemetry rather than capital-asset accounting."
    },
    "keyClue": "CPU measurements and activity records.",
    "mentalModel": "Workload → metrics/logs → Monitor → investigation",
    "examTip": "Metrics = measurements; logs = contextual event records.",
    "learnReference": "Microsoft Learn: Azure Monitor",
    "objective": "Describe Azure Monitor",
    "subtopic": "Azure Monitor",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-monitor"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Resource metrics such as CPU utilization, Logs recording events and application activity",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-139",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Log Analytics",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Log Analytics can query collected Azure Monitor log data using Kusto Query Language (KQL).",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Log Analytics is the query experience for Azure Monitor logs. KQL can filter, aggregate, and correlate records to investigate failures or activity. This is runtime or operational evidence rather than simply a list of deployed resources. The data must have been collected into the appropriate workspace; queries cannot reconstruct logs that were never ingested. Resource Graph serves a different inventory-query purpose.",
    "optionExplanations": {
      "A": "Correct. Yes. Log Analytics is the query experience for Azure Monitor logs. KQL can filter, aggregate, and correlate records to investigate failures or activity. This is runtime or operational evidence rather than simply a list of deployed resources. The data must have been collected into the appropriate workspace; queries cannot reconstruct logs that were never ingested. Resource Graph serves a different inventory-query purpose.",
      "B": "Incorrect. The statement is true. Yes. Log Analytics is the query experience for Azure Monitor logs. KQL can filter, aggregate, and correlate records to investigate failures or activity. This is runtime or operational evidence rather than simply a list of deployed resources. The data must have been collected into the appropriate workspace; queries cannot reconstruct logs that were never ingested. Resource Graph serves a different inventory-query purpose."
    },
    "keyClue": "Collected Monitor logs queried with KQL.",
    "mentalModel": "Collected records → KQL query → investigation",
    "examTip": "KQL over Monitor logs → Log Analytics.",
    "learnReference": "Microsoft Learn: Log Analytics",
    "objective": "Describe Log Analytics",
    "subtopic": "Log Analytics",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "log-analytics"
    ]
  },
  {
    "id": "AZ900-NEW-140",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Application Insights",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Application Insights is mainly a tool for announcing Microsoft's planned Azure service maintenance.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "No. Application Insights monitors application performance and behavior, including requests, failures, dependencies, and tracing. A developer can use it to investigate a slow API or failed call. Azure Service Health is the appropriate source for relevant Microsoft service incidents and maintenance. The distinction is between the application's internal execution evidence and platform-side service-event communication.",
    "optionExplanations": {
      "A": "Incorrect. The statement is false. No. Application Insights monitors application performance and behavior, including requests, failures, dependencies, and tracing. A developer can use it to investigate a slow API or failed call. Azure Service Health is the appropriate source for relevant Microsoft service incidents and maintenance. The distinction is between the application's internal execution evidence and platform-side service-event communication.",
      "B": "Correct. No. Application Insights monitors application performance and behavior, including requests, failures, dependencies, and tracing. A developer can use it to investigate a slow API or failed call. Azure Service Health is the appropriate source for relevant Microsoft service incidents and maintenance. The distinction is between the application's internal execution evidence and platform-side service-event communication."
    },
    "keyClue": "Planned Azure service maintenance is being confused with app telemetry.",
    "mentalModel": "App execution: Insights\nAzure event: Service Health",
    "examTip": "App performance → Application Insights; platform maintenance → Service Health.",
    "learnReference": "Microsoft Learn: Application Insights",
    "objective": "Describe Application Insights",
    "subtopic": "Application Insights",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "application-insights"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "No",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-141",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Private cloud",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: A private cloud must always be located in the organization's own office building.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "No. Private describes infrastructure dedicated to one organization, not a mandatory street address or building owner. A private cloud may be hosted elsewhere while remaining dedicated. On-premises describes location, and hybrid describes connecting public cloud with private/on-premises environments. Those deployment terms should not be substituted for IaaS, PaaS, and SaaS, which describe service responsibility.",
    "optionExplanations": {
      "A": "Incorrect. The statement is false. No. Private describes infrastructure dedicated to one organization, not a mandatory street address or building owner. A private cloud may be hosted elsewhere while remaining dedicated. On-premises describes location, and hybrid describes connecting public cloud with private/on-premises environments. Those deployment terms should not be substituted for IaaS, PaaS, and SaaS, which describe service responsibility.",
      "B": "Correct. No. Private describes infrastructure dedicated to one organization, not a mandatory street address or building owner. A private cloud may be hosted elsewhere while remaining dedicated. On-premises describes location, and hybrid describes connecting public cloud with private/on-premises environments. Those deployment terms should not be substituted for IaaS, PaaS, and SaaS, which describe service responsibility."
    },
    "keyClue": "Must always be in the organization's office.",
    "mentalModel": "Private = dedicated\nOn-premises = local facility",
    "examTip": "Private cloud is about dedication; on-premises is about location.",
    "learnReference": "Microsoft Learn: Private cloud",
    "objective": "Describe Private cloud",
    "subtopic": "Private cloud",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "private-cloud"
    ],
    "visual": {
      "type": "cloud-deployment-models",
      "highlight": "No",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-142",
    "domain": "cloud",
    "domainName": "Cloud Concepts",
    "topic": "Cloud migration benefits",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Migrating an application to Azure automatically removes all customer security and reliability responsibilities.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "No. Cloud services change responsibility boundaries, but customers still must manage their identities, access, data, and workload configuration. IaaS also retains guest OS responsibilities. Reliability still depends on application design, monitoring, backups, and recovery choices. Migration can offer useful platform capabilities, but it does not automatically configure all of them or remove vulnerabilities in customer code.",
    "optionExplanations": {
      "A": "Incorrect. The statement is false. No. Cloud services change responsibility boundaries, but customers still must manage their identities, access, data, and workload configuration. IaaS also retains guest OS responsibilities. Reliability still depends on application design, monitoring, backups, and recovery choices. Migration can offer useful platform capabilities, but it does not automatically configure all of them or remove vulnerabilities in customer code.",
      "B": "Correct. No. Cloud services change responsibility boundaries, but customers still must manage their identities, access, data, and workload configuration. IaaS also retains guest OS responsibilities. Reliability still depends on application design, monitoring, backups, and recovery choices. Migration can offer useful platform capabilities, but it does not automatically configure all of them or remove vulnerabilities in customer code."
    },
    "keyClue": "Automatically removes all customer responsibilities.",
    "mentalModel": "Provider platform + customer design → workload outcome",
    "examTip": "Migration changes responsibilities; it does not eliminate them.",
    "learnReference": "Microsoft Learn: Cloud migration benefits",
    "objective": "Describe Cloud migration benefits",
    "subtopic": "Cloud migration benefits",
    "sourceVersion": "2026-07-20",
    "tags": [
      "cloud",
      "cloud-migration-benefits"
    ],
    "visual": {
      "type": "cloud-service-models",
      "highlight": "No",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-143",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "ZRS",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: ZRS alone creates a copy of storage data in a second geographic region.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "No. ZRS synchronously spreads copies across availability zones in the primary region. Those locations reduce the risk of a zone outage but remain inside that region. GRS or GZRS adds a secondary-region copy using asynchronous replication. The scope of the potential failure distinguishes these options. Zone separation should not be mistaken for geographic disaster recovery.",
    "optionExplanations": {
      "A": "Incorrect. The statement is false. No. ZRS synchronously spreads copies across availability zones in the primary region. Those locations reduce the risk of a zone outage but remain inside that region. GRS or GZRS adds a secondary-region copy using asynchronous replication. The scope of the potential failure distinguishes these options. Zone separation should not be mistaken for geographic disaster recovery.",
      "B": "Correct. No. ZRS synchronously spreads copies across availability zones in the primary region. Those locations reduce the risk of a zone outage but remain inside that region. GRS or GZRS adds a secondary-region copy using asynchronous replication. The scope of the potential failure distinguishes these options. Zone separation should not be mistaken for geographic disaster recovery."
    },
    "keyClue": "Second geographic region versus zones in one region.",
    "mentalModel": "ZRS: zones within region\nGRS/GZRS: second region",
    "examTip": "ZRS = primary-region zones; geo options = another region.",
    "learnReference": "Microsoft Learn: ZRS",
    "objective": "Describe ZRS",
    "subtopic": "ZRS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "zrs"
    ],
    "visual": {
      "type": "storage-redundancy",
      "highlight": "No",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-144",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "GRS",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Because GRS copies updates asynchronously to a secondary region, a regional failover can lose recent writes.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Asynchronous replication means a write can finish in the primary before reaching the secondary. If the primary fails during that interval, some recent data may be absent from the recovery copy. GRS improves geographic durability, but is not a guarantee of zero data loss for every failure. Recovery objectives and backups should account for this difference between local write completion and secondary replication.",
    "optionExplanations": {
      "A": "Correct. Yes. Asynchronous replication means a write can finish in the primary before reaching the secondary. If the primary fails during that interval, some recent data may be absent from the recovery copy. GRS improves geographic durability, but is not a guarantee of zero data loss for every failure. Recovery objectives and backups should account for this difference between local write completion and secondary replication.",
      "B": "Incorrect. The statement is true. Yes. Asynchronous replication means a write can finish in the primary before reaching the secondary. If the primary fails during that interval, some recent data may be absent from the recovery copy. GRS improves geographic durability, but is not a guarantee of zero data loss for every failure. Recovery objectives and backups should account for this difference between local write completion and secondary replication."
    },
    "keyClue": "Asynchronous geo-replication can lag primary writes.",
    "mentalModel": "Primary write → later secondary copy",
    "examTip": "Asynchronous copying can create a recent-data recovery gap.",
    "learnReference": "Microsoft Learn: GRS",
    "objective": "Describe GRS",
    "subtopic": "GRS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "grs"
    ],
    "visual": {
      "type": "storage-redundancy",
      "highlight": "Yes",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-145",
    "domain": "architecture",
    "domainName": "Azure Architecture and Services",
    "topic": "GZRS",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: GZRS combines zone redundancy in the primary region with replication to a secondary region.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. GZRS uses ZRS-style primary-region zone replication, then asynchronous geo-replication to a secondary region. This combines local zone resilience with geographic protection. It does not mean that all secondary copies are also spread across zones, or that every recent write is guaranteed present there. Read access before failover is an additional feature of the read-access version.",
    "optionExplanations": {
      "A": "Correct. Yes. GZRS uses ZRS-style primary-region zone replication, then asynchronous geo-replication to a secondary region. This combines local zone resilience with geographic protection. It does not mean that all secondary copies are also spread across zones, or that every recent write is guaranteed present there. Read access before failover is an additional feature of the read-access version.",
      "B": "Incorrect. The statement is true. Yes. GZRS uses ZRS-style primary-region zone replication, then asynchronous geo-replication to a secondary region. This combines local zone resilience with geographic protection. It does not mean that all secondary copies are also spread across zones, or that every recent write is guaranteed present there. Read access before failover is an additional feature of the read-access version."
    },
    "keyClue": "Primary zone redundancy plus secondary-region copy.",
    "mentalModel": "Primary zones → asynchronous copy → secondary region",
    "examTip": "GZRS = ZRS primary + geo-replication.",
    "learnReference": "Microsoft Learn: GZRS",
    "objective": "Describe GZRS",
    "subtopic": "GZRS",
    "sourceVersion": "2026-07-20",
    "tags": [
      "architecture",
      "gzrs"
    ],
    "visual": {
      "type": "storage-redundancy",
      "highlight": "Yes",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-146",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Monitor Alerts",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Every Azure Monitor alert automatically repairs the underlying issue without any configured action.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "No. An alert evaluates a condition and can trigger configured actions such as notifications or an automation workflow. It does not automatically know how to repair every application or infrastructure problem. Teams must choose action groups, remediation steps, and access appropriately. The first benefit can be awareness, followed by human investigation. A notification should not be mistaken for a completed repair.",
    "optionExplanations": {
      "A": "Incorrect. The statement is false. No. An alert evaluates a condition and can trigger configured actions such as notifications or an automation workflow. It does not automatically know how to repair every application or infrastructure problem. Teams must choose action groups, remediation steps, and access appropriately. The first benefit can be awareness, followed by human investigation. A notification should not be mistaken for a completed repair.",
      "B": "Correct. No. An alert evaluates a condition and can trigger configured actions such as notifications or an automation workflow. It does not automatically know how to repair every application or infrastructure problem. Teams must choose action groups, remediation steps, and access appropriately. The first benefit can be awareness, followed by human investigation. A notification should not be mistaken for a completed repair."
    },
    "keyClue": "Automatically repairs every issue without configuration.",
    "mentalModel": "Signal → condition → configured action",
    "examTip": "An alert detects a condition; remediation needs an appropriate action.",
    "learnReference": "Microsoft Learn: Azure Monitor Alerts",
    "objective": "Describe Azure Monitor Alerts",
    "subtopic": "Azure Monitor Alerts",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-monitor-alerts"
    ]
  },
  {
    "id": "AZ900-NEW-147",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Advisor",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Azure Advisor's main purpose is to provide optimization recommendations rather than act as the primary application log-query tool.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Advisor reviews deployments and supplies improvement suggestions across several optimization categories. It can suggest actions, but logs and runtime queries are chiefly part of Azure Monitor and Log Analytics. Recommendations complement measured evidence and still need evaluation before changes. Service Health separately communicates Azure-side incidents. These tools cooperate while having different primary roles.",
    "optionExplanations": {
      "A": "Correct. Yes. Advisor reviews deployments and supplies improvement suggestions across several optimization categories. It can suggest actions, but logs and runtime queries are chiefly part of Azure Monitor and Log Analytics. Recommendations complement measured evidence and still need evaluation before changes. Service Health separately communicates Azure-side incidents. These tools cooperate while having different primary roles.",
      "B": "Incorrect. The statement is true. Yes. Advisor reviews deployments and supplies improvement suggestions across several optimization categories. It can suggest actions, but logs and runtime queries are chiefly part of Azure Monitor and Log Analytics. Recommendations complement measured evidence and still need evaluation before changes. Service Health separately communicates Azure-side incidents. These tools cooperate while having different primary roles."
    },
    "keyClue": "Recommendations versus app log queries.",
    "mentalModel": "Recommend: Advisor\nObserve: Monitor",
    "examTip": "Advisor recommends; Monitor and Log Analytics investigate telemetry.",
    "learnReference": "Microsoft Learn: Azure Advisor",
    "objective": "Describe Azure Advisor",
    "subtopic": "Azure Advisor",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-advisor"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Yes",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-148",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Service Health",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Azure Service Health can provide personalized Azure incident and maintenance information relevant to a customer's services.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Service Health identifies Azure service events relevant to the customer's resources and regions, including incidents, planned maintenance, and advisories. That information helps operations teams understand platform-side disruptions. It is not a substitute for measuring the workload's own requests, errors, or CPU usage. Azure Monitor supplies that telemetry, while Advisor offers optimization recommendations.",
    "optionExplanations": {
      "A": "Correct. Yes. Service Health identifies Azure service events relevant to the customer's resources and regions, including incidents, planned maintenance, and advisories. That information helps operations teams understand platform-side disruptions. It is not a substitute for measuring the workload's own requests, errors, or CPU usage. Azure Monitor supplies that telemetry, while Advisor offers optimization recommendations.",
      "B": "Incorrect. The statement is true. Yes. Service Health identifies Azure service events relevant to the customer's resources and regions, including incidents, planned maintenance, and advisories. That information helps operations teams understand platform-side disruptions. It is not a substitute for measuring the workload's own requests, errors, or CPU usage. Azure Monitor supplies that telemetry, while Advisor offers optimization recommendations."
    },
    "keyClue": "Personalized Azure service incident and maintenance information.",
    "mentalModel": "Azure events → Service Health\nApp signals → Monitor",
    "examTip": "Relevant Azure platform events → Service Health.",
    "learnReference": "Microsoft Learn: Azure Service Health",
    "objective": "Describe Azure Service Health",
    "subtopic": "Azure Service Health",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-service-health"
    ],
    "visual": {
      "type": "monitoring-tools",
      "highlight": "Yes",
      "mode": "horizontal"
    }
  },
  {
    "id": "AZ900-NEW-149",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Resource Graph",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Azure Resource Graph is primarily intended to query resource inventory and properties across authorized Azure scopes.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Yes. Resource Graph can answer inventory questions such as which resources exist and how they are configured across subscriptions the caller may access. It respects authorization and is distinct from Log Analytics, which queries ingested runtime logs. Both can use query-oriented interfaces, but the dataset determines which is appropriate. Listing VMs is not the same as reading their application traces.",
    "optionExplanations": {
      "A": "Correct. Yes. Resource Graph can answer inventory questions such as which resources exist and how they are configured across subscriptions the caller may access. It respects authorization and is distinct from Log Analytics, which queries ingested runtime logs. Both can use query-oriented interfaces, but the dataset determines which is appropriate. Listing VMs is not the same as reading their application traces.",
      "B": "Incorrect. The statement is true. Yes. Resource Graph can answer inventory questions such as which resources exist and how they are configured across subscriptions the caller may access. It respects authorization and is distinct from Log Analytics, which queries ingested runtime logs. Both can use query-oriented interfaces, but the dataset determines which is appropriate. Listing VMs is not the same as reading their application traces."
    },
    "keyClue": "Resource inventory and properties across scopes.",
    "mentalModel": "Resource configuration → Graph\nTelemetry records → Log Analytics",
    "examTip": "Inventory → Resource Graph; runtime log records → Log Analytics.",
    "learnReference": "Microsoft Learn: Azure Resource Graph",
    "objective": "Describe Azure Resource Graph",
    "subtopic": "Azure Resource Graph",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-resource-graph"
    ]
  },
  {
    "id": "AZ900-NEW-150",
    "domain": "governance",
    "domainName": "Azure Management and Governance",
    "topic": "Azure Budgets",
    "difficulty": "hard",
    "type": "yes-no",
    "question": "Statement: Creating an Azure budget by itself guarantees that resources stop and charges cannot exceed the chosen amount.",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "No. Budgets are spending-monitoring and notification tools. They can alert at configured thresholds, but creating one does not impose a universal hard spending cap or automatically stop resources. A team can design separate workflows to respond, while charges may continue until the relevant resources are changed. Cost Management helps track spending, and the Pricing Calculator supports estimates before deployment.",
    "optionExplanations": {
      "A": "Incorrect. The statement is false. No. Budgets are spending-monitoring and notification tools. They can alert at configured thresholds, but creating one does not impose a universal hard spending cap or automatically stop resources. A team can design separate workflows to respond, while charges may continue until the relevant resources are changed. Cost Management helps track spending, and the Pricing Calculator supports estimates before deployment.",
      "B": "Correct. No. Budgets are spending-monitoring and notification tools. They can alert at configured thresholds, but creating one does not impose a universal hard spending cap or automatically stop resources. A team can design separate workflows to respond, while charges may continue until the relevant resources are changed. Cost Management helps track spending, and the Pricing Calculator supports estimates before deployment."
    },
    "keyClue": "Budget alone versus a guaranteed hard spending cap.",
    "mentalModel": "Spend threshold → notification → planned response",
    "examTip": "Budget = monitor and notify; shutdown requires separate action.",
    "learnReference": "Microsoft Learn: Azure Budgets",
    "objective": "Describe Azure Budgets",
    "subtopic": "Azure Budgets",
    "sourceVersion": "2026-07-20",
    "tags": [
      "governance",
      "azure-budgets"
    ]
  }
];
