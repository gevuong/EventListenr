class AddQuantitytoTicket < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :quantity, :integer, null: false
  end
end
