import React from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Keto",
        description: (
            <>
                Nearly all of the recipes on this site are keto-friendly. If you
                are not familiar with the keto diet, it is a low-carb diet. Our
                recipes tend to be more vegetable heavy than most keto recipes.
            </>
        ),
    },
    {
        title: "Inexact",
        description: (
            <>
                Many measurements are approximate. This is intentional to
                encourage experimentation, as that is how these recipes are
                arrived at.
            </>
        ),
    },
    {
        title: "Tested",
        description: (
            <>
                No recipe on this site has been tested by fewer than 5 unique,
                probably biased mouths.
            </>
        ),
    },
];

function Feature({ title, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
