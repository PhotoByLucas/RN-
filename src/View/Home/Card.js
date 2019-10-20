import React from 'react';
import {View, Text, Button} from 'react-native';
import AtButton from '@ant-design/react-native/lib/button';
import {Card, WingBlank, Icon} from '@ant-design/react-native';

export default class MyCard extends React.Component {
  render() {
    return (
      <View
        style={{
          paddingTop: 10,
          // width: 300,
        }}>
        <WingBlank>
          <Card>
            {/* <Card.Header
              title="This is title"
              // thumbStyle={{width: 30, height: 30}}
              // thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            /> */}
            <Card.Body>
              <View style={{height: 20}}>
                <Text style={{marginLeft: 16}}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="一分钟"
              extra={
                <AtButton
                  size="small"
                  onPress={() => {
                    console.log(this.props);
                    // this.props;
                  }}>
                  开始执行
                </AtButton>
              }
            />
          </Card>
        </WingBlank>
      </View>
    );
  }
}
