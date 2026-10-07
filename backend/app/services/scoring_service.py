def engagement_score(
    features: dict[str, float]
) -> float:
    if not features:
        return 0.0

    return round(
        max(
            0,
            min(
                100,
                sum(features.values())
                / len(features)
            )
        ),
        2
    )