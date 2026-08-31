import { type InputNewsItem } from "@/lib/config"

export const news2026 = [
  {
    date: "2026-03-28",
    type: "publication",
    title:
      "Our paper “GauTracer” is accepted by ISCA 2026. Looking forward to sharing our work at Raleigh, North Carolina!",
    description:
      "GauTracer fully integrates Gaussian primitives into the GPU Ray Tracer pipeline, eliminating software shader invocations.",
  },
  {
    date: "2026-02-13",
    type: "publication",
    title: "Our paper “SpikeLet” was accepted by TCAD.",
    description:
      "This paper presents SpikeLet, a event-driven spatial-temporal-parallel multichiplet neuromorphic system tailored for large-scale SNNs.",
  },
  {
    date: "2026-01-20",
    type: "publication",
    title: "Our paper “CIM-Pruner” is accepted by ISCAS 2026.",
    description:
      "This paper demonstrates a Compute-in-Memory macro design supporting in-memory token merging and pruning for Vision-Language Models.",
  },
] satisfies InputNewsItem[]
