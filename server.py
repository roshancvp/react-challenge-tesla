import os

from flask import Flask, request, render_template, Response
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

post_id_serial = 2
posts = {
    1: {
        'id': 1,
        'title': 'Is this hard?',
        'description': 'Tough questions here'
    },
    2: {
        'id': 2,
        'title': 'React Challenge 2017!',
        'description': 'Challenging answers there'
    },
    3: {
        'id': 3,
        'title': 'San Francisco, California',
        'description': 'This might be my favorite city.'
    },
    4: {
        'id': 4,
        'title': 'Silicon Valley is Back!',
        'description': '10/10 TV Show'
    },
    5: {
        'id': 5,
        'title': 'Posts Don\'t Need an Image',
        'description': 'But they do need a title and a description'
    },
    5: {
        'id': 5,
        'title': 'San Luis Obispo, CA',
        'description': 'Good people, great food.'
    },
    6: {
        'id': 6,
        'title': 'Tesla Model S',
        'description': 'Probably the coolest car ever.'
    },
    7: {
        'id': 7,
        'title': 'SLO Donut Co.',
        'description': 'They have good doughnuts.'
    }
}

image_id_serial = 6
images = {
  1: {
      'id': 1,
      'post_id': 1,
      'url': 'https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-01.jpg'
  },
  2: {
      'id': 2,
      'post_id': 1,
      'url': 'https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-02.jpg'
  },
  3: {
      'id': 3,
      'post_id': 2,
      'url': 'https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-03.jpg'
  },
  4: {
      'id': 4,
      'post_id': 2,
      'url': 'https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-04.jpg'
  },
  5: {
      'id': 5,
      'post_id': 2,
      'url': 'https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-05.jpg'
  },
  6: {
      'id': 6,
      'post_id': 2,
      'url': 'https://www.tesla.com/sites/default/files/blog_images/model-s-photo-gallery-06.jpg'
  },
  7: {
      'id': 7,
      'post_id': 3,
      'url': 'https://lonelyplanetimages.imgix.net/a/g/hi/t/9cf024dfd5c0bcb2b17f4785340145ea-san-francisco.jpg?sharp=10&vib=20&w=1200'
  },
  8: {
      'id': 8,
      'post_id': 3,
      'url': 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1429821784/CHARMING0415-san-francisco.jpg?itok=vmayDoQQ'
  },
  9: {
      'id': 9,
      'post_id': 4,
      'url': 'http://media.npr.org/assets/img/2016/06/09/john-p-fleenor-courtesy-of-hbo_wide-b3f37dd44d036eeed787c822e170584d98ca00a9-s900-c85.jpg'
  },
  10: {
    'id': 10,
    'post_id': 5,
    'url': 'https://images.trvl-media.com/media/content/shared/images/travelguides/destination/6046822/San-Luis-Obispo-31784.jpg'
  },
  11: {
    'id': 11,
    'post_id': 5,
    'url': 'http://www.veritas.org/wp-content/uploads/2013/09/CalPoly.jpg'
  },
  11: {
    'id': 11,
    'post_id': 6,
    'url': 'http://static.robbreport.com/sites/default/files/tesla-s-p90-02.jpg'
  },
  12: {
    'id': 12,
    'post_id': 6,
    'url': 'https://www.teslamotors.com/sites/default/files/red-tesla-model-s.jpg'
  },
  13: {
    'id': 13,
    'post_id': 7,
    'url': 'https://polyplaces.files.wordpress.com/2014/06/img_4205.jpg'
  } 
}

class Image(Resource):
    def get(self, image_id):
        return images[image_id]

    def put(self, image_id):
        image = images[image_id]
        data = request.get_json()
        values = {k: data.get(k, v) for k, v in image.items()}
        images[image_id].update(values)
        return values

    def delete(self, image_id):
        values = images[image_id]
        del images[image_id]
        return values

class Images(Resource):
    def get(self):
        return images.values()

    def post(self):
        global image_id_serial
        image_id_serial += 1
        data = request.get_json()
        values = {
            'id': image_id_serial,
            'url': data['url'],
            'post_id': data['post_id']
        }

        images[image_id_serial] = values
        return values


class Post(Resource):
    def get(self, post_id):
        data = posts[post_id].copy()
        data['images'] = [img for img in images.values() if img['post_id'] == post_id]
        return data

    def put(self, post_id):
        post = posts[post_id]
        data = request.get_json()
        data.pop('images', [])
        values = {k: data.get(k, v) for k, v in post.items()}
        posts[post_id].update(values)
        values['images'] = [img for img in images.values() if img['post_id'] == post_id]
        return values

    def delete(self, post_id):
        values = posts[post_id]
        del posts[post_id]
        values['images'] = [img for img in images.values() if img['post_id'] == post_id]
        return values


class Posts(Resource):
    def get(self):
        output = []
        for post in  posts.values():
            post = post.copy()
            post['images'] = [img for img in images.values() if img['post_id'] == post['id']]
            output.append(post)
        return output

    def post(self):
        global post_id_serial
        post_id_serial += 1
        data = request.get_json()
        print data
        values = {
            'id': post_id_serial,
            'title': data['title'],
            'description': data['description']
        }
        posts[post_id_serial] = values
        return values

api.add_resource(Images, '/images')
api.add_resource(Image,  '/images/<int:image_id>')
api.add_resource(Posts, '/posts')
api.add_resource(Post,  '/posts/<int:post_id>')

if __name__ == '__main__':
    app.run(debug=True, threaded=True)
