
class Person():
    # Class variable
    default_age = 18

    def __init__(self, name, nationality):
        # Instance variables
        self.name = name
        self.nationality = nationality

    # Instance method
    def greeting(self, name):
        print('Hi {}, my name is {}'.format(name, self.name))

    # Class method
    @classmethod
    def jump(cls):
        print('Jumping')

    # Static method
    @staticmethod
    def run():
        print('Running')


if __name__ == "__main__":
    carlos = Person('Carlos Vara', 'Mexican')
    print('{} | {} | {}\n'.format(carlos.name,
                                  carlos.nationality, carlos.default_age))
    carlos.greeting('Pablo')
    carlos.jump()
    carlos.run()
