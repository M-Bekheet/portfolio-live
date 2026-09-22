// ==========================================
// DATA: Version 2 - Sophisticated Engineer
// ==========================================
const roadmapDataV2 = {
  learningObjectives: [
    {
      id: "sophisticated-engineer",
      title: "Sophisticated Engineer Track (C++ & DSA)",
      icon: "🧠",
      description:
        "A 6-month journey to master Data Structures, Algorithms, and System Design using C++. Focus on memory, efficiency, and patterns.",
      estimatedTime: 240,
      topics: [
        {
          id: "phase-1-foundations",
          title: "Phase 1: The Foundation (Weeks 1-4) – C++ Memory Mastery",
          description: "Move beyond syntax. Understand how the machine actually works.",
          engineeringLogic:
            "You cannot optimize high-performance systems if you don't understand the cost of a pointer dereference or a memory allocation. We use C++ here to force manual memory management, creating an intuition that transfers to every other language.",
          successMetric:
            "Able to implement a recursive solution without blowing the stack and explain int* vs int&.",
          keyTopics: [
            "Pointers vs. References (Stack vs. Heap)",
            "Memory Management (New/Delete)",
            "Recursive Functions (Prerequisite for Trees)",
            "STL: Vectors, Strings, Maps (Usage)",
          ],
          priority: "high",
          estimatedTime: 40,
          plannedSessions: 20,
          resources: [
            {
              name: "Mastering 4 critical SKILLS using C++ 17",
              url: "https://www.udemy.com/course/cpp-4skills/",
              hours: 40,
            },
          ],
          notes: "Skip the final 'Library Project.' Focus on the raw language mechanics.",
        },
        {
          id: "phase-2-linear",
          title: "Phase 2: Building the Tools (Linear) (Weeks 5-9)",
          description: "Stop using arrays; start building them.",
          engineeringLogic:
            "We build these from scratch to understand the 'hidden costs.' Why is unshift() in JS slow? Because in a Vector, it forces a O(n) shift of all elements. Building it proves it.",
          successMetric: "You have a custom MyVector class that resizes itself automatically.",
          keyTopics: [
            "Time Complexity Analysis: Big O notation",
            "Dynamic Arrays: Implementing a Vector class from scratch (Capacity vs Size)",
            "Linked Lists: Single & Doubly Linked Lists",
            "Stacks & Queues: Building them using your own Linked List",
          ],
          priority: "high",
          estimatedTime: 50,
          plannedSessions: 25,
          resources: [
            {
              name: "Mastering critical SKILLS in Data Structures using C++",
              url: "https://www.udemy.com/course/dscpp-skills/",
              hours: 50,
            },
          ],
        },
        {
          id: "phase-3-nonlinear",
          title: "Phase 3: The Architect's Mind (Non-Linear) (Weeks 10-14)",
          description: "Handling hierarchical data and fast lookups.",
          engineeringLogic:
            "The Hash Map is the most used data structure in the world. By building one, you understand 'Collisions' and 'Load Factors,' which is essential for understanding Database Indexing later.",
          successMetric: "A working MyHashMap class.",
          keyTopics: [
            "Hash Tables: Implementing a Hash Map with Chaining (Handling collisions)",
            "Binary Trees: Traversals (In-order, Pre-order)",
            "Binary Search Trees (BST): O(log n) lookup logic",
          ],
          priority: "high",
          estimatedTime: 50,
          plannedSessions: 25,
          resources: [
            {
              name: "Mastering critical SKILLS in Data Structures using C++ (Continued)",
              url: "https://www.udemy.com/course/dscpp-skills/",
              hours: 50,
            },
          ],
        },
        {
          id: "phase-4-algorithms",
          title: "Phase 4: Core Algorithms (Weeks 15-18)",
          description: "Sorting and Searching with mathematical precision.",
          engineeringLogic:
            "Sorting isn't just Array.sort(). It's about memory locality and worst-case scenarios. Merge Sort is stable; Quick Sort is fast. Knowing when to use which is the Senior Engineer trait.",
          successMetric: "Can write Merge Sort on a whiteboard without syntax errors.",
          keyTopics: [
            "Sorting: Merge Sort (Divide & Conquer) & Quick Sort",
            "Binary Search: Mastering the logic (Standard & Lower/Upper bound)",
            "Recursion (Advanced): Tracing complex recursion trees",
          ],
          priority: "high",
          estimatedTime: 40,
          plannedSessions: 20,
          resources: [
            {
              name: "Algorithms Part 1",
              url: "https://www.udemy.com/course/skills-algorithms-cpp/",
              hours: 40,
            },
          ],
        },
        {
          id: "phase-5-graphs-dp",
          title: "Phase 5: Advanced Graphs & DP (Weeks 19-22)",
          description: "Modeling complex relationships and optimization problems.",
          engineeringLogic:
            "Real-world problems (Social Networks, Google Maps, Package Dependencies) are Graphs. You cannot solve them with Arrays. DP teaches you to trade Space (Memory) for Time (Speed).",
          successMetric: "Solving 'Number of Islands' and 'Climbing Stairs' (Memoized).",
          keyTopics: [
            "Graph Traversal: BFS (Breadth-First) & DFS (Depth-First)",
            "Topological Sort: Dependency resolution",
            "Dynamic Programming: Memoization (Caching results)",
          ],
          priority: "high",
          estimatedTime: 40,
          plannedSessions: 20,
          resources: [
            {
              name: "Algorithms Part 2",
              url: "https://www.udemy.com/course/skills-algorithms-cpp2/",
              hours: 40,
            },
          ],
        },
        {
          id: "phase-6-interview",
          title: "Phase 6: The Interview Bridge (Weeks 23-24)",
          description: "Translating academic theory into interview performance.",
          engineeringLogic:
            "Academic courses teach 'First Principles.' Interviews test 'Pattern Matching.' This phase bridges that gap.",
          successMetric: "Confidence with Medium-level LeetCode/NeetCode problems.",
          keyTopics: [
            "Sliding Window: Optimization for subarrays",
            "Two Pointers: Space optimization",
            "Review: NeetCode 150 (Mediums)",
          ],
          priority: "high",
          estimatedTime: 20,
          plannedSessions: 10,
          resources: [
            {
              name: "NeetCode 150 Practice",
              url: "https://neetcode.io/practice",
              hours: 20,
            },
          ],
        },
        {
          id: "parallel-system-design",
          title: "Parallel Track: System Design (Weekends Only)",
          description: "Preparing for the L5/L6 Senior Round.",
          engineeringLogic:
            "While your left brain learns Algorithms, your right brain absorbs Architecture (Load Balancers, Caching, Sharding) to prevent being 'down-leveled' during interviews.",
          successMetric: "Understand standard distributed system patterns.",
          keyTopics: ["Read 1 Chapter every weekend. No coding."],
          priority: "medium",
          estimatedTime: 24,
          plannedSessions: 24,
          resources: [
            {
              name: "System Design Interview – An Insider's Guide (Alex Xu)",
              url: "https://bytebytego.com/",
              hours: 24,
            },
          ],
        },
      ],
    },
  ],
  projects: [],
  curatedResources: [],
  advancedTopics: [],
};

