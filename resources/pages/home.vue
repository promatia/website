<template>
    <web>
        <template slot="head">
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "GovernmentOrganization",
                "name": "Promatia",
                "alternateName": "Government of Promatia",
                "url": "https://promatia.com",
                "logo": "https://promatia.com/apple-icon.png",
                "foundingDate": "1998",
                "founders": [
                    {
                        "@type": "Person",
                        "name": "Dominus Vilicus"
                    },
                    {
                        "@type": "Person",
                        "name": "Xenith Takiane"
                    },
                    {
                        "@type": "Person",
                        "name": "Timothy Schoonover"
                    }
                ],
                "sameAs": [
                    "https://facebook.com/promatiagov",
                    "https://twitter.com/promatiagov",
                    "https://promatia.com"
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "290"
                }
            }
            </script>
        </template>
        <template slot="content">
            <hero class="hero full image" :img="northernTerritory">
                Home Page
            </hero>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
// .h200
//     height 200%
</style>
<script>
import web from "@/layouts/web"
import hero from "@/components/hero"
import northernTerritory from "@/images/northernTerritory.png"

export default {
    setup() {
        return {
            northernTerritory
        }
    },
    components: {
        web,
        hero
    }
}
</script>