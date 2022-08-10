import React from 'react'
import qs from 'qs'

export default function index() {
  return (
    <div>index</div>
  )
}



const query = qs.stringify({
  populate: {
    header: {
        populate: '*'
    },
    hero: {
        populate: '*'
    },
    types_of_business: {
        populate: {
            features: {
                populate: {
                    feature: {
                        populate: "*"
                    }
                }
            }
        }
    },
    what_ht_can_do: {
        populate: {
            Offerings: {
                populate: '*'
            }
        }
    }
},
})