// ==========================================
// DATA: Version 3 - DSA Mastery (4-Month)
// ==========================================
const roadmapDataV3 = {
  learningObjectives: [
    {
      id: "dsa-mastery-4month",
      title: "DSA Mastery Track (4-Month)",
      icon: "🎯",
      description:
        "From Frontend Developer to Sophisticated Software Engineer. Master Data Structures & Algorithms with C++ in 4 months. Focus: 40% learning, 60% practicing. Target: 150-200 problems solved.",
      estimatedTime: 200,
      topics: [
        {
          id: "phase-0-cpp-refresher",
          title: "Phase 0: C++ Refresher (Week 1-2)",
          description:
            "Get comfortable with C++ syntax and STL before diving into DSA. You have prior C++ experience from Programming I, so this is a refresher, not a beginner course.",
          engineeringLogic:
            "JavaScript hides too much (no pointers, automatic memory, no native data structures like linked lists). C++ teaches you CS fundamentals while being practical. You can always use JavaScript for web dev work.",
          successMetric:
            "Can read/write C++ code, use vector, map, set, stack, queue, priority_queue comfortably. Solved 10-15 basic problems.",
          keyTopics: [
            "Variables, data types, operators",
            "Control flow (if/else, loops, switch)",
            "Functions, pointers, references",
            "Dynamic memory (new, delete)",
            "STL: vector, string, map, unordered_map, set, stack, queue, priority_queue, pair",
          ],
          priority: "high",
          pacing: "accelerate",
          estimatedTime: 12,
          plannedSessions: 8,
          resources: [
            {
              name: "C++ Tutorial for Beginners - Full Course (freeCodeCamp)",
              url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
              hours: 4,
            },
            {
              name: "LearnCpp.com (Sections 1-13)",
              url: "https://www.learncpp.com/",
              hours: 6,
            },
            {
              name: "HackerRank C++ Track",
              url: "https://www.hackerrank.com/domains/cpp",
              hours: 3,
            },
          ],
          notes:
            "Watch at 1.5x speed, skip what you remember. Focus on pointers, references, and STL containers.",
        },
        {
          id: "month-1-foundations",
          title: "Month 1: Foundations (Weeks 3-6)",
          description:
            "Build the foundation: Big O notation, Arrays, Strings, and Recursion. These are the building blocks for everything else.",
          engineeringLogic:
            "Understanding time/space complexity is the lens through which you evaluate every solution. Arrays and strings are everywhere. Recursion is the prerequisite for trees and graphs.",
          successMetric:
            "Solve most Easy array/string problems in 15-20 minutes. Can explain Big O for common operations. Understand when to use recursion.",
          keyTopics: [
            "Big O Notation: Time & Space complexity, Best/Average/Worst case",
            "Arrays: Static vs dynamic, Two-pointer technique, Sliding window pattern",
            "Strings: Manipulation, Pattern matching basics",
            "Recursion: Base case, recursive case, call stack understanding",
          ],
          priority: "high",
          pacing: "needstime",
          estimatedTime: 45,
          plannedSessions: 20,
          resources: [
            {
              name: "Abdul Bari: Introduction & Recursion (Sections 1-5)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 15,
            },
            {
              name: "Abdul Bari: Arrays (Section 6)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 5,
            },
            {
              name: "NeetCode: Arrays & Hashing (Easy)",
              url: "https://neetcode.io/roadmap",
              hours: 8,
            },
            {
              name: "NeetCode: Two Pointers (Easy)",
              url: "https://neetcode.io/roadmap",
              hours: 6,
            },
            {
              name: "NeetCode: Sliding Window (Easy)",
              url: "https://neetcode.io/roadmap",
              hours: 5,
            },
          ],
          notes:
            "Target: 20-25 problems this month. Watch Abdul Bari at 1.25-1.5x speed. Skip advanced proofs.",
        },
        {
          id: "month-2-linear",
          title: "Month 2: Linear Data Structures (Weeks 7-10)",
          description:
            "Master the fundamental linear data structures: Linked Lists, Stacks, Queues, and Hash Tables. Implement each from scratch at least once.",
          engineeringLogic:
            "We build these from scratch to understand the 'hidden costs.' Why is unshift() in JS slow? Because in an array, it forces O(n) shift of all elements. Building these structures proves the theory.",
          successMetric:
            "Implemented linked list from scratch. Understand when to use each structure. Recognize stack/queue patterns. Master hash table usage. 50-70 total problems solved.",
          keyTopics: [
            "Linked Lists: Singly & Doubly, Fast/Slow pointer, Reversal",
            "Stacks: LIFO, Parentheses matching, Expression evaluation",
            "Queues: FIFO, Circular queue, Deque",
            "Hashing: Hash functions, Collision handling, unordered_map vs map",
          ],
          priority: "high",
          estimatedTime: 45,
          plannedSessions: 20,
          resources: [
            {
              name: "Abdul Bari: Linked Lists (Section 11)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 8,
            },
            {
              name: "Abdul Bari: Stacks (Section 13)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 4,
            },
            {
              name: "Abdul Bari: Queues (Section 14)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 4,
            },
            {
              name: "Abdul Bari: Hashing (Section 12)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 5,
            },
            {
              name: "NeetCode: Linked List (Easy → Medium)",
              url: "https://neetcode.io/roadmap",
              hours: 10,
            },
            {
              name: "NeetCode: Stack (Easy → Medium)",
              url: "https://neetcode.io/roadmap",
              hours: 8,
            },
          ],
          notes:
            "Target: 25-30 problems this month. Implement each data structure from scratch before using STL.",
        },
        {
          id: "month-3-trees-graphs",
          title: "Month 3: Trees & Graphs (Weeks 11-14)",
          description:
            "Handle hierarchical data and graph traversals. This is where many developers struggle, but mastering these opens doors to solving complex problems.",
          engineeringLogic:
            "Trees model hierarchical relationships (DOM, file systems, org charts). Graphs model networks (social, maps, dependencies). BFS/DFS are the foundation for countless algorithms.",
          successMetric:
            "Implemented BST from scratch. Can traverse trees in all 4 ways. Understand heap operations. Comfortable with BFS and DFS. 100-120 total problems solved.",
          keyTopics: [
            "Binary Trees: Terminology, Traversals (inorder, preorder, postorder, level-order)",
            "Binary Search Trees: BST property, Insert/Delete/Search operations",
            "Heaps: Min/Max heap, Insert/Extract/Heapify, priority_queue usage",
            "Graphs: Adjacency matrix/list, BFS, DFS, Directed vs Undirected",
          ],
          priority: "high",
          pacing: "needstime",
          estimatedTime: 50,
          plannedSessions: 22,
          resources: [
            {
              name: "Abdul Bari: Trees (Section 15)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 12,
            },
            {
              name: "Abdul Bari: Heaps (Section 17)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 5,
            },
            {
              name: "Abdul Bari: Graphs (Section 16)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 8,
            },
            {
              name: "NeetCode: Trees (Easy → Medium)",
              url: "https://neetcode.io/roadmap",
              hours: 12,
            },
            {
              name: "NeetCode: Heap / Priority Queue",
              url: "https://neetcode.io/roadmap",
              hours: 5,
            },
            {
              name: "NeetCode: Graphs (BFS/DFS)",
              url: "https://neetcode.io/roadmap",
              hours: 8,
            },
          ],
          notes:
            "Target: 25-30 problems. Skip AVL Trees for now (can return later). Focus on traversals and BFS/DFS patterns.",
        },
        {
          id: "month-4-algorithms",
          title: "Month 4: Algorithms (Weeks 15-18)",
          description:
            "Master the classic algorithms: Sorting, Divide & Conquer, Dynamic Programming, Greedy, and Backtracking. DP is the hardest topic - be patient!",
          engineeringLogic:
            "Sorting isn't just Array.sort(). It's about memory locality and worst-case scenarios. DP teaches you to trade space for time. Greedy vs DP decision-making is a Senior Engineer trait.",
          successMetric:
            "Understand major sorting algorithms. Can solve basic 1D DP problems. Recognize greedy vs DP situations. Comfortable with backtracking pattern. 150-180 total problems solved.",
          keyTopics: [
            "Sorting: Merge Sort, Quick Sort, Heap Sort, when to use which",
            "Divide & Conquer: Problem-solving pattern, Recurrence relations",
            "Dynamic Programming: Overlapping subproblems, Memoization vs Tabulation, 1D then 2D",
            "Greedy: Greedy choice property, When it works vs doesn't",
            "Backtracking: Recursive exploration, Pruning, Permutations/Combinations/Subsets",
          ],
          priority: "high",
          pacing: "needstime",
          estimatedTime: 55,
          plannedSessions: 24,
          resources: [
            {
              name: "Abdul Bari: Sorting (Sections 7-8)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 8,
            },
            {
              name: "Abdul Bari: Divide & Conquer (Section 9)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 5,
            },
            {
              name: "Abdul Bari: Dynamic Programming (Section 19)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 12,
            },
            {
              name: "Abdul Bari: Greedy (Section 18)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 5,
            },
            {
              name: "Abdul Bari: Backtracking (Section 20)",
              url: "https://www.udemy.com/course/datastructurescncpp/",
              hours: 5,
            },
            {
              name: "NeetCode: 1-D Dynamic Programming",
              url: "https://neetcode.io/roadmap",
              hours: 10,
            },
            {
              name: "NeetCode: Greedy",
              url: "https://neetcode.io/roadmap",
              hours: 5,
            },
            {
              name: "NeetCode: Backtracking",
              url: "https://neetcode.io/roadmap",
              hours: 5,
            },
          ],
          notes:
            "Target: 30-35 problems. Spend extra time on DP - it's the hardest but most valuable topic. Start with 1D DP before 2D.",
        },
        {
          id: "parallel-system-design",
          title: "Parallel Track: System Design (Weekends Only)",
          description:
            "Preparing for the L5/L6 Senior Round. Read 1 chapter every weekend - no coding required.",
          engineeringLogic:
            "While your left brain learns Algorithms, your right brain absorbs Architecture (Load Balancers, Caching, Sharding) to prevent being 'down-leveled' during interviews.",
          successMetric:
            "Understand standard distributed system patterns. Can discuss trade-offs in system design interviews.",
          keyTopics: [
            "Read 1 Chapter every weekend - No coding",
            "Load Balancing, Caching, CDNs",
            "Database Scaling, Sharding, Replication",
            "Message Queues, Microservices patterns",
          ],
          priority: "medium",
          estimatedTime: 24,
          plannedSessions: 16,
          resources: [
            {
              name: "System Design Interview – An Insider's Guide (Alex Xu)",
              url: "https://bytebytego.com/",
              hours: 24,
            },
          ],
          notes:
            "This runs in parallel with the main DSA track. Weekend reading only - don't let it distract from weekday problem solving.",
        },
      ],
    },
  ],
  projects: [],
  curatedResources: [],
  advancedTopics: [],
};

