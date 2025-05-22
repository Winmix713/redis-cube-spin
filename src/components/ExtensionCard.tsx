
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExtensionCardProps {
  type: "obsidian" | "figma" | "redis" | "terminal" | "docker" | "react" | "vue" | "angular" | "svelte" | "nextjs" | "gatsby" | "graphql" | "mongodb" | "postgres" | "aws" | "firebase";
  title: string;
  description: string;
  delay: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const ExtensionCard: React.FC<ExtensionCardProps> = ({
  type,
  title,
  description,
  delay,
  icon,
  children
}) => {
  const bgClasses = {
    obsidian: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(82,48,145,0.70),rgba(26,11,51,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(92,58,165,0.85),rgba(36,21,61,0.24))]',
    figma: 'bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(25,41,53,0.7),rgba(18,25,34,0.07))] hover:bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(35,51,73,0.85),rgba(28,35,44,0.17))]',
    redis: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(145,48,48,0.70),rgba(51,11,11,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(165,58,58,0.85),rgba(61,21,21,0.24))]',
    terminal: 'bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(64,64,64,0.7),rgba(24,24,24,0.07))] hover:bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(84,84,84,0.85),rgba(44,44,44,0.17))]',
    docker: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(48,120,145,0.70),rgba(11,30,51,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(58,140,165,0.85),rgba(21,40,61,0.24))]',
    react: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(20,158,202,0.70),rgba(5,40,51,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(30,168,212,0.85),rgba(15,50,61,0.24))]',
    vue: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(66,153,81,0.70),rgba(16,38,20,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(76,163,91,0.85),rgba(26,48,30,0.24))]',
    angular: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(195,20,50,0.70),rgba(51,5,13,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(205,30,60,0.85),rgba(61,15,23,0.24))]',
    svelte: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(255,62,0,0.70),rgba(51,12,0,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(255,72,10,0.85),rgba(61,22,10,0.24))]',
    nextjs: 'bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(20,20,20,0.7),rgba(0,0,0,0.07))] hover:bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(30,30,30,0.85),rgba(10,10,10,0.17))]',
    gatsby: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(102,51,153,0.70),rgba(28,14,51,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(112,61,163,0.85),rgba(38,24,61,0.24))]',
    graphql: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(229,53,171,0.70),rgba(51,12,38,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(239,63,181,0.85),rgba(61,22,48,0.24))]',
    mongodb: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(67,153,52,0.70),rgba(17,38,13,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(77,163,62,0.85),rgba(27,48,23,0.24))]',
    postgres: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(51,103,145,0.70),rgba(13,26,41,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(61,113,155,0.85),rgba(23,36,51,0.24))]',
    aws: 'bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(255,153,1,0.7),rgba(51,31,0,0.07))] hover:bg-[radial-gradient(92.33%_55.94%_at_50%_44.06%,rgba(255,163,11,0.85),rgba(61,41,10,0.17))]',
    firebase: 'bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(255,150,0,0.70),rgba(51,30,0,0.14))] hover:bg-[radial-gradient(86.88%_75.47%_at_50.00%_24.53%,rgba(255,160,10,0.85),rgba(61,40,10,0.24))]'
  };

  const shadowClasses = {
    obsidian: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(51,3,129,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(124,58,237,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(124,58,237,0.3)]',
    figma: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(3,123,129,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(26,188,254,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(26,188,254,0.2)]',
    redis: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(129,3,3,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(237,58,58,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(237,58,58,0.3)]',
    terminal: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(128,128,128,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(160,160,160,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(160,160,160,0.2)]',
    docker: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(3,102,129,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(58,188,237,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(58,188,237,0.3)]',
    react: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(3,123,202,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(20,158,202,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(20,158,202,0.3)]',
    vue: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(66,153,81,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(66,153,81,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(66,153,81,0.3)]',
    angular: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(195,20,50,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(195,20,50,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(195,20,50,0.3)]',
    svelte: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(255,62,0,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(255,62,0,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(255,62,0,0.3)]',
    nextjs: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(128,128,128,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(0,0,0,0.3)]',
    gatsby: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(102,51,153,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(102,51,153,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(102,51,153,0.3)]',
    graphql: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(229,53,171,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(229,53,171,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(229,53,171,0.3)]',
    mongodb: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(67,153,52,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(67,153,52,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(67,153,52,0.3)]',
    postgres: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(51,103,145,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(51,103,145,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(51,103,145,0.3)]',
    aws: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(255,153,1,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(255,153,1,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(255,153,1,0.3)]',
    firebase: 'shadow-[0px_1px_0px_0px_rgba(255,255,255,0.10)_inset,0px_30px_50px_0px_rgba(0,0,0,0.40),0px_4px_24px_0px_rgba(255,150,0,0.09),0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.15)_inset,0px_50px_80px_0px_rgba(0,0,0,0.60),0px_12px_48px_0px_rgba(255,150,0,0.25),0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_40px_rgba(255,150,0,0.3)]'
  };

  const iconBgClasses = {
    obsidian: 'bg-gradient-to-br from-[#7c3aed] to-[#a855f7] shadow-[0_4px_12px_rgba(124,58,237,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#8b5cf6] group-hover:to-[#c084fc] group-hover:shadow-[0_8px_24px_rgba(124,58,237,0.5)]',
    figma: 'bg-gradient-to-br from-[#1e293b] to-[#334155] shadow-[0_4px_12px_rgba(30,41,59,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#334155] group-hover:to-[#475569] group-hover:shadow-[0_8px_24px_rgba(30,41,59,0.5)]',
    redis: 'bg-gradient-to-br from-[#dc2626] to-[#ef4444] shadow-[0_4px_12px_rgba(220,38,38,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#ef4444] group-hover:to-[#f87171] group-hover:shadow-[0_8px_24px_rgba(220,38,38,0.5)]',
    terminal: 'bg-gradient-to-br from-[#374151] to-[#6b7280] shadow-[0_4px_12px_rgba(55,65,81,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#6b7280] group-hover:to-[#9ca3af] group-hover:shadow-[0_8px_24px_rgba(55,65,81,0.5)]',
    docker: 'bg-gradient-to-br from-[#0ea5e9] to-[#3b82f6] shadow-[0_4px_12px_rgba(14,165,233,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#3b82f6] group-hover:to-[#60a5fa] group-hover:shadow-[0_8px_24px_rgba(14,165,233,0.5)]',
    react: 'bg-gradient-to-br from-[#149eca] to-[#61dafb] shadow-[0_4px_12px_rgba(20,158,202,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#61dafb] group-hover:to-[#a5ecff] group-hover:shadow-[0_8px_24px_rgba(20,158,202,0.5)]',
    vue: 'bg-gradient-to-br from-[#42b883] to-[#35495e] shadow-[0_4px_12px_rgba(66,184,131,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#42b883] group-hover:to-[#42b883] group-hover:shadow-[0_8px_24px_rgba(66,184,131,0.5)]',
    angular: 'bg-gradient-to-br from-[#c3143a] to-[#dd0031] shadow-[0_4px_12px_rgba(195,20,58,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#dd0031] group-hover:to-[#ff2c54] group-hover:shadow-[0_8px_24px_rgba(195,20,58,0.5)]',
    svelte: 'bg-gradient-to-br from-[#ff3e00] to-[#ff6b31] shadow-[0_4px_12px_rgba(255,62,0,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#ff5a26] group-hover:to-[#ff8f63] group-hover:shadow-[0_8px_24px_rgba(255,62,0,0.5)]',
    nextjs: 'bg-gradient-to-br from-[#212121] to-[#000000] shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#333333] group-hover:to-[#000000] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.5)]',
    gatsby: 'bg-gradient-to-br from-[#663399] to-[#9f6ade] shadow-[0_4px_12px_rgba(102,51,153,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#7e40bb] group-hover:to-[#b191e8] group-hover:shadow-[0_8px_24px_rgba(102,51,153,0.5)]',
    graphql: 'bg-gradient-to-br from-[#e535ab] to-[#f362c7] shadow-[0_4px_12px_rgba(229,53,171,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#e535ab] group-hover:to-[#f799dc] group-hover:shadow-[0_8px_24px_rgba(229,53,171,0.5)]',
    mongodb: 'bg-gradient-to-br from-[#449934] to-[#58cc45] shadow-[0_4px_12px_rgba(67,153,52,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#58cc02] group-hover:to-[#83da74] group-hover:shadow-[0_8px_24px_rgba(67,153,52,0.5)]',
    postgres: 'bg-gradient-to-br from-[#336791] to-[#4d88bc] shadow-[0_4px_12px_rgba(51,103,145,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#3d7db0] group-hover:to-[#75a5cc] group-hover:shadow-[0_8px_24px_rgba(51,103,145,0.5)]',
    aws: 'bg-gradient-to-br from-[#ff9901] to-[#ffbb4d] shadow-[0_4px_12px_rgba(255,153,1,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#ffac33] group-hover:to-[#ffd280] group-hover:shadow-[0_8px_24px_rgba(255,153,1,0.5)]',
    firebase: 'bg-gradient-to-br from-[#ff9600] to-[#ffca80] shadow-[0_4px_12px_rgba(255,150,0,0.3)] group-hover:bg-gradient-to-br group-hover:from-[#ffac33] group-hover:to-[#ffda99] group-hover:shadow-[0_8px_24px_rgba(255,150,0,0.5)]'
  };

  const cardImageClasses = {
    obsidian: 'bg-gradient-to-br from-[#4C1D95] via-[#7C3AED] to-[#A855F7] group-hover:bg-gradient-to-br group-hover:from-[#5B21B6] group-hover:via-[#8B5CF6] group-hover:to-[#C084FC]',
    figma: 'bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] group-hover:bg-gradient-to-br group-hover:from-[#1e293b] group-hover:via-[#334155] group-hover:to-[#475569]',
    redis: 'bg-gradient-to-br from-[#7f1d1d] via-[#dc2626] to-[#ef4444] group-hover:bg-gradient-to-br group-hover:from-[#991b1b] group-hover:via-[#ef4444] group-hover:to-[#f87171]',
    terminal: 'bg-gradient-to-br from-[#1f2937] via-[#374151] to-[#6b7280] group-hover:bg-gradient-to-br group-hover:from-[#374151] group-hover:via-[#6b7280] group-hover:to-[#9ca3af]',
    docker: 'bg-gradient-to-br from-[#0c4a6e] via-[#0ea5e9] to-[#3b82f6] group-hover:bg-gradient-to-br group-hover:from-[#0369a1] group-hover:via-[#3b82f6] group-hover:to-[#60a5fa]',
    react: 'bg-gradient-to-br from-[#087ea4] via-[#149eca] to-[#61dafb] group-hover:bg-gradient-to-br group-hover:from-[#0891b2] group-hover:via-[#22d3ee] group-hover:to-[#a5ecff]',
    vue: 'bg-gradient-to-br from-[#35495e] via-[#42b883] to-[#4fc08d] group-hover:bg-gradient-to-br group-hover:from-[#41b883] group-hover:via-[#4fc08d] group-hover:to-[#65d398]',
    angular: 'bg-gradient-to-br from-[#7f0d24] via-[#c3143a] to-[#dd0031] group-hover:bg-gradient-to-br group-hover:from-[#b10929] group-hover:via-[#dd0031] group-hover:to-[#ff2c54]',
    svelte: 'bg-gradient-to-br from-[#aa1400] via-[#ff3e00] to-[#ff6b31] group-hover:bg-gradient-to-br group-hover:from-[#dd2200] group-hover:via-[#ff5a26] group-hover:to-[#ff8f63]',
    nextjs: 'bg-gradient-to-br from-[#000000] via-[#111111] to-[#212121] group-hover:bg-gradient-to-br group-hover:from-[#111111] group-hover:via-[#212121] group-hover:to-[#333333]',
    gatsby: 'bg-gradient-to-br from-[#362066] via-[#663399] to-[#9f6ade] group-hover:bg-gradient-to-br group-hover:from-[#552b93] group-hover:via-[#7e40bb] group-hover:to-[#b191e8]',
    graphql: 'bg-gradient-to-br from-[#a60c79] via-[#e535ab] to-[#f362c7] group-hover:bg-gradient-to-br group-hover:from-[#cc1694] group-hover:via-[#e84eb6] group-hover:to-[#f799dc]',
    mongodb: 'bg-gradient-to-br from-[#304c13] via-[#449934] to-[#58cc45] group-hover:bg-gradient-to-br group-hover:from-[#3d611a] group-hover:via-[#58cc02] group-hover:to-[#83da74]',
    postgres: 'bg-gradient-to-br from-[#1a3347] via-[#336791] to-[#4d88bc] group-hover:bg-gradient-to-br group-hover:from-[#264a66] group-hover:via-[#3d7db0] group-hover:to-[#75a5cc]',
    aws: 'bg-gradient-to-br from-[#994c01] via-[#ff9901] to-[#ffbb4d] group-hover:bg-gradient-to-br group-hover:from-[#cc6601] group-hover:via-[#ffac33] group-hover:to-[#ffd280]',
    firebase: 'bg-gradient-to-br from-[#995a01] via-[#ff9600] to-[#ffca80] group-hover:bg-gradient-to-br group-hover:from-[#cc7702] group-hover:via-[#ffac33] group-hover:to-[#ffda99]'
  };

  return (
    <div 
      className="opacity-0 transform-origin-top-right animate-slide-in"
      style={{ animationDelay: delay }}
    >
      <div className={cn(
        "w-80 rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 ease-cubic-bezier-custom group",
        "hover:-translate-y-2 hover:scale-[1.02] active:-translate-y-1 active:scale-[0.98] active:transition-all active:duration-100 active:ease-in",
        bgClasses[type],
        shadowClasses[type]
      )}>
        <div className="px-5 pt-5">
          <div className="flex items-start gap-3 mb-3">
            <div className={cn(
              "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative",
              "transition-all duration-300 ease-out group-hover:scale-105 group-active:scale-95",
              iconBgClasses[type]
            )}>
              {icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-lg font-semibold text-white mb-1 leading-tight transition-all duration-300 ease-out">
                {title}
              </div>
            </div>
            <button className="w-8 h-8 rounded-lg bg-white/5 border-none flex items-center justify-center cursor-pointer transition-all duration-300 ease-cubic-bezier-custom flex-shrink-0 relative overflow-hidden hover:bg-white/15 hover:translate-x-1 hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)] active:translate-x-0.5 active:scale-95 active:bg-white/20">
              <ArrowRight className="w-4 h-4 text-white/80 transition-all duration-300 ease-out group-hover:text-white group-hover:translate-x-0.5" />
            </button>
          </div>
          <p className="text-sm text-white/70 leading-relaxed mb-4 transition-colors duration-300 ease-out group-hover:text-white/85">
            {description}
          </p>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4 transition-all duration-300 ease-out group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-white/20 group-hover:to-transparent group-hover:shadow-[0_0_8px_rgba(255,255,255,0.1)]"></div>
        </div>
        <div className={cn(
          "w-full h-[180px] relative overflow-hidden flex items-center justify-center transition-all duration-300 ease-out",
          cardImageClasses[type]
        )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExtensionCard;
