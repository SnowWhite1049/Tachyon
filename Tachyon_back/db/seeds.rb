# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

case Rails.env
  # when "development"
    # User.create 
    #   first_name:'野中', last_name:'馨太', email:'moonrider.crowdworks@gmail.com', password: 'admin123',
    #   country:'JP-392', prefecture:'hyogo', user_number:'U0000002'

    Maker.create!([
      {
        name:'Accuphase/Kensonic',
        country:'in'
      },
      {
        name:'Audio Current',
        country:'in'
      },
      {
        name:'DALI',
        country:'out'
      },
      {
        name:'SANSUI',
        country:'in'
      },
      {
        name:'その他',
        country:'in'
      },
    ])

    Product.create([
      {
        jp_name:'プリアンプ ',
        en_name:'Pri  Amplifier',
        short_name:'PR'
      },
      {
        jp_name:'パワーアンプ  ',
        en_name:'Power  Amplifier',
        short_name:'PO'
      },
      {
        jp_name:'スピーカーシステム  ',
        en_name:'Speaker System',
        short_name:'SP'
      },
      {
        jp_name:'その他  ',
        en_name:'ETC',
        short_name:'ET'
      },
    ])
end
