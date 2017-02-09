import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Post } from './post/post';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: Post[] = [
    {
      id: 11,
      title: '斑马斑马，你不要睡着了，再给我看看你受伤的尾巴，我不想去触碰你受伤的疤',
      desc: '斑马独自一匹的时候是无法入睡的。 看过这个冷知识 是不是这首歌曲蒙上了一层更加悲伤的情绪呢 从斑马斑马你不要睡着了到斑马斑马你睡吧睡吧低沉且悲伤的诉说着一个流浪歌手无奈与绝望。斑马能够睡着 是她已经找到了可以让她安心睡下的那个人而那个人却不是我',
      date: 1486626735820,
      likeNumber: 10,
      commentNumber: 4
    },
    {
      id: 12,
      title: '7.02 游戏性更新',
      desc: '今日的更新带来了7.02游戏性更新，主要是大量的小型平衡性调整。其中包括了英雄天赋树、圣坛、地形，狼人也已加入队长模式，此次更新是新游记更新的后续平衡性改动。请前往',
      date: 1486626735820,
      likeNumber: 210,
      commentNumber: 166
    },
    {
      id: 13,
      title: '特别活动：暗月来袭',
      desc: '在这个免费活动中组起队伍，一同相助赛莉蒙妮捍卫神庙，抵挡暗月大军的进犯，收获女神青睐的奖品，其中还有机会获得极为珍稀的暗月Roshan宝宝信使，血统可谓超绝。',
      date: 1486626735820,
      likeNumber: 19,
      commentNumber: 10
    },
    {
      id: 14,
      title: '7.00 更新倒计时',
      desc: '明天我们将发布7.00更新专题，详细列出刀塔世界即将到来的所有改动内容，让你能抢先了解如何去适应大战的新面貌。',
      date: 1486626735820,
      likeNumber: 30,
      commentNumber: 24
    }
  ];
}