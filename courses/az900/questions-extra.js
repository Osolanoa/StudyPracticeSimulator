/* Supplemental AZ-900 questions. Appended after the original 150 so saved practice IDs remain stable. */
(function () {
  const domains = { cloud: 'Cloud Concepts', architecture: 'Azure Architecture and Services', governance: 'Azure Management and Governance' };
  const refs = {
    cloud: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
    architecture: 'https://learn.microsoft.com/en-us/training/paths/azure-fundamentals-describe-azure-architecture-services/',
    governance: 'https://learn.microsoft.com/en-us/training/paths/describe-azure-management-governance/'
  };
  const sourceVersion = '2026-07-20';
  function add(n, domain, topic, difficulty, question, options, correct, explanation) {
    const ids = ['A', 'B', 'C', 'D'];
    const shift = (n - 151) % options.length;
    const presented = options.slice(shift).concat(options.slice(0, shift));
    const answer = ids[(correct - shift + options.length) % options.length];
    window.COURSE_QUESTIONS.push({
      id: `AZ900-GAP-${String(n).padStart(3, '0')}`, domain, domainName: domains[domain], topic,
      difficulty, type: 'single-choice', question,
      options: presented.map((o, i) => ({ id: ids[i], text: o[0] })), correctAnswers: [answer],
      explanation, optionExplanations: Object.fromEntries(presented.map((o, i) => [ids[i], `${ids[i] === answer ? 'Correct' : 'Incorrect'}. ${o[1]}`])),
      keyClue: explanation.split('.')[0] + '.',
      mentalModel: explanation,
      examTip: `Identify the requirement, then compare the scope and purpose of each option.`,
      learnReference: refs[domain], objective: topic, subtopic: topic, sourceVersion,
      tags: [domain, 'supplemental-2026']
    });
  }

  // Practice 16: architectural structure, VM dependencies, and cloud pricing.
  add(151, 'architecture', 'Sovereign regions', 'medium', 'A public agency must keep a workload in an Azure environment designed for particular national sovereignty requirements. What should it investigate?', [
    ['Azure sovereign regions', 'Sovereign regions address particular residency and compliance requirements; availability and eligibility must still be checked.'],
    ['An availability set', 'An availability set spreads VMs across fault and update domains; it is not a sovereignty boundary.'],
    ['A resource lock', 'A lock controls management operations such as deletion, not data sovereignty.'],
    ['A storage access tier', 'Access tiers affect access and cost characteristics of blobs, not sovereign deployment.']
  ], 0, 'Sovereign regions are intended for specific government or national requirements. A normal Azure region may have different service availability and compliance characteristics, so confirm the exact regional offering before deployment.');
  add(152, 'architecture', 'Azure datacenters', 'medium', 'Which statement best describes the relationship between an Azure region and a datacenter?', [
    ['A region is one virtual machine', 'A VM is a compute resource and does not define a geographic region.'],
    ['A region contains one or more datacenters in a geographic area', 'A region is a geographic grouping of datacenters; availability zones provide separate physical locations within eligible regions.'],
    ['A datacenter contains all Azure regions', 'The relationship is reversed: regions contain datacenters.'],
    ['A region is identical to a subscription', 'Subscriptions are billing and access boundaries, not physical locations.']
  ], 1, 'An Azure region is a set of datacenters deployed within a defined geographic area. Availability zones, where supported, are physically separate locations within a region.');
  add(153, 'architecture', 'Azure scope hierarchy', 'medium', 'Which sequence correctly orders Azure management scopes from broadest to narrowest?', [
    ['Resource group → subscription → management group → resource', 'A resource group is inside a subscription, not above it.'],
    ['Management group → subscription → resource group → resource', 'Management groups organize subscriptions; subscriptions contain resource groups; groups contain resources.'],
    ['Subscription → resource → management group → resource group', 'Resources are at the bottom of this hierarchy.'],
    ['Region → management group → subscription → resource', 'A region is a deployment location, not the parent governance scope.']
  ], 1, 'Management groups sit above subscriptions. A subscription contains resource groups, and a resource group contains resources. Governance can inherit down this hierarchy.');
  add(154, 'architecture', 'Azure scope hierarchy', 'hard', 'A policy is assigned to a management group. What is the likely effect on subscriptions beneath it?', [
    ['It can apply to resources in descendant subscriptions', 'Policy assignments at a parent scope can govern descendant scopes, subject to policy behavior and exemptions.'],
    ['It changes each subscription billing currency', 'Policy governs resource compliance; it does not set billing currency.'],
    ['It merges the subscriptions into one resource group', 'Management groups organize subscriptions without merging their resources.'],
    ['It applies only to the management-group object itself', 'Parent scope assignments can affect descendants.']
  ], 0, 'Azure governance scopes are hierarchical. A policy at a management group can affect descendant subscriptions and their resources, which is useful for organization-wide rules.');
  add(155, 'architecture', 'Virtual machine resources', 'medium', 'A team deploys an Azure VM that must connect to a VNet. Which resource gives that VM a network connection?', [
    ['Network interface', 'The VM network interface connects it to a subnet and can carry IP configurations.'],
    ['Resource lock', 'Locks protect management operations but do not provide connectivity.'],
    ['Management group', 'Management groups organize subscriptions for governance.'],
    ['Azure Policy initiative', 'An initiative groups policy definitions; it is not a network adapter.']
  ], 0, 'A VM uses a network interface to connect to an Azure virtual network subnet. IP configurations belong to that interface; reachability also depends on routes, security rules, and any public IP configuration.');
  add(156, 'architecture', 'Virtual machine resources', 'medium', 'A VM needs persistent storage for its operating system. Which Azure resource provides it?', [
    ['Managed OS disk', 'The OS disk holds the guest operating system and persists independently of temporary VM storage.'],
    ['Temporary disk only', 'Temporary disk contents can be lost during maintenance or redeployment.'],
    ['Availability zone', 'A zone is a physical placement choice, not the VM OS volume.'],
    ['Azure DNS zone', 'DNS resolves names and is unrelated to the VM OS disk.']
  ], 0, 'A VM requires an operating system disk, commonly an Azure managed disk. Temporary storage must not be treated as durable OS storage.');
  add(157, 'architecture', 'Virtual machine resources', 'hard', 'A private VM must accept inbound connections directly from the internet. Which additional resource may provide an internet-routable address?', [
    ['Public IP address', 'A public IP can expose an address, but network security rules and application configuration still determine access.'],
    ['Resource group', 'Resource groups organize and manage resources, not internet addressing.'],
    ['Managed OS disk', 'A disk provides storage, not a routable address.'],
    ['Management group', 'Management groups organize subscriptions for governance.']
  ], 0, 'A public IP resource can provide internet-routable addressing for an Azure VM or related network resource. It does not by itself permit traffic through NSGs or host firewalls.');
  add(158, 'architecture', 'Virtual machine resources', 'medium', 'What primarily determines an Azure VM\'s allocated vCPU and memory capacity?', [
    ['VM size', 'The selected size defines compute capacity and related limits.'],
    ['Resource-group name', 'A name does not allocate compute capacity.'],
    ['Subscription display name', 'Subscriptions affect administration and billing scope, not the size of a VM.'],
    ['Storage access tier', 'Blob access tiers do not size VM compute.']
  ], 0, 'The VM size defines the allocated compute resources, including vCPUs and memory. A different size may be needed when workload demands change.');
  add(159, 'cloud', 'Cloud pricing models', 'medium', 'A workload runs unpredictably and may stop after a few weeks. Which purchasing approach avoids a long usage commitment?', [
    ['Pay as you go', 'Consumption pricing provides flexibility without a reservation commitment; charges still depend on deployed resources.'],
    ['Three-year reservation', 'A reservation exchanges a commitment for potential discounts on eligible usage.'],
    ['Buying physical servers', 'Hardware purchase requires upfront capital and capacity planning.'],
    ['Assuming all idle resources are free', 'Provisioned capacity and storage can continue to incur charges.']
  ], 0, 'Pay-as-you-go pricing suits uncertain usage because it does not require a long-term reservation. The organization should still monitor provisioned resources and data charges.');
  add(160, 'cloud', 'Cloud pricing models', 'hard', 'A predictable eligible VM workload will run continuously for years. What is the key tradeoff of a reservation?', [
    ['Potential discount in exchange for a usage commitment', 'Reservations can lower eligible compute cost when utilization is sufficiently predictable.'],
    ['Unlimited free data transfer', 'Reservations do not make all network transfer free.'],
    ['Automatic security patching of guest OS', 'Pricing commitments do not transfer VM guest OS responsibility.'],
    ['Guaranteed service availability', 'A discount does not replace architecture or an SLA.']
  ], 0, 'Reservations can reduce cost for predictable eligible usage, but they involve a commitment. A team should compare expected utilization and terms with pay-as-you-go pricing.');

  // Practice 17: storage accounts, transfer tools, and migration.
  add(161, 'architecture', 'Storage account types', 'medium', 'A team needs a general-purpose Azure Storage account for blobs, files, queues, and tables. Which account kind is the usual starting point?', [
    ['Standard general-purpose v2', 'Standard GPv2 supports the common Azure Storage data services and broad redundancy options.'],
    ['Premium block blobs only', 'A specialized premium block blob account does not serve all four requested services.'],
    ['Azure SQL Database', 'SQL Database is a database service, not an Azure Storage account.'],
    ['Azure Key Vault', 'Key Vault stores secrets and keys, not general blob, file, queue, and table data.']
  ], 0, 'A standard general-purpose v2 account is the usual choice when the workload needs several Azure Storage services. Specialized account kinds are selected for specific performance or data requirements.');
  add(162, 'architecture', 'Storage account types', 'hard', 'A workload requires premium performance for Azure Files shares. Which account selection should be evaluated?', [
    ['Premium FileStorage', 'FileStorage is the premium account kind for Azure Files shares; check protocol and redundancy support for the design.'],
    ['Premium block blob account', 'That specialized account targets block blobs, not Azure Files shares.'],
    ['Azure Queue Storage in GPv2', 'Queues are messaging storage, not premium shared files.'],
    ['Archive blob tier', 'Archive is an offline blob access tier, not a premium file-share account.']
  ], 0, 'Premium Azure Files shares use a FileStorage account. Account type and performance tier must fit the storage service and workload requirements.');
  add(163, 'architecture', 'Storage options', 'medium', 'An application needs a shared SMB file path rather than object APIs. Which Azure Storage service is most suitable?', [
    ['Azure Files', 'Azure Files provides managed file shares accessible through SMB and supported NFS configurations.'],
    ['Blob Storage', 'Blobs are objects reached through object interfaces, not a standard shared SMB path.'],
    ['Queue Storage', 'Queues exchange messages between application components.'],
    ['Table Storage', 'Tables store schemaless key-value style entities.']
  ], 0, 'Azure Files provides managed file shares and supports SMB access. Blob, Queue, and Table Storage have different data models and interfaces.');
  add(164, 'architecture', 'AzCopy', 'medium', 'An administrator needs a command-line utility to copy many files to and from Azure Storage. Which tool fits?', [
    ['AzCopy', 'AzCopy is designed for command-line data transfers involving Azure Storage.'],
    ['Azure Policy', 'Policy evaluates and enforces resource rules; it is not a file-transfer utility.'],
    ['Azure Advisor', 'Advisor makes optimization recommendations.'],
    ['Microsoft Entra ID', 'Entra ID provides identity services; it does not perform bulk file copies.']
  ], 0, 'AzCopy is a command-line utility for copying data to and from Azure Storage. It is useful for scripted or large transfers.');
  add(165, 'architecture', 'Azure Storage Explorer', 'medium', 'A support analyst wants a graphical desktop tool to browse blobs and file shares in authorized storage accounts. What should they use?', [
    ['Azure Storage Explorer', 'Storage Explorer is a graphical client for inspecting and managing Azure Storage data.'],
    ['AzCopy', 'AzCopy is a command-line transfer utility, not primarily a graphical browser.'],
    ['Azure Migrate', 'Azure Migrate discovers and plans workload migration.'],
    ['Azure Service Health', 'Service Health reports Azure platform incidents and maintenance.']
  ], 0, 'Azure Storage Explorer offers a graphical way to browse and manage supported Azure Storage data. AzCopy is better suited to command-line transfers.');
  add(166, 'architecture', 'Azure File Sync', 'medium', 'A company wants its on-premises Windows file server to keep a local cache while synchronizing files with Azure Files. Which service fits?', [
    ['Azure File Sync', 'File Sync synchronizes Azure file shares with Windows Servers and supports cloud tiering.'],
    ['Azure Data Box', 'Data Box is for transferring large data volumes using a physical device.'],
    ['Azure DNS', 'DNS resolves names and does not synchronize file content.'],
    ['Azure Blob archive tier', 'Archive stores rarely accessed blobs offline; it does not sync Windows file shares.']
  ], 0, 'Azure File Sync keeps Windows file servers connected to an Azure file share and can cache frequently used data locally. It is distinct from a one-time migration device.');
  add(167, 'architecture', 'Azure Migrate', 'medium', 'Before moving several on-premises servers to Azure, a team wants discovery, assessment, and migration planning. Which service is intended for this?', [
    ['Azure Migrate', 'Azure Migrate provides a central place for discovery, assessment, and supported migration workflows.'],
    ['Azure Policy', 'Policy governs deployed resource compliance.'],
    ['Azure Advisor', 'Advisor recommends improvements to Azure resources; it is not the central on-premises migration hub.'],
    ['Azure File Sync', 'File Sync synchronizes Windows file servers with Azure Files.']
  ], 0, 'Azure Migrate supports discovery and assessment of on-premises workloads and coordinates supported migration paths. The assessment stage helps size and plan the move.');
  add(168, 'architecture', 'Azure Data Box', 'medium', 'A site must transfer hundreds of terabytes to Azure, but its network link cannot finish the upload in time. Which option addresses this constraint?', [
    ['Azure Data Box', 'Data Box is a physical appliance-based option for large offline data transfers to Azure.'],
    ['Azure Monitor alerts', 'Alerts report conditions but do not transport large datasets.'],
    ['Azure VPN Gateway', 'A VPN creates network connectivity but does not solve a severely limited transfer link by itself.'],
    ['Azure DNS', 'DNS resolves names and cannot ship data.']
  ], 0, 'Azure Data Box can transfer large datasets using a shipped physical device when network transfer is impractical. Security, supported capacity, and regional availability should be checked.');
  add(169, 'architecture', 'Storage migration choice', 'hard', 'A team has a strong network connection and needs an automated repeatable copy of blobs into Azure Storage. Which choice is most direct?', [
    ['AzCopy', 'AzCopy supports scripted transfers over the available network connection.'],
    ['Azure Data Box', 'A physical transfer device is generally for cases where network transfer is impractical.'],
    ['Azure File Sync', 'File Sync maintains a synchronized Windows file-server namespace, not a general blob copy job.'],
    ['Microsoft Purview', 'Purview supports data governance and classification, not bulk copying.']
  ], 0, 'AzCopy is a direct fit for repeatable network-based Azure Storage transfers. Data Box addresses different bandwidth or time constraints.');
  add(170, 'architecture', 'Storage account and tier', 'hard', 'A team chooses a cool blob access tier. Which statement about the storage account remains true?', [
    ['The account type and supported redundancy still need to be chosen separately', 'An access tier concerns access and cost patterns; the account kind and redundancy are additional decisions.'],
    ['Cool automatically makes the account zone redundant', 'Access tier does not select LRS, ZRS, or geo-redundancy.'],
    ['Cool converts blobs into Azure Files shares', 'The tier does not change the storage service or data model.'],
    ['Cool guarantees zero retrieval charges', 'Cool tiers can have retrieval and minimum-retention cost implications.']
  ], 0, 'Blob access tiers, storage account kinds, and redundancy options answer different design questions. Selecting cool does not automatically select a redundancy scheme or file service.');

  // Practice 18: identity, sign-in, and authorization.
  add(171, 'architecture', 'Microsoft Entra Domain Services', 'medium', 'A legacy application needs managed domain join and LDAP without the team operating domain controllers in Azure VMs. What should it evaluate?', [
    ['Microsoft Entra Domain Services', 'The managed domain provides traditional domain services such as domain join and LDAP without customer-managed domain controllers.'],
    ['Microsoft Entra ID alone', 'Entra ID is a cloud identity service but does not by itself provide all traditional domain protocols.'],
    ['Azure RBAC', 'RBAC grants access to Azure resources; it does not supply LDAP or domain join.'],
    ['Azure Policy', 'Policy governs resource compliance, not legacy domain protocols.']
  ], 0, 'Microsoft Entra Domain Services supplies managed traditional domain capabilities for compatible workloads. Microsoft Entra ID and Entra Domain Services serve related but different identity needs.');
  add(172, 'architecture', 'Microsoft Entra Domain Services', 'hard', 'Which responsibility is reduced when using Microsoft Entra Domain Services rather than deploying domain controllers on Azure VMs?', [
    ['Operating and patching the domain-controller VMs', 'Microsoft operates the managed domain controllers; customers still configure access and applications.'],
    ['Managing all application permissions', 'Customers still govern application access and authorization.'],
    ['Selecting an Azure subscription', 'A subscription is still needed for Azure resources.'],
    ['Protecting every user account', 'Managed domain infrastructure does not remove customer identity governance duties.']
  ], 0, 'The managed service removes the need to operate domain-controller VMs directly. It does not take over application authorization or user-account governance.');
  add(173, 'architecture', 'Single sign-on', 'medium', 'Employees sign in once through Microsoft Entra ID and then open several integrated applications without entering credentials again. Which capability is this?', [
    ['Single sign-on', 'SSO reuses a sign-in across integrated applications according to the configured identity flow.'],
    ['Azure Storage redundancy', 'Redundancy protects stored data from certain failures, not user sign-in flow.'],
    ['Resource locking', 'Locks protect resources from management operations.'],
    ['Virtual network peering', 'Peering connects virtual networks.']
  ], 0, 'Single sign-on lets a user authenticate once and access integrated applications without a separate sign-in for each. It depends on supported application and identity configuration.');
  add(174, 'architecture', 'Single sign-on and MFA', 'hard', 'A company enables single sign-on for several apps. Does that automatically mean every sign-in requires a second factor?', [
    ['Yes, SSO always enforces MFA', 'SSO and MFA solve different problems; MFA must be required by the relevant authentication policy.'],
    ['No, SSO reduces repeated sign-ins while MFA adds an authentication factor', 'SSO concerns sign-in reuse; MFA concerns proof of identity.'],
    ['Yes, but only when the apps are on VMs', 'The distinction does not depend on VM hosting.'],
    ['No, because MFA cannot work with SSO', 'SSO and MFA can be used together.']
  ], 1, 'SSO reduces repeated authentication prompts across integrated apps. MFA adds another proof of identity; it can be combined with SSO, but one does not automatically imply the other.');
  add(175, 'architecture', 'Authentication versus authorization', 'medium', 'A user successfully signs in but is denied permission to delete an Azure VM. Which control most directly explains the denial?', [
    ['Authorization such as Azure RBAC', 'Successful authentication proves identity; RBAC can still deny the requested management action.'],
    ['Authentication failure', 'The user already signed in successfully.'],
    ['Azure Storage tier', 'A storage access tier does not grant VM deletion rights.'],
    ['Availability zone', 'Zone placement does not define user permissions.']
  ], 0, 'Authentication establishes who the user is. Authorization determines what that identity may do; Azure RBAC can limit VM management actions.');
  add(176, 'architecture', 'Conditional Access', 'medium', 'A sign-in from an unfamiliar location must complete MFA before accessing an app. Which Microsoft Entra feature evaluates such conditions?', [
    ['Conditional Access', 'Conditional Access evaluates signals and applies configured access controls such as MFA.'],
    ['Azure Resource Manager', 'ARM is Azure resource management, not a sign-in policy engine.'],
    ['Azure Service Health', 'Service Health reports Azure service incidents.'],
    ['Azure File Sync', 'File Sync synchronizes file shares.']
  ], 0, 'Microsoft Entra Conditional Access can evaluate sign-in context and require controls such as MFA. The exact rule depends on policy configuration.');
  add(177, 'architecture', 'External identities', 'medium', 'A supplier needs access to one company application using their own organizational identity. Which capability is intended for collaboration with outside users?', [
    ['Microsoft Entra external identities', 'External identities support collaboration with users outside the tenant, subject to configured access.'],
    ['Azure Storage redundancy', 'Redundancy protects data copies, not guest identity access.'],
    ['Availability set', 'An availability set spreads VMs across fault and update domains.'],
    ['Azure DNS', 'DNS maps names to records; it does not manage guest identities.']
  ], 0, 'Microsoft Entra external identities can let outside users collaborate with the organization while access remains governed. It is separate from resource redundancy and networking.');
  add(178, 'architecture', 'Managed identities', 'hard', 'An Azure-hosted application needs to access an Azure resource without storing a long-lived password in code. Which identity approach should it consider?', [
    ['Managed identity', 'A managed identity gives supported Azure resources an Entra identity and can avoid embedded credentials.'],
    ['Hard-coded shared password', 'A stored password creates a secret-management risk.'],
    ['Public IP address', 'A public IP provides addressing, not identity.'],
    ['Availability zone', 'A zone provides fault-isolated placement, not an application identity.']
  ], 0, 'A managed identity lets a supported Azure resource authenticate to other services without embedding a long-lived credential in application code. It still needs appropriate authorization.');
  add(179, 'architecture', 'Microsoft Entra ID versus Domain Services', 'hard', 'A SaaS application needs modern cloud sign-in, not legacy LDAP or domain join. Which identity service is the direct fit?', [
    ['Microsoft Entra ID', 'Entra ID provides cloud identity and modern application sign-in.'],
    ['Microsoft Entra Domain Services solely for LDAP', 'Managed domain capabilities are unnecessary when only modern cloud sign-in is required.'],
    ['Azure Data Box', 'Data Box moves large amounts of data using physical devices.'],
    ['Azure File Sync', 'File Sync synchronizes file-server content.']
  ], 0, 'Microsoft Entra ID is the primary cloud identity service for modern application sign-in. Entra Domain Services addresses legacy domain protocol needs.');
  add(180, 'architecture', 'Azure RBAC scope', 'hard', 'A user should manage one resource group but not every resource in the subscription. At what scope should the role usually be assigned?', [
    ['That resource group', 'Assigning at the narrowest practical scope limits access to the intended group.'],
    ['The management group above all subscriptions', 'That scope would potentially grant much broader access.'],
    ['The whole subscription', 'Subscription scope includes more resources than requested.'],
    ['A sovereign region', 'Regions are deployment locations, not RBAC assignment scopes.']
  ], 0, 'Azure RBAC roles can be assigned at management-group, subscription, resource-group, or resource scope. Use the smallest scope that meets the access requirement.');

  // Practice 19: cost drivers and governance decisions.
  add(181, 'governance', 'Azure cost factors', 'medium', 'Two identical VM sizes are deployed in different Azure regions. What should the team expect when estimating cost?', [
    ['Price can differ by region', 'Regional pricing is one factor in an Azure estimate.'],
    ['Price must be identical worldwide', 'Azure prices can vary between regions.'],
    ['Only the resource-group name determines price', 'Names do not set unit prices.'],
    ['Azure Policy pays the bill', 'Policy governs resources; it does not eliminate charges.']
  ], 0, 'Azure pricing can vary by region, service, size, and purchasing terms. The Pricing Calculator can compare a planned configuration before deployment.');
  add(182, 'governance', 'Azure cost factors', 'medium', 'A company sends large volumes of data from Azure to internet users. Which cost factor should it examine?', [
    ['Outbound data transfer', 'Data leaving Azure can incur transfer charges depending on route and service.'],
    ['Only inbound data transfer', 'Inbound and outbound transfer may have different pricing; the scenario concerns egress.'],
    ['Resource-group color', 'Visual organization does not set network charges.'],
    ['Number of policy assignments only', 'Policies do not measure the internet traffic described.']
  ], 0, 'Data transfer out of Azure can affect cost. Estimate the amount, destination, and service-specific pricing rather than counting only VM or storage charges.');
  add(183, 'governance', 'Azure cost factors', 'medium', 'An unused VM is stopped inside its guest operating system but remains allocated in Azure. Which charge may continue?', [
    ['Compute allocation and attached storage', 'A stopped but allocated VM may keep compute charges, while disks also remain billable.'],
    ['No charge of any kind', 'Stopping inside the guest is not the same as deallocating every billable resource.'],
    ['Only a one-time exam fee', 'AZ-900 exam fees have no relationship to VM resource billing.'],
    ['Only Microsoft Entra sign-in charges', 'The described resources include compute and storage.']
  ], 0, 'A VM stopped from inside the guest may remain allocated and continue accruing compute charges. Deallocation stops VM compute billing, but attached storage and other resources can still cost money.');
  add(184, 'governance', 'Azure cost factors', 'hard', 'A team increases a VM from a small size to a larger size. Which expectation is safest for its cost estimate?', [
    ['The compute price may change with the selected size', 'VM size is a major compute cost driver.'],
    ['Cost must decrease because the VM is faster', 'Higher capacity often costs more; speed does not guarantee savings.'],
    ['The subscription automatically becomes free', 'VM resizing does not remove subscription charges.'],
    ['The network egress price becomes zero', 'Compute size does not make egress universally free.']
  ], 0, 'A different VM size can change the compute price and resource limits. The team should estimate the specific size, region, operating system, and expected run time.');
  add(185, 'governance', 'Azure cost factors', 'hard', 'A company moves licensed software to Azure VMs. Which item should be checked before estimating the full cost?', [
    ['Applicable software licensing and benefit eligibility', 'Licensing terms and eligible benefits can materially affect total cost.'],
    ['Only the VM name', 'The VM name does not establish license costs.'],
    ['Only the availability-zone number', 'Placement alone does not determine licensing rights.'],
    ['The color of the Azure portal theme', 'UI theme has no billing effect.']
  ], 0, 'VM compute is only part of a workload estimate. Software licensing, eligible benefits, support, storage, and networking can also affect total cost.');
  add(186, 'governance', 'Pricing Calculator', 'medium', 'A team has not deployed a new workload. Which tool can estimate monthly Azure charges from a planned configuration?', [
    ['Azure Pricing Calculator', 'The calculator estimates expected charges based on chosen services and quantities.'],
    ['Azure Cost Management cost analysis only', 'Cost analysis primarily examines actual or forecast spending from existing usage.'],
    ['Azure Service Health', 'Service Health reports incidents and maintenance.'],
    ['Azure Policy', 'Policy controls compliance, not a predeployment price estimate.']
  ], 0, 'The Azure Pricing Calculator helps estimate a planned workload before deployment. Real bills can differ because actual consumption and configuration differ from estimates.');
  add(187, 'governance', 'Cost Management', 'medium', 'A department wants to find which deployed Azure service caused last month\'s bill increase. Which capability is most relevant?', [
    ['Cost analysis in Azure Cost Management', 'Cost analysis breaks down actual spending by dimensions such as service and time.'],
    ['Azure DNS', 'DNS provides name resolution, not spending analysis.'],
    ['Azure Data Box', 'Data Box transfers large datasets physically.'],
    ['Azure Virtual Desktop', 'Virtual Desktop hosts desktop experiences, not cost analysis.']
  ], 0, 'Azure Cost Management can analyze actual spending and reveal changes by service, resource, or other supported dimensions. This complements estimates made before deployment.');
  add(188, 'governance', 'Azure budget', 'medium', 'A finance team creates a budget alert at 80% of planned monthly spend. What should it expect when the threshold is reached?', [
    ['A notification or configured action, not an automatic universal hard cap', 'Budgets monitor spending and can trigger alerts; stopping resources needs a separate configured response.'],
    ['Every Azure resource is automatically deleted', 'A budget does not universally delete resources.'],
    ['All further charges are guaranteed to be zero', 'Charges can continue after an alert.'],
    ['The subscription moves to another region', 'Budgets do not relocate resources.']
  ], 0, 'A budget tracks spending against a threshold and can send alerts. It does not guarantee that charges stop when the threshold is reached.');
  add(189, 'governance', 'Tags and cost allocation', 'medium', 'Finance needs to group costs by department across multiple resource groups. Which resource metadata is most useful?', [
    ['Consistently applied tags', 'Tags can label resources for supported cost views and allocation.'],
    ['Public IP addresses', 'Addresses provide connectivity, not department labels.'],
    ['Availability sets', 'Availability sets affect VM fault and update placement.'],
    ['Storage redundancy options', 'Redundancy protects data copies, not department classification.']
  ], 0, 'Consistent tags such as Department=Finance can support cost grouping across resource groups. Teams should ensure resources are tagged consistently and understand any service-specific tagging limits.');
  add(190, 'governance', 'Governance scope', 'hard', 'An organization needs one allowed-region rule across many subscriptions. Where can Azure Policy be assigned to govern them together?', [
    ['A shared parent management group', 'A management-group assignment can apply to descendant subscriptions.'],
    ['One unrelated VM disk only', 'A disk-level assignment would not govern all subscriptions.'],
    ['An Azure DNS record', 'DNS records are unrelated to policy assignment scope.'],
    ['A single storage blob access tier', 'A blob tier does not govern deployments across subscriptions.']
  ], 0, 'Assigning Azure Policy at a management group can govern descendant subscriptions consistently. The hierarchy is useful for organization-wide rules and compliance reporting.');

  // Practice 20: fresh scenarios combining the topics most likely to be confused.
  add(191, 'architecture', 'Migration and transfer tools', 'hard', 'A branch office has 400 TB to migrate, limited bandwidth, and a strict deadline. After the initial copy, its Windows file server must keep frequently used files locally while syncing with Azure. Which pair fits the two phases?', [
    ['Azure Data Box, then Azure File Sync', 'Data Box addresses bulk offline transfer; File Sync maintains the Windows file-server and Azure Files relationship.'],
    ['Azure Policy, then Azure DNS', 'Neither service performs the described bulk transfer or file synchronization.'],
    ['Azure Advisor, then Azure RBAC', 'Recommendations and access control do not move or synchronize the files.'],
    ['Azure Monitor, then Azure Service Health', 'Monitoring tools observe conditions and incidents; they do not implement this data path.']
  ], 0, 'Azure Data Box can seed large datasets when network transfer is impractical. Azure File Sync can subsequently synchronize a Windows Server with Azure Files and cache active files locally.');
  add(192, 'architecture', 'Identity and governance', 'hard', 'An external consultant can sign in to the tenant but must only view one resource group. Which combination best fits?', [
    ['External identity plus a read-only Azure RBAC role at that resource group', 'The identity enables collaboration; the narrowly scoped role controls what the consultant can do.'],
    ['A public IP and no role assignment', 'A public IP does not authorize Azure resource management.'],
    ['A management-group Owner role', 'Owner at a broad parent scope grants far more access than requested.'],
    ['Azure File Sync and a storage tier', 'These deal with file data and costs, not guest authorization.']
  ], 0, 'The consultant needs an external identity to sign in and an appropriate Azure RBAC role to view the intended resource group. Assigning at that group limits the scope of access.');
  add(193, 'architecture', 'Storage service and redundancy', 'hard', 'An app stores unstructured images and must survive an availability-zone failure within its primary region. Which combination addresses both needs?', [
    ['Blob Storage with ZRS, where supported', 'Blobs fit unstructured objects; ZRS replicates across zones in a supported primary region.'],
    ['Queue Storage with LRS', 'Queues are for messages, and LRS does not provide cross-zone protection.'],
    ['Azure Files with archive tier', 'Archive is a blob tier, not an Azure Files redundancy choice.'],
    ['Table Storage with a resource lock only', 'A lock prevents certain management operations but does not create zone replicas.']
  ], 0, 'Blob Storage fits unstructured images. ZRS provides synchronous copies across availability zones in a supported region, addressing a zone failure within that region.');
  add(194, 'architecture', 'Sovereign regions and availability', 'hard', 'A regulated workload requires a particular sovereign Azure environment and resilience to a single facility failure. What must the architect verify?', [
    ['The sovereign offering and availability-zone support for the required services', 'Sovereignty requirements and zone availability are separate checks and vary by offering.'],
    ['Only that the VM has a friendly name', 'Naming has no bearing on compliance or physical resilience.'],
    ['Only that Azure is a public cloud', 'The specific sovereign offering and service availability matter.'],
    ['Only that a resource lock exists', 'A lock does not establish sovereignty or zone resilience.']
  ], 0, 'Sovereign environment eligibility and service availability must be confirmed. Availability-zone support is a separate regional and service capability, so both requirements need verification.');
  add(195, 'governance', 'Cost estimation', 'hard', 'A planned web service includes VMs, managed disks, and substantial traffic to internet users. Which estimate is most complete?', [
    ['Compute, disks, expected outbound transfer, region, and licensing', 'These are distinct cost drivers that can materially change the monthly estimate.'],
    ['Only the number of VMs', 'This omits storage, networking, regional, and licensing costs.'],
    ['Only the resource-group count', 'Groups organize resources but do not capture the workload charges.'],
    ['Only the monthly budget threshold', 'A budget monitors spend and does not calculate all service charges.']
  ], 0, 'A useful estimate includes compute size and hours, disks, outbound data transfer, region, and applicable licensing. Actual use should later be checked in Cost Management.');
  add(196, 'architecture', 'Virtual machine connectivity', 'hard', 'A VM has a public IP but users still cannot connect to its web server. What is the best first conclusion?', [
    ['The IP alone does not guarantee allowed traffic or a running listener', 'NSG rules, host firewall, routes, and the application listener must also permit the connection.'],
    ['A public IP automatically opens all ports', 'Public addressing does not bypass network and host security rules.'],
    ['The VM needs a management group before it can receive packets', 'Management groups are governance scopes, not packet-routing prerequisites.'],
    ['Azure Data Box must deliver the packets', 'Data Box is a bulk migration device, not live network connectivity.']
  ], 0, 'A public IP provides addressing, but it does not open ports automatically. Network security rules, host firewall, routing, and the application itself determine whether traffic succeeds.');
  add(197, 'architecture', 'Identity services', 'hard', 'A legacy VM application requires LDAP, while a new SaaS app needs cloud SSO. Which services map most directly to those requirements?', [
    ['Entra Domain Services for LDAP; Entra ID for cloud SSO', 'Managed domain capabilities fit LDAP; Entra ID supports modern cloud sign-in and SSO.'],
    ['Entra ID for LDAP only; Azure DNS for SSO', 'Azure DNS does not provide SSO, and Entra ID alone is not a traditional LDAP domain.'],
    ['Azure RBAC for LDAP; Azure Policy for SSO', 'These govern Azure authorization and resource compliance, not the two sign-in protocols.'],
    ['Azure Data Box for LDAP; File Sync for SSO', 'Those services move or synchronize data, not authenticate users.']
  ], 0, 'Microsoft Entra Domain Services addresses legacy domain protocols such as LDAP. Microsoft Entra ID is the cloud identity service for modern SaaS sign-in and SSO.');
  add(198, 'governance', 'Pricing and cost analysis', 'medium', 'Which pairing correctly assigns a tool before deployment and another after charges have accumulated?', [
    ['Pricing Calculator before; Cost Management after', 'The calculator estimates planned usage, while Cost Management analyzes actual spending.'],
    ['Service Health before; Azure DNS after', 'Neither is the primary tool for these cost tasks.'],
    ['Data Box before; File Sync after', 'Both relate to data movement, not cost estimation and analysis.'],
    ['Azure Policy before; availability sets after', 'These tools address governance and VM placement.']
  ], 0, 'The Pricing Calculator estimates planned Azure usage before deployment. Azure Cost Management analyzes actual charges and trends after resources are running.');
  add(199, 'architecture', 'Storage transfer choice', 'medium', 'A team must copy blobs through a script today and let analysts inspect the resulting containers graphically tomorrow. Which tools fit?', [
    ['AzCopy and Azure Storage Explorer', 'AzCopy handles scripted transfers; Storage Explorer provides a graphical data browser.'],
    ['Azure Migrate and Azure Data Box only', 'These target broader workload migration or offline bulk transfer, not this simple script-and-browse sequence.'],
    ['Azure Policy and Azure RBAC only', 'They govern resource rules and access, but do not provide the requested copy and browse workflow.'],
    ['Azure Service Health and Azure Monitor only', 'They report platform and workload conditions rather than transfer and browse blobs.']
  ], 0, 'AzCopy is suited to command-line copy operations. Azure Storage Explorer lets an authorized analyst browse the resulting storage data through a graphical client.');
  add(200, 'cloud', 'Readiness scenario', 'hard', 'A company moves a custom web app from an on-premises VM to Azure App Service. Which responsibility shift is most accurate?', [
    ['Microsoft manages the platform OS and runtime; the company still manages its code, data, and access', 'App Service is a managed application platform, but customer workload duties remain.'],
    ['The company must patch the physical Azure datacenter', 'Microsoft operates the physical infrastructure.'],
    ['Microsoft automatically fixes every application security defect', 'The customer remains responsible for its application and configuration.'],
    ['The move turns the app into finished SaaS', 'The company still deploys its own application code, so this is PaaS.']
  ], 0, 'Azure App Service reduces platform maintenance because Microsoft manages the underlying OS and runtime. The customer still manages application code, configuration, data, identity, and access.');
})();
