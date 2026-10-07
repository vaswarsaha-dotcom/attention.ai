FEATURE_COLUMNS = [
    "action",
    "suspense",
    "emotion",
    "music",
    "pacing",
    "visual",
    "dialogue",
    "character_count",
    "transition_rate",
    "scene_duration"
]


def build_features(df):
    return df[FEATURE_COLUMNS]