// ==========================================
// DATA: Version 1 - Backend Roadmap (Legacy)
// ==========================================
const roadmapDataV1 = {
  learningObjectives: [
    {
      id: "core-12-week",
      title: "Core 12‑Week Track",
      icon: "🗺️",
      description:
        "Practical, artifact‑gated plan aligned with EU remote roles. Ship two production‑grade backends by Weeks 8–10. Readiness is defined by Competency Gates (Testing, API Docs, Security, Reliability, Ops, Design).",
      estimatedTime: 120,
      topics: [
        {
          id: "w0-foundations",
          title: "Foundations & Prerequisites (Mark as Complete)",
          description:
            "<div><strong>What</strong>: Baseline familiarity with Node, Express, and SQL to ensure Week 1 speed. Mark items done when you finish.<br/><strong>Note</strong>: <em>Currently studying</em> — complete advanced SQL modules (EXPLAIN ANALYZE, indexing, transactions) by Week 1.</div>",
          priority: "high",
          isPrerequisites: true,
          pacing: "needstime",
          estimatedTime: 6,
          plannedSessions: 4,
          resources: [
            {
              name: "Node.js Crash Course (Traversy Media)",
              url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
              hours: 1.5,
            },
            {
              name: "Express.js Crash Course (Traversy Media)",
              url: "https://www.youtube.com/watch?v=L72fhGm1tfE",
              hours: 1.0,
            },
            {
              name: "The Complete SQL Bootcamp (Udemy, PostgreSQL)",
              url: "https://www.udemy.com/course/the-complete-sql-bootcamp",
              hours: 9.0,
            },
          ],
        },
        {
          id: "w1-express-prisma-docker",
          title: "Week 1: Advanced PostgreSQL + Node.js Event Loop + SQL Mastery",
          description:
            "<div><strong>Learning objectives</strong>: Event loop phases, indexing strategies (B‑tree, GIN, GiST, Hash, BRIN), window functions, CTEs, EXPLAIN ANALYZE workflow.<br/><strong>Deliverables</strong>: CRUD with pagination, migrations + seed, standardized error shape (RFC7807), structured logs, <em>Indexing strategy document</em>.<br/><strong>Hours</strong>: 12–14 theory + 10–12 hands‑on. <strong>Pacing</strong>: Foundational — take 20–24 hrs.</div>",
          priority: "high",
          pacing: "needstime",
          estimatedTime: 22,
          plannedSessions: 8,
          resources: [
            {
              name: "Node.js Event Loop Explained",
              url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
              hours: 0.17,
            },
            {
              name: "Node.js Official: Event Loop",
              url: "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/",
              hours: 0.5,
            },
            {
              name: "PostgreSQL Indexing Deep Dive",
              url: "https://www.meerako.com/blogs/postgresql-indexing-strategies-btree-gin-gist-guide",
              hours: 2.0,
            },
            {
              name: "SQL Window Functions",
              url: "https://mode.com/sql-tutorial/sql-window-functions/",
              hours: 1.0,
            },
            {
              name: "PostgreSQL Performance Tips",
              url: "https://www.postgresql.org/docs/current/performance-tips.html",
              hours: 1.0,
            },
          ],
          optionalResources: [
            {
              name: "Node.js Streams Handbook (Week 7)",
              url: "https://github.com/substack/stream-handbook",
              hours: 1.0,
            },
            {
              name: "Advanced SQL Techniques",
              url: "https://towardsdatascience.com/two-advanced-sql-techniques-that-can-drastically-improve-your-queries-81a97c92ddd0/",
              hours: 0.5,
            },
          ],
        },
        {
          id: "w2-testing-ci",
          title: "Week 2: Concurrency + Docker + Testing",
          description:
            "<div><strong>Learning objectives</strong>: Concurrency patterns, optimistic locking, production Docker (multi‑stage), Jest/Supertest, CI/CD.<br/><strong>Deliverables</strong>: CI on PR, coverage uploaded, DB state isolated per test.</div>",
          priority: "high",
          estimatedTime: 18,
          plannedSessions: 6,
          resources: [
            {
              name: "PostgreSQL Transaction Isolation",
              url: "https://www.postgresql.org/docs/current/transaction-iso.html",
              hours: 1.5,
            },
            {
              name: "Multi-stage Docker for Node.js (Snyk)",
              url: "https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/",
              hours: 1.5,
            },
            {
              name: "Jest & Supertest 2025",
              url: "https://www.youtube.com/watch?v=LEYuxsGIeGo",
              hours: 1.5,
            },
            {
              name: "GitHub Actions: Node.js CI/CD",
              url: "https://docs.github.com/actions/guides/building-and-testing-nodejs",
              hours: 1.0,
            },
          ],
        },
        {
          id: "w3-auth-security",
          title: "Week 3: Auth + Security",
          description:
            "<div><strong>Learning objectives</strong>: JWT vs sessions, RBAC implementation, password hashing, token refresh.<br/><strong>Deliverables</strong>: Protected routes with tests; documented flows.</div>",
          priority: "high",
          estimatedTime: 10,
          plannedSessions: 5,
          resources: [
            {
              name: "Node.js Security Best Practices",
              url: "https://nodejs.org/en/docs/guides/security/",
              hours: 1.0,
            },
            {
              name: "OWASP Authentication Cheat Sheet",
              url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
              hours: 1.5,
            },
            {
              name: "RBAC vs ABAC (Cloudflare)",
              url: "https://www.cloudflare.com/learning/access-management/rbac-vs-abac/",
              hours: 0.75,
            },
          ],
        },
        {
          id: "w4-openapi",
          title: "Week 4: API Design + Error Handling",
          description:
            "<div><strong>Learning objectives</strong>: API versioning, pagination (cursor‑based), error standardization (RFC7807), idempotency.<br/><strong>Deliverables</strong>: /api-docs route with examples; CI schema validation; collection exported.</div>",
          priority: "high",
          pacing: "accelerate",
          estimatedTime: 8,
          plannedSessions: 4,
          resources: [
            {
              name: "REST API Best Practices",
              url: "https://restfulapi.net/",
              hours: 1.0,
            },
            {
              name: "RFC 7807: Problem Details",
              url: "https://tools.ietf.org/html/rfc7807",
              hours: 0.5,
            },
            {
              name: "Stripe Idempotency Keys",
              url: "https://stripe.com/blog/idempotency",
              hours: 0.5,
            },
          ],
        },
        {
          id: "w5-payments-workers",
          title: "Week 5: Async Messaging Concepts + BullMQ",
          description:
            "<div><strong>Learning objectives</strong>: Messaging patterns, at‑least‑once delivery, BullMQ implementation, webhook idempotency.<br/><strong>Deliverables</strong>: Idempotent webhook handler; worker with retry strategy; DLQ docs.</div>",
          priority: "high",
          pacing: "needstime",
          estimatedTime: 10,
          plannedSessions: 5,
          resources: [
            {
              name: "Enterprise Integration Patterns (messaging)",
              url: "https://www.enterpriseintegrationpatterns.com/",
              hours: 1.0,
            },
            {
              name: "BullMQ Official Docs",
              url: "https://docs.bullmq.io",
              hours: 2.0,
            },
            {
              name: "Stripe Webhooks",
              url: "https://docs.stripe.com/webhooks",
              hours: 0.8,
            },
            {
              name: "Webhook Idempotency",
              url: "https://hookdeck.com/webhooks/guides/implement-webhook-idempotency",
              hours: 0.8,
            },
          ],
          optionalResources: [
            {
              name: "Redis Streams basics (BullMQ internals)",
              url: "https://redis.io/docs/latest/develop/data-types/streams/",
              hours: 0.8,
            },
            {
              name: "RabbitMQ/Kafka concepts (overview)",
              url: "https://www.confluent.io/learn/kafka-vs-rabbitmq/",
              hours: 0.6,
            },
          ],
        },
        {
          id: "w6-caching-performance",
          title: "Week 6: Caching + Database Scaling",
          description:
            "<div><strong>Learning objectives</strong>: Cache‑aside pattern, connection pooling, VACUUM tuning, replication strategies.<br/><strong>Deliverables</strong>: Before/after timings and indexes documented in README.</div>",
          priority: "medium",
          estimatedTime: 8,
          plannedSessions: 4,
          resources: [
            {
              name: "Caching Strategies (AWS)",
              url: "https://aws.amazon.com/caching/best-practices/",
              hours: 1.0,
            },
            {
              name: "Redis Node.js Guide",
              url: "https://redis.io/docs/latest/develop/clients/nodejs/",
              hours: 1.0,
            },
            {
              name: "PostgreSQL Performance Tuning 2025",
              url: "https://www.pgedge.com/blog/postgresql-performance-tuning",
              hours: 1.0,
            },
            {
              name: "PostgreSQL Replication",
              url: "https://www.postgresql.org/docs/current/warm-standby.html",
              hours: 1.0,
            },
          ],
        },
        {
          id: "w7-realtime",
          title: "Week 7: Real‑time + Security Deep Dive",
          description:
            "<div><strong>Learning objectives</strong>: WebSocket authentication, streams/backpressure, rate limiting, load testing.<br/><strong>Deliverables</strong>: Real‑time events + basic verification script.</div>",
          priority: "medium",
          estimatedTime: 8,
          plannedSessions: 4,
          resources: [
            {
              name: "Socket.IO Official Tutorial",
              url: "https://socket.io/get-started/chat",
              hours: 0.8,
            },
            {
              name: "Node.js Streams Deep Dive",
              url: "https://www.youtube.com/watch?v=GlybFFMXXmQ",
              hours: 1.0,
            },
            {
              name: "Rate Limiting Algorithms (Stripe)",
              url: "https://stripe.com/blog/rate-limiters",
              hours: 0.6,
            },
            {
              name: "k6 Load Testing",
              url: "https://k6.io/docs/getting-started/running-k6/",
              hours: 0.8,
            },
          ],
        },
        {
          id: "w8-ship-project-1",
          title: "Week 8: Ship Project 1 – Task/Project SaaS API (Live)",
          description:
            "<div><strong>Skills</strong>: Deploy (Fly.io), Neon (Postgres), Upstash (Redis), CI/CD.<br/><strong>Deliverables</strong>: Public demo live; OpenAPI at /api-docs; seeds; CI + coverage badges; short runbook; <em>Start applications</em>.<br/><strong>Acceptance</strong>: Demo reachable; docs browsable.<details><summary>Portfolio Artifacts Checklist</summary><ul><li>OpenAPI at /api-docs with examples</li><li>CI badge + coverage badge</li><li>docker-compose.yml</li><li>.env.example</li><li>Seed script</li><li>One‑page Mermaid system diagram</li><li>CONTRIBUTING, PR template, CODEOWNERS</li><li>Short incident/runbook</li></ul></details></div>",
          priority: "high",
          estimatedTime: 10,
          plannedSessions: 6,
          resources: [
            { name: "Fly.io Docs", url: "https://fly.io/docs/" },
            { name: "Neon Docs", url: "https://neon.tech/docs" },
            {
              name: "Upstash Redis Docs",
              url: "https://upstash.com/docs/redis/overall/getstarted",
            },
          ],
        },
        {
          id: "w9-ecommerce-part1",
          title: "Week 9: NestJS Fundamentals",
          description:
            "<div><strong>Learning objectives</strong>: Modules, DI, guards, interceptors, pipes, decorators.<br/><strong>Deliverables</strong>: Feature module with guards/pipes; HTTP adapter; testing baseline.</div>",
          priority: "high",
          pacing: "accelerate",
          estimatedTime: 10,
          plannedSessions: 6,
          resources: [
            {
              name: "NestJS Full Course 2025 (Ace Dev Hub) — Recommended 2025",
              url: "https://www.youtube.com/watch?v=XVZ10uFY9DU",
              hours: 6.5,
            },
            {
              name: "NestJS Official Docs",
              url: "https://docs.nestjs.com/first-steps",
              hours: 1.0,
            },
            {
              name: "NestJS Best Practices (Project Structure)",
              url: "https://github.com/CatsMiaow/nestjs-project-structure",
              hours: 0.5,
            },
          ],
          optionalResources: [
            {
              name: "Net Ninja NestJS Crash Course — Alternative",
              url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9g8YFseGdkyj9RH9kVs_cMr",
              hours: 4.0,
            },
          ],
        },
        {
          id: "w10-ecommerce-part2",
          title: "Week 10: NestJS Advanced + GraphQL",
          description:
            "<div><strong>Learning objectives</strong>: GraphQL basics, validation pipes, custom decorators, config management.<br/><strong>Deliverables</strong>: GraphQL module + schema, validation strategy, config module.</div>",
          priority: "high",
          estimatedTime: 10,
          plannedSessions: 6,
          resources: [
            {
              name: "NestJS GraphQL",
              url: "https://docs.nestjs.com/graphql/quick-start",
              hours: 1.0,
            },
            {
              name: "Ace Dev Hub Course — Advanced Sections",
              url: "https://www.youtube.com/watch?v=XVZ10uFY9DU",
              hours: 2.0,
            },
          ],
        },
        {
          id: "w11-system-design",
          title: "Week 11: Practical System Design + Advanced Database",
          description:
            "<div><strong>Learning objectives</strong>: Sharding strategies, partitioning, distributed transactions, MVCC, practical patterns.<br/><strong>Deliverables</strong>: 2–3 short case studies with Mermaid diagrams and trade‑offs; ADRs added; <em>Sharding/partitioning design document</em>.</div>",
          priority: "medium",
          pacing: "needstime",
          estimatedTime: 8,
          plannedSessions: 4,
          resources: [
            {
              name: "System Design Primer (focused)",
              url: "https://github.com/donnemartin/system-design-primer",
              hours: 3.0,
            },
            {
              name: "PostgreSQL Partitioning",
              url: "https://www.postgresql.org/docs/current/ddl-partitioning.html",
              hours: 1.0,
            },
            {
              name: "GeeksforGeeks Case Studies",
              url: "https://geeksforgeeks.org/system-design/case-studies-in-system-design/",
              hours: 2.0,
            },
            {
              name: "PostgreSQL MVCC",
              url: "https://www.postgresql.org/docs/current/mvcc.html",
              hours: 1.0,
            },
          ],
        },
        {
          id: "w12-interview-prep",
          title: "Week 12: Advanced Testing + Observability",
          description:
            "<div><strong>Learning objectives</strong>: Contract testing, load testing, observability (logs/metrics/traces), SLOs.<br/><strong>Deliverables</strong>: Ship Project 2 + advanced tests; question bank + notes committed.</div>",
          priority: "low",
          pacing: "needstime",
          estimatedTime: 8,
          plannedSessions: 5,
          resources: [
            {
              name: "Testing Microservices (Martin Fowler)",
              url: "https://martinfowler.com/articles/microservice-testing/",
              hours: 1.0,
            },
            {
              name: "Observability 101 (Honeycomb)",
              url: "https://www.honeycomb.io/blog/observability-engineering-101",
              hours: 1.0,
            },
            {
              name: "Pino Structured Logging",
              url: "https://getpino.io/",
              hours: 0.5,
            },
          ],
        },
        {
          id: "w15-dsa-warmup",
          title: "Week 15–16: DSA Warm-up",
          description:
            "<div><strong>Learning objectives</strong>: Pattern recognition (arrays, hashing, two pointers) — not deep grinding.<br/><strong>Hours</strong>: 12–15 total (30–45 min/day). <strong>Pacing</strong>: Can accelerate to 10–12 hrs if backend roles prioritized.</div>",
          priority: "low",
          pacing: "accelerate",
          estimatedTime: 13,
          plannedSessions: 8,
          resources: [
            {
              name: "NeetCode Roadmap — PRIMARY",
              url: "https://neetcode.io/roadmap",
              hours: 6.0,
            },
            {
              name: "Blind 75 (reference)",
              url: "https://neetcode.io/practice",
              hours: 3.0,
            },
          ],
        },
      ],
    },
  ],
  projects: [
    { id: "project1", title: "Project 1 – Task/Project SaaS API" },
    { id: "project2", title: "Project 2 – Headless E‑commerce API" },
  ],
  curatedResources: [],
  advancedTopics: [
    {
      id: "adv-kubernetes",
      title: "Kubernetes Fundamentals (4–6 weeks post‑offer)",
      description:
        "Workloads, services/ingress, health probes, HPA, zero‑downtime deploys.",
      importance: "Post‑offer specialization",
      resources: [],
    },
    {
      id: "adv-terraform",
      title: "Terraform/IaC & Secrets",
      description:
        "Infra modules, remote state, secure secret handling (SOPS/Cloud KMS).",
      importance: "Post‑offer",
      resources: [],
    },
    {
      id: "adv-microservices",
      title: "Microservices & Messaging",
      description: "Service boundaries, idempotency, saga/outbox patterns, contracts.",
      importance: "Post‑offer",
      resources: [],
    },
    {
      id: "adv-observability",
      title: "Observability",
      description: "OpenTelemetry traces + metrics + logs; SLOs and alerting.",
      importance: "Post‑offer",
      resources: [],
    },
  ],
};
