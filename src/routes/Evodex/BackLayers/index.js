import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import ExchangeBackLayer from './ExchangeBackLayer'
import FeeBackLayer from './FeeBackLayer'
import LiquidityBackLayer from './LiquidityBackLayer'

const useStyles = makeStyles((theme) => ({
  rootPage: {
    marginTop: theme.spacing(7),
    padding: theme.spacing(3, 1, 0, 1),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(9),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(12),
      paddingRight: theme.spacing(32),
      paddingLeft: theme.spacing(32)
    }
  },
  titleBox: {
    width: 225,
    paddingLeft: theme.spacing(2),
    '& h4': {
      fontSize: 33,
      letterSpacing: '-0.49px',
      color: '#ffffff'
    },
    '& p': {
      fontSize: 16.2,
      fontWeight: 500,
      letterSpacing: '0.2px',
      color: 'rgba(255, 255, 255, 0.6)'
    },
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      '& p': {
        fontSize: 20.2,
        fontWeight: 600,
        letterSpacing: '0.25px'
      }
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(0)
    }
  }
}))

const BackLayers = ({ pathname, onReload, ual, isLightMode }) => {
  const classes = useStyles()

  switch (pathname) {
    case '/evodex/liquidity':
      return (
        <LiquidityBackLayer
          ual={ual}
          onReload={onReload}
          isLightMode={isLightMode}
        />
      )

    case '/evodex/exchange':
      return (
        <ExchangeBackLayer
          ual={ual}
          onReload={onReload}
          isLightMode={isLightMode}
        />
      )

    case '/evodex/fee':
      return (
        <FeeBackLayer ual={ual} onReload={onReload} isLightMode={isLightMode} />
      )

    case '/evodex/faq':
      return (
        <Box className={classes.rootPage}>
          <Box className={classes.titleBox}>
            <Typography variant="h4">FAQ's</Typography>
          </Box>
        </Box>
      )

    case '/evodex/about':
      return (
        <Box className={classes.rootPage}>
          <Box className={classes.titleBox}>
            <Typography variant="h4">About Evodex</Typography>
          </Box>
        </Box>
      )

    default:
      return (
        <ExchangeBackLayer
          ual={ual}
          onReload={onReload}
          isLightMode={isLightMode}
        />
      )
  }
}

BackLayers.propTypes = {
  pathname: PropTypes.string,
  ual: PropTypes.object,
  onReload: PropTypes.func,
  isLightMode: PropTypes.bool
}

export default BackLayers