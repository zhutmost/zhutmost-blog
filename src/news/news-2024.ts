import { type InputNewsItem } from "@/lib/config"

export const news2024 = [
  {
    date: "2024-11-07",
    type: "award",
    title:
      "Our paper “A Real-Time Optical-Flow-based SLAM ...” won the Distinguished Design Award on A-SSCC 2024!",
    description:
      "We presented and demonstrated Xiliu, an optical-flow-based SLAM accelerator on FPGA. It exploits the similarity and sparsity of optical flow to achieve real-time performance.",
  },
  {
    date: "2024-11-01",
    type: "publication",
    title: "Our paper “GauSPU: 3D Gaussian Splatting Processor ...” appeared on MICRO 2024.",
    description:
      "GauSPU is a HW/SW-cooptimized GPU extension aiming to realize real-time pose tracking in 3D Gaussian Splatting-based SLAM systems. ",
  },
  {
    date: "2024-10-25",
    type: "publication",
    title: "Our paper “ST-BPTT: a Memory-Efficient BPTT SNN Training ...” appeared on BioCAS 2024.",
    description:
      "This work reduces the memory footprint of BPTT-based SNN training by cutting off the back-propagation paths of the timesteps with low significance.",
  },
  {
    date: "2024-05-14",
    type: "publication",
    title: "Our 2 Compute-in-Memory papers appeared on ISCAS 2024.",
    description:
      "We presented two works, a Logarithmic FP CIM macro and a LUT-based CIM macro. The latter, Trident-CIM, was invited to transfer to TCAS-II.",
  },
  {
    date: "2024-05-14",
    type: "publication",
    title: "Our paper “SLAM-CIM: A Visual SLAM Backend Processor ...” is accepted by JSSC.",
    description:
      "We propose SLAM-CIM, a Compute-in-Memory based visual SLAM backend processor for edge robotics. It features SRAM-based FP16 digital CIM macros supporting both MAC and linear solving.",
  },
] satisfies InputNewsItem[]
