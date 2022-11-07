const Campaign = require('campaign')
const express = require('express')

function turnOrder() {
    let newList = Campaign.filter(onlyIncluded)

    function onlyIncluded() {
        return if (Campaign.players.playerName || Campaign.players)
    }

    let turnOrderList = _.orderBy(turnOrder, desc)

}

module.exports = turnOrder