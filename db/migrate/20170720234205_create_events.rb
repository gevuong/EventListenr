class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.string :location, null: false
      t.string :description, null: false
      t.datetime :date_time, null: false
      t.string :image_url, null: false
      t.integer :ticket_price, null: false
      t.integer :ticket_quantity, null: false
      t.integer :organizer_id, null: false
      t.integer :category_id, array: true, default: []
    end
    add_index :events, :organizer_id
    add_index :events, :category_id, using: 'gin'
  end
end
