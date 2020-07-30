import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import SearchIcon from '@material-ui/icons/Search'

import CollapseTable from '../../components/CollapseTable'
import { useExchange } from '../../context/exchange.context'

const useStyles = makeStyles((theme) => ({
  inputSearch: {
    height: 48
  }
}))

const Fee = ({ onClickRow }) => {
  const classes = useStyles()
  const [{ pairs }, { update }] = useExchange()
  const [myPools, setMyPools] = useState([])
  const [communityPools, setCommunityPools] = useState([])
  const [filter, setFilter] = useState('')

  const handleOnClick = (currentPair) => {
    onClickRow && onClickRow()
    update({
      currentPair
    })
  }

  useEffect(() => {
    let options = pairs

    if (filter) {
      options = options.filter((pair) =>
        pair.token.includes(filter.toUpperCase())
      )
    }

    setMyPools(options.filter((pair) => !!pair.balance))
    setCommunityPools(options)
  }, [pairs, filter])

  return (
    <Box>
      <OutlinedInput
        id="outlined-adornment-amount"
        fullWidth
        startAdornment={<SearchIcon />}
        className={classes.inputSearch}
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />
      <CollapseTable data={myPools} label="My Pool" onClick={handleOnClick} />
      <CollapseTable
        data={communityPools}
        label="Community Pool"
        onClick={handleOnClick}
      />
    </Box>
  )
}

Fee.propTypes = {
  onClickRow: PropTypes.func
}

export default Fee