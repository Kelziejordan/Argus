# Repository Role Declaration — Argus V10

Status: FROZEN AUTHORITY DECLARATION
Effective branch: `main`
Repository: `Kelziejordan/Argus`
Declared role: HISTORICAL ARGUS V10 ARCHITECTURE / REFERENCE IMPLEMENTATION

## 1. Architectural Tier

Argus V10 is a historical architecture-generation workspace.

It sits outside the current executable runtime lineage.

Historical position:

    ARGUS V10
        ↓
    subsequent ARG / ArgCore / ArgOS evolution
        ↓
    current Arg runtime

Argus V10 must therefore be treated as architectural provenance and reference material, not as a current runtime dependency.

## 2. Source-of-Truth Status

Argus is the source of truth ONLY for what this repository historically contained.

It is not the source of truth for:

- the current Arg runtime
- ArgCore contracts
- current identity semantics
- current state contracts
- current governance semantics
- current certification status

The current runtime repository is `Kelziejordan/Arg`.

The foundational contract authority is ArgCore.

## 3. Lifecycle Status

Classification:

- HISTORICAL
- REFERENCE
- FROZEN FOR LINEAGE PURPOSES
- NON-AUTHORITATIVE FOR CURRENT RUNTIME

The repository was last updated in May 2026 and contains an ARGUS V10 workspace plus a packaged `argus-v10-complete.zip` artifact.

It may remain publicly accessible and deployable, but deployment or historical usability does not promote it into the current runtime lineage.

## 4. Dependency Status

Argus has no authorized runtime dependency relationship with the current Arg system.

Current Arg must not import Argus V10 code as an implicit dependency.

If code or concepts are recovered from Argus, they must enter the current lineage through explicit provenance and verification.

## 5. Identity Authority

Identity authority: NONE for the current ecosystem.

Argus may contain its own historical identifiers and implementation-local state models, but these have no authority over current ArgCore or Arg identity contracts.

Historical schemas must not be treated as current constitutional schemas.

## 6. State Authority

State authority: NONE for the current ecosystem.

Any state model represented here is historical implementation state.

It may be studied for provenance, compatibility, or reconstruction, but it cannot silently become the current state contract.

## 7. Contract Ownership

Historical ownership:

Argus owns the historical implementation contracts that existed inside the V10 workspace.

Current ownership:

Argus owns NO current ArgCore or Arg runtime contracts.

In particular, this repository cannot modify:

- ArgCore identity contracts
- ArgCore state contracts
- current Arg runtime contracts
- current certification semantics

## 8. Contract Modification Rights

Current contract modification rights: NONE.

Historical source may be modified only for:

- forensic annotation
- preservation
- reproducibility
- documentation
- explicitly isolated experiments

Any recovered mechanism intended for the current system must be reintroduced through the current Arg/ArgCore governance process rather than modified in place and treated as authoritative.

## 9. Contents Classification

Original implementation:
YES — this repository contains original ARGUS V10 implementation material.

Derived implementation:
YES — later systems may have derived concepts or mechanisms from this lineage.

Documentation:
YES — the README and source structure document the V10 architecture and engineering mandates.

Packaging material:
YES — `argus-v10-complete.zip` is an explicit packaged historical artifact.

Historical/provenance material:
YES — this is the primary role of the repository within the current ecosystem.

Current production implementation:
NO.

Current constitutional implementation:
NO.

## 10. Architectural Significance

Argus V10 is valuable because it preserves an earlier architectural state.

It may contain:

- original mechanisms
- architectural decisions
- engineering patterns
- earlier contract assumptions
- abandoned approaches
- components later reconstructed elsewhere

Those facts make it useful for forensic reconstruction.

They do not make it authoritative.

## 11. Recovery / Reuse Rule

If a mechanism from Argus is considered for reuse:

1. identify its original location and provenance
2. determine whether it already exists in later Arg/ArgCore lineage
3. determine whether the later implementation changed its semantics
4. test compatibility with current ArgCore contracts
5. introduce it into the current runtime only through an explicit current-repository change
6. preserve the historical origin in documentation

Copying code does not transfer authority.

## 12. Archive Boundary

This repository should remain frozen with respect to the current architecture.

Do not use it as a scratchpad for current Arg development.

Do not add current runtime features here merely because an older implementation is convenient.

If future forensic work requires annotations, those annotations must clearly identify themselves as annotations and must not overwrite the historical record.

## 13. Relationship to Current Arg

The authoritative relationship is:

    Argus V10
        = historical architectural/reference lineage

    Arg
        = current ArgOS runtime implementation

    ArgCore
        = foundational contract authority

Therefore:

    Argus → may inform Arg
    Argus → does not govern Arg
    Argus → does not govern ArgCore

## 14. Authority Boundary

FINAL RULE:

Argus remembers.

Arg executes.

ArgCore governs.

Historical material can inform current engineering decisions, but historical authority must never be confused with current authority.

This declaration freezes that distinction.
