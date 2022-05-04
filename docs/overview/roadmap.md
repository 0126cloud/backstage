---
id: roadmap
title: Roadmap
description: Roadmap of Backstage
---

## The Backstage Roadmap

Backstage is currently under rapid development. This page details the project’s public roadmap, the result of ongoing collaboration between the core maintainers and the broader Backstage community.

The Backstage roadmap lays out both [“what’s next”](#whats-next) and [“future work”](#future-work). With "next" we mean features planned for release within the ongoing quarter from January through March 2022. With "future" we mean features in the radar, but not yet scheduled.

| [What's next](#whats-next)                                                                                                                                                                                     | [Future work](#future-work)                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Ease of onboarding](#ease-of-onboarding) <br/> [Search 1.0](#search-1.0) <br/> [TechDocs Addon framework](#techdocs-addon-framework) <br/> [Backend Services (initial)](#backend-services-(initial)) <br/> [Backstage Security Audit](#backstage-security-audit) <br/> [SIGs for contributors](#sigs-for-contributors) | Security Plan (and Strategy) <br/> Composable Homepage 1.0 <br/> GraphQL <br/> Telemetry <br/> Improved UX design |

The long-term roadmap (12 - 36 months) is not detailed in the public roadmap.
Third-party contributions are also not currently included in the roadmap. Let us know about any ongoing developments and we’re happy to include them here as well.

## What’s next

The feature set below is planned for the ongoing quarter, and grouped by theme.
The list order doesn’t necessarily reflect priority, and the development/release cycle will vary based on maintainer schedules.

### Ease of onboarding

A faster (with less development) and easier setup of a POC, as part of the onboarding experience, has been a common and loud suggestion from new adopters as well as analysts looking at Backstage.

With this initiative we plan to start facing this important topic with the most commonly used and challenging tasks. More in particular we plan to reduce the effort required to go from zero to production in installing and customising Backstage, as well as reducing the effort required to populate the Software Catalog.

More iterations will be required in the following quarters, but this will be a good improvement in the onboarding experience, especially for the benefit of new adopters. 

### Search 1.0

Fix the few remaining issues to get Backstage Search platform  up to 1.0 ([here](https://github.com/backstage/backstage/milestone/27) and [here](https://github.com/backstage/backstage/milestone/28)).

### TechDocs Addon framework

Addons are TechDocs features that are added on top of the base docs like code experience. An example would be a feature that showed comments on the page. We plan to add an Addon framework and open source a selection of the Addons that we use internally at Spotify. Further Addons can then be added by the Community.

### Backend Services (initial)

To better scale and maintain the Backstage instances, a backend layer of services is planned to be introduced as part of the software architecture. This layer of backend services will help in decoupling the various modules (e.g. Catalog and Scaffolder) from the frontend experience.

In this quarter we plan to start designing the new architecture, together with the first experimentation and development of the software components.

### Backstage Security Audit

This is the continuation of the initiative started in the previous quarter. This quarter will see the publication of the report describing the outcome of the auditing, together the first fixes and the development of some of the changes required to address the vulnerabilities.

This initiative is the first of a broader Security Strategy for Backstage. The
purpose of the Security Audit is to involve third-party companies in auditing
the platform. The benefit for the adopters is clear: we want Backstage to be as secure as possible, and we want to make it reliable through a specific initiative.

This initiative is done together, and with the support of, the [Cloud Native Computing Foundation (CNCF)](https://www.cncf.io/).

### SIGs for contributors

The request to better coordinate the increasing contributions coming from the various developers' adopter is loud and clear. We think that the community is mature enough to start launching the SIGs (Special Interest Groups) following the successful model of Kubernetes.

## Future work

The following feature list doesn’t represent a commitment to develop, and the
list order doesn’t reflect any priority or importance, but these features are on
the maintainers’ radar, with clear interest expressed by the community.

- **Security Plan (and Strategy):** The purpose of the Security Strategy is to
  move another step along the path to maturing the platform, setting the
  expectations of any adopters from a security standpoint.
- **Composable Homepage 1.0:** Driving this to 1.0 by adding some composable components.
- **[GraphQL](https://graphql.org/) support:** Introduce the ability to query Backstage backend services with a standard query language for APIs.
- **Telemetry:** To efficiently generate logging and metrics in such a way that adopters can get insights so that Backstage can be monitored and improved.
- **Improved UX design:** Provide a better Backstage user experience through visual guidelines and templates, especially navigation across plug-ins and portal functionalities.

## How to influence the roadmap

As we evolve Backstage, we want you to contribute actively in the journey to
define the most effective developer experience in the world.

A roadmap is only useful if it captures real needs. If you have success stories,
feedback, or ideas, we want to hear from you! If you plan to work (or are
already working) on a new or existing feature, please let us know, so that we
can update the roadmap accordingly. We are also happy to share knowledge and
context that will help your feature land successfully.

You can also head over to the
[CONTRIBUTING](https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md)
guidelines to get started.

If you have specific questions about the roadmap, please create an
[issue](https://github.com/backstage/backstage/issues/new/choose), ping us on
[Discord](https://discord.gg/qxsEfa8Vq8), or
[book time](http://calendly.com/spotify-backstage) with the Spotify team.

## Completed milestones

Read more about the completed (and released) features for reference.

- [[Search] ElasticSearch integration](https://backstage.io/docs/features/search/search-engines#elasticsearch)
- [[Search] TechDocs search capabilities](https://backstage.io/docs/features/search/how-to-guides#how-to-index-techdocs-documents)
- [TechDocs Beta](https://backstage.spotify.com/blog/product-updates/techdocs-beta-has-landed)
- [[Home] Composable homepage](https://github.com/backstage/backstage/milestone/34)
- [[Search] Out-of-the-Box Implementation (Alpha)](https://github.com/backstage/backstage/milestone/26)
- [Deploy a product demo at `demo.backstage.io`](https://demo.backstage.io)
- [Kubernetes plugin - v1](https://github.com/backstage/backstage/tree/master/plugins/kubernetes)
- [Helm charts](https://github.com/backstage/backstage/tree/master/contrib/chart/backstage)
- [Backstage Design System 💅](https://backstage.io/blog/2020/09/30/backstage-design-system)
- [Cost Insights plugin 💸](https://engineering.atspotify.com/2020/09/29/managing-clouds-from-the-ground-up-cost-engineering-at-spotify/)
- [Donate Backstage to the CNCF 🎉](https://backstage.io/blog/2020/09/23/backstage-cncf-sandbox)
- [TechDocs v1](https://backstage.io/blog/2020/09/08/announcing-tech-docs)
- [Plugin marketplace](https://backstage.io/plugins)
- [Improved and move documentation to backstage.io](https://backstage.io/docs/overview/what-is-backstage)
- [Backstage Software Catalog (alpha)](https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha)
- [Backstage Software Templates (alpha)](https://backstage.io/blog/2020/08/05/announcing-backstage-software-templates)
- [Make it possible to add custom auth providers](https://backstage.io/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport)
- [TechDocs v0](https://github.com/backstage/backstage/milestone/15)
- CI plugins: CircleCI, Jenkins, GitHub Actions and TravisCI
- [Service API documentation](https://github.com/backstage/backstage/pull/1737)
- Backstage Software Catalog can read from: GitHub, GitLab,
  [Bitbucket](https://github.com/backstage/backstage/pull/1938)
- Support auth providers: Google, Okta, GitHub, GitLab,
  [auth0](https://github.com/backstage/backstage/pull/1611),
  [AWS](https://github.com/backstage/backstage/pull/1990)

- [Donate Backstage to the CNCF 🎉](https://backstage.io/blog/2020/09/23/backstage-cncf-sandbox)
- [TechDocs v1](https://backstage.io/blog/2020/09/08/announcing-tech-docs)
- [Plugin marketplace](https://backstage.io/plugins)
- [Improved and move documentation to backstage.io](https://backstage.io/docs/overview/what-is-backstage)
- [Backstage Software Catalog (alpha)](https://backstage.io/blog/2020/06/22/backstage-service-catalog-alpha)
- [Backstage Software Templates (beta)](https://backstage.io/blog/2021/07/26/software-templates-are-now-in-beta)
- [Make it possible to add custom auth providers](https://backstage.io/blog/2020/07/01/how-to-enable-authentication-in-backstage-using-passport)
- [TechDocs v0](https://github.com/backstage/backstage/milestone/15)
- CI plugins: CircleCI, Jenkins, GitHub Actions and TravisCI
- [Service API documentation](https://github.com/backstage/backstage/pull/1737)
- Backstage Software Catalog can read from: GitHub, GitLab,
  [Bitbucket](https://github.com/backstage/backstage/pull/1938)
- Support auth providers: Google, Okta, GitHub, GitLab,
  [auth0](https://github.com/backstage/backstage/pull/1611),
  [AWS](https://github.com/backstage/backstage/pull/1990)
