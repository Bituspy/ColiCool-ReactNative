import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';

import Dest from '../components/Dest';
import Liv from "../components/Liv";
import Livlist from '../components/Livlist';
import CommandesList from '../components/CommandesList';
//
import commentCaMarche from '../components/otherpages/commentcamarche';
import becomepartner from '../components/otherpages/becomepartner';
import contactUs from '../components/otherpages/contactus';
import mentionsLegales from '../components/otherpages/mentionslegales';

const screens = {
  Home: {
    screen: Home,
  },
  Destinataire: {
    screen: Dest,
  },
  LivreurList: {
    screen: Livlist,
  },
  CommandesList: {
    screen: CommandesList,
  },
  Livreur: {
    screen: Liv,
  },
  commentCaMarche: {
    screen: commentCaMarche,
  },
  contactUs: {
    screen: contactUs,
  },
  becomepartner: {
    screen: becomepartner,
  },
  mentionsLegales: {
    screen: mentionsLegales,
  },
};

const HomeStack = createStackNavigator(screens, {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  },
});

export default createAppContainer(HomeStack);