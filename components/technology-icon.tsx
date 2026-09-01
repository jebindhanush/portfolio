import {
  AppWindow,
  Blocks,
  Boxes,
  Braces,
  ChartNoAxesCombined,
  CheckCheck,
  Clapperboard,
  CloudCog,
  Code2,
  Container,
  CreditCard,
  Database,
  GitBranch,
  KeyRound,
  LayoutTemplate,
  ListChecks,
  Palette,
  Send,
  ServerCog,
  TestTube2,
  Users,
  Video,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { createElement } from "react";

const includesAny = (value: string, terms: string[]) =>
  terms.some((term) => value.includes(term));

function getTechnologyIcon(name: string): LucideIcon {
  const value = name.toLowerCase();

  if (
    includesAny(value, [
      "sql",
      "postgresql",
      "mysql",
      "redis",
      "dynamodb",
      "entity framework",
      "ado.net",
      "database",
    ])
  ) {
    return Database;
  }

  if (
    includesAny(value, [
      "python",
      "php",
      "c#",
      ".net",
      "laravel",
      "web forms",
    ])
  ) {
    return Braces;
  }

  if (
    includesAny(value, [
      "react",
      "angular",
      "next.js",
      "flutter",
      "pwa",
      "app window",
    ])
  ) {
    return AppWindow;
  }

  if (
    includesAny(value, [
      "html",
      "css",
      "scss",
      "bootstrap",
      "tailwind",
      "material ui",
    ])
  ) {
    return Palette;
  }

  if (
    includesAny(value, [
      "javascript",
      "typescript",
      "jquery",
      "ajax",
      "web api",
    ])
  ) {
    return Code2;
  }

  if (
    includesAny(value, [
      "microservices",
      "domain-driven",
      "ddd",
      "mediatr",
      "blockchain",
    ])
  ) {
    return Boxes;
  }

  if (
    includesAny(value, [
      "highcharts",
      "amcharts",
      "google charts",
      "rdlc",
      "power bi",
      "reporting",
      "application insights",
    ])
  ) {
    return ChartNoAxesCombined;
  }

  if (includesAny(value, ["azure key vault", "key vault"])) return KeyRound;
  if (includesAny(value, ["azure boards", "jira", "backlog", "sprint"])) {
    return ListChecks;
  }
  if (
    includesAny(value, [
      "azure devops",
      "github actions",
      "jenkins",
      "continuous integration",
      "continuous delivery",
      "ci/cd",
      "git",
    ])
  ) {
    return GitBranch;
  }
  if (value.includes("docker")) return Container;
  if (includesAny(value, ["aws", "azure", "blob storage", "terraform"])) {
    return CloudCog;
  }
  if (includesAny(value, ["on-premises", "legacy application"])) {
    return ServerCog;
  }
  if (
    includesAny(value, [
      "lambda",
      "functions",
      "sqs",
      "sns",
      "workflow",
    ])
  ) {
    return Workflow;
  }
  if (
    includesAny(value, [
      "jest",
      "xunit",
      "nunit",
      "playwright",
      "k6",
      "integration testing",
      "e2e",
    ])
  ) {
    return TestTube2;
  }
  if (value.includes("manual testing")) return CheckCheck;
  if (value.includes("postman")) return Send;
  if (
    includesAny(value, [
      "client",
      "stakeholder",
      "requirements",
      "scrum",
      "code reviews",
    ])
  ) {
    return Users;
  }
  if (includesAny(value, ["davinci", "capcut", "video editing"])) {
    return Clapperboard;
  }
  if (value.includes("content creation")) return Video;
  if (value.includes("qr code")) return Blocks;
  if (value.includes("admin dashboard")) return LayoutTemplate;
  if (value.includes("payment")) return CreditCard;

  return Wrench;
}

export function TechnologyIcon({
  name,
  size = 13,
}: {
  name: string;
  size?: number;
}) {
  return createElement(getTechnologyIcon(name), {
    size,
    "aria-hidden": true,
  });
}
